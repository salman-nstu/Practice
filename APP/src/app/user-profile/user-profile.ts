import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: false,
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css'
})
export class UserProfileComponent {
  username = 'Demo';
  email = 'schertech.com';

  avatarUrl = 'https://static.vecteezy.com/system/resources/thumbnails/068/203/135/small_2x/abstract-human-silhouette-with-blue-gradient-isolated-on-transparent-background-png.png';

  isSaving = false;
  isInactive = false;
  isVerified = true;


  role = 'Student';


  avatarSize = 100;

  bio = 'I am learning Angular.';


  get saveDisabled(): boolean {
    return this.isSaving || this.isInactive;
  }

  toggleStatus(): void {
    this.isInactive = !this.isInactive;
  }

  saveProfile(): void {
    if (this.saveDisabled) {
      return;
    }

    console.log('Profile saved for:', this.username);
  }

  // showEvent(event: MouseEvent) {
  //   console.log(event.target);
  //   console.log(event.type);
  //   console.log(event.currentTarget);
  //   console.log(event.clientX);
  //   console.log(event.clientY);

  //   console.log(event);


  // }

  // handleInput(event: Event) {
  //   const input = event.target as HTMLInputElement;

  //   console.log(input.value);
  // }

  // handleCheckbox(event: Event) {
  //   const checkbox = event.target as HTMLInputElement;
  //   console.log(checkbox.checked);
  // }

  // handleKeyup(event: KeyboardEvent) {
  //   // console.log(event.key);

  // }

  // search() {
  //   console.log('Searching...');
  // }


  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }

  isTextboxEnabled = false;

  name() {
    const textbox = "JJJ";
  }

  handleCheckbox(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.isTextboxEnabled = checkbox.checked;
  }


}