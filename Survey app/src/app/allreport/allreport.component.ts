import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import { NgxSpinnerService } from "ngx-spinner";
import {FormsModule} from '@angular/forms';
import { logging } from 'protractor';
import { ReportService } from './../report.service';


@Component({
  selector: 'app-allreport',
  templateUrl: './allreport.component.html',
  styleUrls: ['./allreport.component.css']
})
export class AllreportComponent implements OnInit {

  stats1 = null;
  stats2 = null;
  stats3 = null;

  constructor(private reportservice: ReportService,private spinner: NgxSpinnerService) { 
    this.spinner.show();
 
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  ngOnInit(): void {
    // for 1st que:
    this.reportservice.all_data_q1().subscribe(res=>{
      this.stats1 = res;
      console.log(this.stats1);
        let lst1 = [];
        for (var i in this.stats1){
            var values1 = Object.values(this.stats1[i]);
            var keys1 = Object.keys(this.stats1[i]);
            for (var j=0;j<keys1.length;j++){
            lst1.push([keys1[j],values1[j]]); 
            }     
    }
     console.log(lst1);
  
    let chartData1:any = [['Status','Count']];
      for(let j=0;j<lst1.length;j++){

        chartData1.push(lst1[j]);
      } 
      this.drawChart1(chartData1);
    })

    // for 2nd que:
    this.reportservice.all_data_q2().subscribe(res=>{
      this.stats2 = res;
      console.log(this.stats2);
        let lst2 = [];
        for (var i in this.stats2){
            var values2 = Object.values(this.stats2[i]);
            var keys2 = Object.keys(this.stats2[i]);
            for (var j=0;j<keys2.length;j++){
            lst2.push([keys2[j],values2[j]]); 
            }     
    }
      console.log(lst2);
  
    let chartData2:any = [['Type of Implementation','Count']];
      for(let j=0;j<lst2.length;j++){

        chartData2.push(lst2[j]);
      } 
      this.drawChart2(chartData2);
    })

  // for 3rd que:
  this.reportservice.all_data_q3().subscribe(res=>{
    this.stats3 = res;
    console.log(this.stats3);
      let lst3 = [];
      for (var i in this.stats3){
          var values3 = Object.values(this.stats3[i]);
          var keys3 = Object.keys(this.stats3[i]);
          for (var j=0;j<keys3.length;j++){
          lst3.push([keys3[j],values3[j]]); 
          }     
  }
    console.log(lst3);

  let chartData3:any = [['Time','Count']];
    for(let j=0;j<lst3.length;j++){

      chartData3.push(lst3[j]);
    } 
    this.drawChart3(chartData3);
  })
    

  }
   
  drawChart1(chartData){
    this.Bar1 = {
      chartType: 'PieChart',
      dataTable:chartData,
      // firstRowIsData: false,
      options: {'title': '% Share','width':600, 'height':400,'is3D':true, 'fontSize': '12','titleTextStyle': {fontSize: 15,bold: true,underline: true}}};
    }

    public Bar1: GoogleChartInterface={
      chartType: 'Bar',
      dataTable:null,
      // firstRowIsData: false,
      options: {'title':'% Share','width':400, 'height':300},
      };
  drawChart2(chartData){
    this.Bar2 = {
      chartType: 'PieChart',
      dataTable:chartData,
      // firstRowIsData: false,
      options: {'title': '% Share','width':600, 'height':400,'is3D':true, 'fontSize': '12','titleTextStyle': {fontSize: 15,bold: true,underline: true}}};
    }

    public Bar2: GoogleChartInterface={
      chartType: 'Bar',
      dataTable:null,
      // firstRowIsData: false,
      options: {'title':'% Share','width':400, 'height':300},
      };   
  drawChart3(chartData){
    this.Bar3 = {
      chartType: 'PieChart',
      dataTable:chartData,
      // firstRowIsData: false,
      options: {'title': '% Share','width':600, 'height':400,'is3D':true, 'fontSize': '12','titleTextStyle': {fontSize: 15,bold: true,underline: true}}};
    }

    public Bar3: GoogleChartInterface={
      chartType: 'Bar',
      dataTable:null,
      // firstRowIsData: false,
      options: {'title':'% Share','width':400, 'height':300},
      }; 

}
