import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';

import { InterceptorsModule } from '@shared/interceptors/interceptors.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { PokemonState } from '@shared/state/pokemon.state';
import { LoadingState } from '@shared/state/loading.state';
import { PokemonDetailState } from '@shared/state/pokemon-detail.state';
import { FooterComponent } from '@core/components/footer/footer.component';
import { HeaderComponent } from '@core/components/header/header.component';
import { LoadingComponent } from '@shared/components/loading/loading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchParamsState } from '@shared/state/search-params.state';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InterceptorsModule,
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
    NgxsModule.forRoot([
      PokemonState,
      LoadingState,
      PokemonDetailState,
      SearchParamsState,
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
