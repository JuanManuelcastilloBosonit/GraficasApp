import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts'
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficasComponent } from './graficas/graficas.component';
import { GraficaLineaComponent } from './grafica-linea/grafica-linea.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficasComponent,
    GraficaLineaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
