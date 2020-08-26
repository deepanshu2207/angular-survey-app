import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2GoogleChartsModule} from 'ng2-google-charts';
import { SurveyComponent } from './survey/survey.component';
import { EditComponent } from './edit/edit.component';
import { NgxSpinnerModule} from "ngx-spinner";
import { ReportComponent } from './report/report.component';
import { StatComponent } from './stat/stat.component';
import { AllreportComponent } from './allreport/allreport.component';
import { SectionreportComponent } from './sectionreport/sectionreport.component';
import { QuereportComponent } from './quereport/quereport.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SurveyComponent,
    EditComponent,
    ReportComponent,
    StatComponent,
    AllreportComponent,
    SectionreportComponent,
    QuereportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2GoogleChartsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
