/*import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1GenderComponent } from './components/page1-gender/page1-gender.component';
import { Page2AgeComponent } from './components/page2-age/page2-age.component';
import { Page3SelfieComponent } from './components/page3-selfie/page3-selfie.component';
import { Page4SubmitComponent } from './components/page4-submit/page4-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1GenderComponent,
    Page2AgeComponent,
    Page3SelfieComponent,
    Page4SubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }*/


// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1GenderComponent } from './components/page1-gender/page1-gender.component';
import { Page2AgeComponent } from './components/page2-age/page2-age.component';
import { Page3SelfieComponent } from './components/page3-selfie/page3-selfie.component';
import { Page4SubmitComponent } from './components/page4-submit/page4-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1GenderComponent,
    Page2AgeComponent,
    Page3SelfieComponent,
    Page4SubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // For HTTP requests
    FormsModule       // For template-driven forms (ngModel)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
