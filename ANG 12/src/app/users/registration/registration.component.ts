import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface RegistrationData {
  name: string;
  email: string;
  password: string;
  role: '' | 'student' | 'teacher';
  terms: boolean;
  address: {
    city: string;
    street: string;
    postalCode: string;
  };
}

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user: RegistrationData = this.createEmptyUser();
  numbers: number = 0;
  submitted = false;


  private createEmptyUser(): RegistrationData {
    return {
      name: '',
      email: '',
      password: '',
      role: '',
      terms: false,
      address: { city: '', street: '', postalCode: '' }
    };
  }

  onSubmit(form: NgForm): void {
    if (form.invalid || form.pending) return;


    console.log('Registration Data:', form.value);
    this.resetRegistration(form);
    this.submitted = true;
  }

  resetRegistration(form: NgForm): void {
    this.user = this.createEmptyUser();
    this.numbers = 0;
    form.resetForm({ ...this.user, numberCount: 0 });
    this.submitted = false;
  }
}
