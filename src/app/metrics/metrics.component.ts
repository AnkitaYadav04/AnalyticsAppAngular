import { Component, OnInit } from '@angular/core';
import { HttpService } from "../httpService";

interface IMetric {
  title: string;
  totalPnLLTD: string;
  drawdownYTD: string;
  pnlDaily: string;
  price: number;
}

interface ICommodity {
  model: string;
  commodity: string;
  totalPnLLTD: number;
  drawdownYTD: number;
  details: {
    pnlDaily: number;
    price: number;
  }
}
@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {
  metricsData: IMetric[] = [];
  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.getMetricsData();
  }

  getMetricsData() {
    this.httpService.getMetrice().subscribe((response: any) => {
      response.forEach((commodity: ICommodity) => {
        const titleName = `${commodity.model.trim()}_${commodity.commodity.trim()}`;
        this.metricsData.push({
          title: titleName,
          totalPnLLTD: commodity.totalPnLLTD.toFixed(2),
          drawdownYTD: commodity.drawdownYTD.toFixed(2),
          pnlDaily: commodity.details.pnlDaily.toFixed(2),
          price: commodity.details.price,
        });
      })
    })
  }

}
