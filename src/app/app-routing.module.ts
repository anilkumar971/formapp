/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }*/

// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1GenderComponent } from './components/page1-gender/page1-gender.component';
import { Page2AgeComponent } from './components/page2-age/page2-age.component';
import { Page3SelfieComponent } from './components/page3-selfie/page3-selfie.component';
import { Page4SubmitComponent } from './components/page4-submit/page4-submit.component';

const routes: Routes = [
  { path: '', redirectTo: '/page1-gender', pathMatch: 'full' },
  { path: 'page1-gender', component: Page1GenderComponent },
  { path: 'page2-age', component: Page2AgeComponent },
  { path: 'page3-selfie', component: Page3SelfieComponent },
  { path: 'page4-submit', component: Page4SubmitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

