import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SuperInput, SuperInputType } from './models/super-input';
import { SuperInputComponent } from './super-input/super-input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, SuperInputComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly inputTypes: SuperInputType[] = [
    'text', 'number', 'email', 'password', 'date'
  ];

  superInput = new SuperInput({
    type: 'email',
    label: 'Email Address',
    placeholder: 'Enter your email'
  });

  changeType(type: SuperInputType): void {
    this.superInput = new SuperInput({
      ...this.superInput,
      type,
      label: ' input',
      placeholder: 'Enter a value',
      value: ''
    });
  }

  onValueChange(value: string): void {
    this.superInput.value = value;
  }
}

