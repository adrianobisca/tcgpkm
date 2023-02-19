import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { CoreModule } from '@core/core.module';
import { PokemonsModule } from '@pokemons/pokemons.module';
import { LoadingModule } from '@shared/components/loading/loading.module';
import { InterceptorsModule } from '@shared/interceptors/interceptors.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { PokemonState } from '@shared/state/pokemon.state'
import { LoadingState } from '@shared/state/loading.state'
import { PokemonDetailState} from '@shared/state/pokemon-detail.state'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PokemonsModule,
    CoreModule,
    InterceptorsModule,
    LoadingModule,
    NgxsModule.forRoot([
      PokemonState,
      LoadingState,
      PokemonDetailState,
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
