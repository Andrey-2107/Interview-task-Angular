import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from "@angular/router";
import { ViewModule } from "../view/view.module";


@NgModule({
  declarations: [HeaderComponent, FooterComponent, LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    ViewModule,
  ],

  exports: [
    HeaderComponent, FooterComponent, LayoutComponent
  ]
})
export class LayoutModule { }
