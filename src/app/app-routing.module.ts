import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./view/pages/home/home.component";
import { SignGuard } from "./services/guard.service";
import { AboutComponent } from "./view/pages/about/about.component";
import { SignUpComponent } from "./view/pages/sign-up/sign-up.component";
import { SignInComponent } from "./view/pages/sign-in/sign-in.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [SignGuard] },
  { path: 'about', component: AboutComponent, canActivate: [SignGuard] },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: '', component: SignUpComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
