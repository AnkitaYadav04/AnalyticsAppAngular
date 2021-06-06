import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";

import { HighchartsChartModule } from 'highcharts-angular';
import { AgGridModule } from 'ag-grid-angular';

import { HttpService } from "./httpService";
import { AppComponent } from './app.component';
import { HighChartComponent } from './high-chart/high-chart.component';
import { GridComponent } from './grid/grid.component';
import { MetricsComponent } from './metrics/metrics.component';


@NgModule({
  declarations: [
    AppComponent,
    HighChartComponent,
    GridComponent,
    MetricsComponent
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
