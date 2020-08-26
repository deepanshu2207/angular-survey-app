import { Component, OnInit } from '@angular/core';
import {QueModel} from '../shared/model/compl.model';
import { HttpClientModule, HttpClient ,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  
  topicidd:string = '';
  topicnamee:string = '';
  ref:string = '';
  desc:string = '';
  verified:boolean = true;
  secretkey:string = "";
  actualkey:string = "sanyam";
  quesadd:boolean = false;
  finaldata : QueModel = {topicId:'',topicName:'',data:[]};
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  verifyadmin()
  {
      if(this.secretkey === this.actualkey)
      { 
        console.log(this.secretkey);
        
        this.verified = false;
        console.log(this.verified);
      }
  }
  addques()
  { 
      this.finaldata['topicId'] = this.topicidd;
      this.finaldata['topicName'] = this.topicnamee;
      this.finaldata['data'].push({ref:this.ref,desc:this.desc,questions:[
        {
        question: "Present status in KA",
        options: [
            {0:false,qu:"Satisfactory"},
            {1:false,qu:"Needs revamp"},
            {2:false,qu:"New program to be implemented"}
        ],
        textAnswer: "Other",
        allowTextAnswer: false
    },
    {
      question: "Nature of Implications",
      options: [
          {0:false,qu:"Administrative"},
          {1:false,qu:"Pedagogical"},
      ],
      textAnswer: "Other",
      allowTextAnswer: true
  },
  {
    question: "Implementation Timeline",
    options: [
        {0:false,qu:"Short Term"},
        {1:false,qu:"Long Term"},
    ],
    textAnswer: "Other",
    allowTextAnswer: true
}
  ]});
  
  this.ref = "";
  this.desc = "";
  this.quesadd = false;
  }

  addsection()
  {
      console.log(this.finaldata);

      console.log("add section called");
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
    }
      this.http.post('https://survey-heraizen.herokuapp.com/addsection',JSON.stringify({"sec":this.finaldata}),httpOptions).subscribe(
        data => {
          console.log(data); 
           }, err => {
            console.log(err.message);
          }, () => {
            console.log('completed');
          }
      );

      window.location.reload();
  }


}
