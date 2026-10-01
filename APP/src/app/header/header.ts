import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {

  user = {
    info: "This is a demo site....",
    getinfo() {
      return `${this.info}`;
    }
  }
}