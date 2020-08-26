import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

 

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  baseUrl = 'https://survey-heraizen.herokuapp.com/';
  orgname = '';
  selectedsectionindex = null;
  selectedque = '';

  constructor(private http:HttpClient) { }

  orgs(){
    return this.http.get(`${this.baseUrl}/query1`);
  }
  selectedorg_query1(orgname){
    return this.http.get(`${this.baseUrl}/query2_1/`+this.orgname);
  }
  selectedorg_query2(orgname){
    return this.http.get(`${this.baseUrl}/query2_2/`+this.orgname);
  }
  selectedorg_query3(orgname){
    return this.http.get(`${this.baseUrl}/query2_3/`+this.orgname);
  }
  stats_1(){
    return this.http.get(`${this.baseUrl}/query3_1`);
  }
  stats_2(){
    return this.http.get(`${this.baseUrl}/query3_2`);
  }
  stats_3(){
    return this.http.get(`${this.baseUrl}/query3_3`);
  }
  download(){
    return this.http.get(`${this.baseUrl}/download`);
  }
  all_data_q1(){
    return this.http.get(`${this.baseUrl}/all_data_q1`);
  }
  all_data_q2(){
    return this.http.get(`${this.baseUrl}/all_data_q2`);
  }
  all_data_q3(){
    return this.http.get(`${this.baseUrl}/all_data_q3`);
  }
  allsections(){
    return this.http.get(`${this.baseUrl}/allsections`);
  }
  selectedsection_q1(selectedsectionindex){
    return this.http.get(`${this.baseUrl}/selectedsection_q1/`+this.selectedsectionindex);
  }
  selectedsection_q2(selectedsectionindex){
    return this.http.get(`${this.baseUrl}/selectedsection_q2/`+this.selectedsectionindex);
  }
  selectedsection_q3(selectedsectionindex){
    return this.http.get(`${this.baseUrl}/selectedsection_q3/`+this.selectedsectionindex);
  }
  allquesofsection(selectedsectionindex){
    return this.http.get(`${this.baseUrl}/`+this.selectedsectionindex);
  }
  selectedque_q1(selectedsectionindex){
    return this.http.get(`${this.baseUrl}/que1/`+this.selectedque);
  }
  selectedque_q2(selectedsectionindex){
    return this.http.get(`${this.baseUrl}/que2/`+this.selectedque);
  }
  selectedque_q3(selectedsectionindex){
    return this.http.get(`${this.baseUrl}/que3/`+this.selectedque);
  }

}
