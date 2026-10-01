import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,   // ← must be false to belong to an NgModule
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent { }