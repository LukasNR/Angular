import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeiroAppComponent } from './components/primeiro-app/primeiro-app.component';
import { SegundoAppComponent } from './components/segundo-app/segundo-app.component';
import { TerceiroAppComponent } from './components/terceiro-app/terceiro-app.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroAppComponent,
    SegundoAppComponent,
    TerceiroAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
