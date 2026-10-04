import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';
import { UserProfileComponent } from '../user-profile/user-profile';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UserProfileComponent      // ← declared here
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    UserProfileComponent      // ← exported so app.html can use <app-user-profile>
  ]
})
export class SharedModule { }
