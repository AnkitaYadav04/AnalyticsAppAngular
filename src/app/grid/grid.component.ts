import { Component, OnInit } from '@angular/core';
import { HttpService } from "../httpService";

interface IHistory {
  model: string;
  commodity: string;
  date: string;
  newTradeAction: string;
}
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  defaultColDef = {
    flex: 1,
    floatingFilter: true,
    resizable: false,
  }
  columnDefs = [
    { field: 'date', sortable: true, filter: false },
    {
      field: 'model', sortable: true,
      filter: 'agSetColumnFilter',
    },
    {
      field: 'commodity',
      sortable: true,
      filter: 'agSetColumnFilter',
    },
    { field: 'newTradeAction', sortable: true, headerName: 'Tonnes/Lots' },
  ];

  rowData: IHistory[] = [];

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getHistory().subscribe((response: any) => {
      const data: IHistory[] = [];
      response.forEach((commodity: any) => {
        commodity.historyDetails.forEach((history: { date: string; newTradeAction: string }) => {
          data.push({
            ...history,
            model: commodity.model,
            commodity: commodity.commodity,
          });
        })
      })
      this.rowData = data;
    })
  }

}
