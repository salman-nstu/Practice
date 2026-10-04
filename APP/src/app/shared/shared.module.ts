import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';
import { UserProfileComponent } from '../user-profile/user-profile';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    UserProfileComponent
  ]
})
export class SharedModule { }
