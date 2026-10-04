
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: false,
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css'
})
export class UserProfileComponent {
  username = 'Rahim Ahmed';
  email = 'rahim@example.com';

  avatarUrl = 'https://i.pravatar.cc/80?img=12';

  isSaving = false;
  isInactive = false;
  isVerified = true;

  avatarSize = 100;

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
}