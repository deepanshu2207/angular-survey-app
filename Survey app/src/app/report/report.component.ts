import { ReportService } from './../report.service';
import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import { NgxSpinnerService } from "ngx-spinner";
import {FormsModule} from '@angular/forms';
// import { saveAs } from 'file-saver';





@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  all_org = null;
  selectedOrg: string = '';
  selectedOrgData_q1 = null;
  selectedOrgData_q2 = null;
  selectedOrgData_q3 = null;
  all_data = null;
  fileName= 'ExcelSheet.xlsx';

  constructor(private reportservice: ReportService, private spinner:NgxSpinnerService) {
    this.spinner.show();
 
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
   }
    
  ngOnInit(): void {
    this.reportservice.orgs().subscribe(res=>{
      this.all_org = res;
   })
  }

  getdetailsofselectedorg_query1(){
      this.reportservice.orgname = this.selectedOrg;
      this.reportservice.selectedorg_query1(this.selectedOrg).subscribe(res=>{
        this.selectedOrgData_q1 = res;
        console.log(this.selectedOrgData_q1);
        let lst1 = [];
        for (var i in this.selectedOrgData_q1){
          console.log(this.selectedOrgData_q1[i]['_id']);
            var values = Object.values(this.selectedOrgData_q1[i]['_id']);
            lst1.push((JSON.stringify(values)));
            console.log(lst1);
    }
  
    let chartData1:any = [['Type of response','Count']];
      for(let j in this.selectedOrgData_q1){

        chartData1.push([lst1[j],this.selectedOrgData_q1[j]['count']]);
      } 
      this.drawChart1(chartData1); 
    })  
  
  }

  getdetailsofselectedorg_query2(){
    this.reportservice.orgname = this.selectedOrg;
    this.reportservice.selectedorg_query2(this.selectedOrg).subscribe(res=>{
      this.selectedOrgData_q2 = res;
      console.log(this.selectedOrgData_q2);
      let lst2 = [];
      for (var i in this.selectedOrgData_q2){
        console.log(this.selectedOrgData_q2[i]['_id']);
          var values = Object.values(this.selectedOrgData_q2[i]['_id']);
          lst2.push((JSON.stringify(values)));
          console.log(lst2);
  }

  let chartData2:any = [['Type of response','Count']];
    for(let j in this.selectedOrgData_q2){

      chartData2.push([lst2[j],this.selectedOrgData_q2[j]['count']]);
    } 
    this.drawChart2(chartData2);
  })  

}

getdetailsofselectedorg_query3(){
  this.reportservice.orgname = this.selectedOrg;
  this.reportservice.selectedorg_query3(this.selectedOrg).subscribe(res=>{
    this.selectedOrgData_q3 = res;
    console.log(this.selectedOrgData_q3);
    let lst3 = [];
    for (var i in this.selectedOrgData_q3){
      console.log(this.selectedOrgData_q3[i]['_id']);
        var values = Object.values(this.selectedOrgData_q3[i]['_id']);
        lst3.push((JSON.stringify(values)));
        console.log(lst3);
}

let chartData3:any = [['Type of response','Count']];
  for(let j in this.selectedOrgData_q3){

    chartData3.push([lst3[j],this.selectedOrgData_q3[j]['count']]);
  } 
  this.drawChart3(chartData3);
})  

}
  
  drawChart1(chartData){
    this.pieChart1 = {
      chartType: 'PieChart',
      dataTable:chartData,
      // firstRowIsData: false,
      options: {'title': '% Share in the form:\n [Need Revamp, New Program to implement, Satisfactory]','width':600, 'height':600, 'is3D':true, 'fontSize': '12','titleTextStyle': {fontSize: 15,bold: false,underline: true},chartArea: {  width: "70%", height: "70%" }},
    };
    }

    drawChart2(chartData){
      this.pieChart2 = {
        chartType: 'PieChart',
        dataTable:chartData,
        // firstRowIsData: false,
        options: {'title': '% Share in the form:\n [Administrative, Pedagogical, Other]','width':600, 'height':600, 'is3D':true, 'fontSize': '12','titleTextStyle': {fontSize: 15,bold: false,underline: true},chartArea: {  width: "70%", height: "70%" }},
      };
      }
      
      drawChart3(chartData){
        this.pieChart3 = {
          chartType: 'PieChart',
          dataTable:chartData,
          // firstRowIsData: false,
          options: {'title': '% Share in the form:\n [Long Term, Short Term]','width':600, 'height':600, 'is3D':true, 'fontSize': '12','titleTextStyle': {fontSize: 15,bold: false,underline: true},chartArea: {  width: "70%", height: "70%" }},
        };
        }  

  public pieChart1: GoogleChartInterface={
    chartType: 'PieChart',
    dataTable:null,
    // firstRowIsData: false,
    options: {'title':'% Share','width':400, 'height':300},
    };
  public pieChart2: GoogleChartInterface={
    chartType: 'PieChart',
    dataTable:null,
    // firstRowIsData: false,
    options: {'title':'% Share','width':400, 'height':300},
    };
  public pieChart3: GoogleChartInterface={
    chartType: 'PieChart',
    dataTable:null,
    // firstRowIsData: false,
    options: {'title':'% Share','width':400, 'height':300},
    };  

  download_data(){
      this.reportservice.download().subscribe(res=>{
        this.all_data = res;
        console.log(this.all_data);
        const blob = new Blob([JSON.stringify(this.all_data)], {type : 'application/json'});
        //  saveAs(blob, 'all_data.json');
       
  })
}

}
