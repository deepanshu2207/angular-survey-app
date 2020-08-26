import { QuereportComponent } from './quereport/quereport.component';
import { SectionreportComponent } from './sectionreport/sectionreport.component';
import { AllreportComponent } from './allreport/allreport.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SurveyComponent} from './survey/survey.component';
import {EditComponent} from './edit/edit.component';
import {StatComponent} from './stat/stat.component';
import {ReportComponent} from './report/report.component';
const routes: Routes = [

    {
      path:'',
      component:SurveyComponent,
      pathMatch:'full'
    },
    {
      path:'edit',
      component:EditComponent,
    },
    {
      path:'stat',
      component:StatComponent,
    },
    {
      path:'report',
      component:ReportComponent,
    },
    {
      path:'allreport',
      component:AllreportComponent,
    },
    {
      path:'sectionreport',
      component:SectionreportComponent,
    },
    {
      path:'quereport',
      component:QuereportComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
