import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from "moment";

const API_URL = `https://analyticsappapi.azurewebsites.net/api`;
@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getMetrice() {
    return this.http.get(`${API_URL}/metrice`);
  }


  getAnalytics() {
    return this.http.get(`${API_URL}/analytics`);
  }

  getHistory() {
    const fromDate = moment(window.today).subtract(7, 'days').format('MM/DD/YYYY');
    const toDate = moment(window.today).format('MM/DD/YYYY');
    return this.http.get(`${API_URL}/history?fromDate=${fromDate}&toDate=${toDate}&filterModel=&filtercommodity=`);
  }

}
