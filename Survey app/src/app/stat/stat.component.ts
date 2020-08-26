import { logging } from 'protractor';
import { ReportService } from './../report.service';
import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
// import { NgxSpinnerService } from "ngx-spinner";
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
  stats1 = null;
  stats2 = null;
  stats3 = null;

  constructor(private reportservice: ReportService) { 
    // this.spinner.show();
 
    setTimeout(() => {
      // this.spinner.hide();
    }, 2000);
  }

  ngOnInit(): void {
    // for 1st que:
    this.reportservice.stats_1().subscribe(res=>{
      this.stats1 = res;
      console.log(this.stats1);
        let lst1 = [];
        for (var i in this.stats1){
            var values1 = Object.values(this.stats1[i]).reverse();
            lst1.push(values1);      
    }
     console.log(lst1);
  
    let chartData1:any = [['Org','Satisfactory','New Program','Need Revamp']];
      for(let j=0;j<lst1.length;j++){

        chartData1.push(lst1[j]);
      } 
      this.drawChart1(chartData1);
    })
    
   // for 2nd que:
   this.reportservice.stats_2().subscribe(res=>{
    this.stats2 = res;
    console.log(this.stats2);
      let lst2 = [];
      for (var i in this.stats2){
          var values2 = Object.values(this.stats2[i]).reverse();
          lst2.push(values2);      
  }
   console.log(lst2);

  let chartData2:any = [['Org','Pedagogical','Other','Administrative']];
    for(let j=0;j<lst2.length;j++){

      chartData2.push(lst2[j]);
    } 
    this.drawChart2(chartData2);
  })
   //for 3rd que:
   this.reportservice.stats_3().subscribe(res=>{
    this.stats3 = res;
    console.log(this.stats3);
      let lst3 = [];
      for (var i in this.stats3){
          var values3 = Object.values(this.stats3[i]).reverse();
          lst3.push(values3);      
  }
   console.log(lst3);

  let chartData3:any = [['Org','Short Term','Long Term']];
    for(let j=0;j<lst3.length;j++){

      chartData3.push(lst3[j]);
    } 
    this.drawChart3(chartData3);
  })
  }
   
  drawChart1(chartData){
    this.Bar1 = {
      chartType: 'Bar',
      dataTable:chartData,
      // firstRowIsData: false,
      options: {'title': '% Share','width':600, 'height':400, 'fontSize': '12','titleTextStyle': {fontSize: 15,bold: false,underline: true}}};
    }

    public Bar1: GoogleChartInterface={
      chartType: 'Bar',
      dataTable:null,
      // firstRowIsData: false,
      options: {'title':'% Share','width':400, 'height':300},
      };
  drawChart2(chartData){
    this.Bar2 = {
      chartType: 'Bar',
      dataTable:chartData,
      // firstRowIsData: false,
      options: {'title': '% Share','width':600, 'height':400, 'fontSize': '12','titleTextStyle': {fontSize: 15,bold: false,underline: true}}};
    }

    public Bar2: GoogleChartInterface={
      chartType: 'Bar',
      dataTable:null,
      // firstRowIsData: false,
      options: {'title':'% Share','width':400, 'height':300},
      };   
  drawChart3(chartData){
    this.Bar3 = {
      chartType: 'Bar',
      dataTable:chartData,
      // firstRowIsData: false,
      options: {'title': '% Share','width':600, 'height':400, 'fontSize': '12','titleTextStyle': {fontSize: 15,bold: false,underline: true}}};
    }

    public Bar3: GoogleChartInterface={
      chartType: 'Bar',
      dataTable:null,
      // firstRowIsData: false,
      options: {'title':'% Share','width':400, 'height':300},
      };       
}
