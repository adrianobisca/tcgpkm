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
import { PokemonDataService } from '@shared/services/pokemon-data.service';

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
  ],
  providers: [PokemonDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
