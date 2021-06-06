import { Component, OnInit } from '@angular/core';
import * as moment from "moment";
import * as Highcharts from 'highcharts';
import { HttpService } from "../httpService";

@Component({
  selector: 'app-high-chart',
  templateUrl: './high-chart.component.html',
  styleUrls: ['./high-chart.component.css']
})
export class HighChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any = [];

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getAnalytics().subscribe((response: any) => {
      const charts: any = {};
      response.forEach((commodity: any, index: number) => {
        const chartName = `${commodity.model.trim()}_${commodity.commodity.trim()}`;
        const chartData: any = [
          { name: 'Current Position', data: [] },
          { name: 'Trade Action', data: [] },
          { name: 'Daily PNL', data: [] },
          { name: 'price', data: [] },
        ]
        const chartLabels: string[] = [];
        commodity.details.forEach((item: any) => {
          chartLabels.push(moment(item.date).format('l').toString());
          chartData[0].data.push(item.currentPosition);
          chartData[1].data.push(item.newTradeAction);
          chartData[2].data.push(item.pnlDaily);
          chartData[3].data.push(item.price);
        })
        charts[chartName] = {
          data: chartData,
          labels: chartLabels
        };
      })
      this.chartOptions = []

      // @ts-ignore
      for (const [chartName, { labels, data }] of Object.entries(charts)) {
        this.chartOptions.push({
          xAxis: {
            categories: labels
          },
          title: {
            text: chartName
          },
          series: data,

        });
      }
    })
  }

}
