import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
  declarations: [AboutComponent, HomeComponent, SignUpComponent, SignInComponent],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  ],

  exports: [AboutComponent, HomeComponent, SignUpComponent]
})
export class ViewModule {
}

