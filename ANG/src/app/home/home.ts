import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

  message: string;

  constructor(private messageService: MessageService) {
    this.message = this.messageService.getMessage();
  }

}