import { Component, OnInit } from '@angular/core';
import { HttpService } from "../httpService";

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {
  metricsData: any = [];
  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.getChartData();
  }

  getChartData() {
    this.httpService.getMetrice().subscribe((response: any) => {
      const charts: any = {};
      response.forEach((commodity: any) => {
        const chartName = `${commodity.model.trim()}_${commodity.commodity.trim()}`;
        this.metricsData.push({
          title: chartName,
          totalPnLLTD: Math.round(commodity.totalPnLLTD),
          drawdownYTD: Math.round(commodity.drawdownYTD),
          pnlDaily: Math.round(commodity.details.pnlDaily),
          price: Math.round(commodity.details.price),
        });
      })
    })
  }

}
