import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient ,HttpHeaders} from '@angular/common/http';
// import { HttpErrorResponse } from '@angular/common/https';
import {Orgdata} from '../shared/model/orgdata.model';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  title = 'JSON to Table Example';
  constructor (private httpService: HttpClient,private http:HttpClient) { 
    // this.newmethod();
    // this.postmethod();
    
  }
  sanyam = [{"name":"sanyam"},{"age":"21"}];
  harshit:Orgdata = {name:'',mobile:0,org:'',respr:'',email:'',address:'',answers:[]};
  survey: {};
  storage :any[] = [];
  default:{};
  ngOnInit () {
    // this.httpService.get('./assets/birds.json').subscribe(
    //   data => {
        
    //      console.log(data);
    //      this.survey = Object.assign([], data);
    //      this.default  = Object.assign([], this.survey);
    //     //  console.log(this.survey);
    //   }
      
    // );
    this.newmethod();
  }
  newmethod()
  {
    this.http.get('https://survey-heraizen.herokuapp.com/products',).subscribe(
      data => {
      // console.log(data['products']);
      this.survey = Object.assign([], data['products']);
       }, err => {
        console.log(err.message);
      }, () => {
        console.log('Questions are fetched..');
      }
    );
    // this.postmethod();
  }
  postmethod()
  {   console.log("postmethod called");
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
    }
      this.http.post('https://survey-heraizen.herokuapp.com/product',JSON.stringify({"san":this.harshit}),httpOptions).subscribe(
        data => {
          console.log(data); 
          console.log(data);
           }, err => {
            console.log(err.message);
          }, () => {
            console.log('completed');
            alert("Data submitted successfully!");
            window.location.reload();
          }
      );
  }
  check()
  {
    console.log("Check Called");
    this.harshit.name = this.survey['name'];
    this.harshit.email = this.survey['email'];
    this.harshit.mobile = this.survey['mobile'];
    this.harshit.org = this.survey['organisation'];
    this.harshit.address = this.survey['address'];
    this.harshit.respr = this.survey['responsibility'];
    for(let sec of this.survey['survey'])
    {
        for(let da of sec['data'])
        {
          // console.log(da['questions'][0]['options'][0]['0']);  
          this.harshit.answers.push({ref:da['ref'],que1:{satisfactory:da['questions'][0]['options'][0]['0'],
                                                    needRevamp:da['questions'][0]['options'][1]['1'],
                                                    newprogram:da['questions'][0]['options'][2]['2']},
                                          que2:{adm:da['questions'][1]['options'][0]['0'],peda:da['questions'][1]['options'][1]['1'],other:true,extra:da['questions'][1]['textAnswer']},
                                        que3:{short:da['questions'][2]['options'][0]['0'],long:da['questions'][2]['options'][1]['1']},
                                      que4:""});
        }
    }
    this.postmethod();
    this.storage.push(this.survey);

    console.log(this.storage);

  }
  onsubmit()
  {
    console.log("Submit called");
    console.log(this.survey['name']);
  }
  

}