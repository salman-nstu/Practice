import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    UserProfileComponent
  ]
})
export class SharedModule { }
