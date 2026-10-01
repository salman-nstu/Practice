import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,   // ← must be false to belong to an NgModule
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent { }