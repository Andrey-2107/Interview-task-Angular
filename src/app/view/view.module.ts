import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignGuard } from "../services/guard.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignInComponent } from './pages/sign-in/sign-in.component';


const routes: Routes = [
  { path: '', component: SignUpComponent },
  { path: 'about', component: AboutComponent, canActivate: [SignGuard] },
  { path: 'home', component: HomeComponent, canActivate: [SignGuard] },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent }
];

  @NgModule({
  declarations: [AboutComponent, HomeComponent, SignUpComponent, SignInComponent],

  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],

  exports: [RouterModule, AboutComponent, HomeComponent, SignUpComponent]
})
export class ViewModule {
}

// canActivate: [SignGuard]
