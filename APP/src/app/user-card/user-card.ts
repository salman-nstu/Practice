import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl: './user-card.html',
  styleUrl: './user-card.css'
})
export class UserCardComponent {

  @Input({ required: true })
  user!: User;

  @Output()
  selected = new EventEmitter<User>();

  @Output()
  deleteRequested = new EventEmitter<number>();

  selectUser(): void {
    this.selected.emit(this.user);
  }

  deleteUser(): void {
    this.deleteRequested.emit(this.user.id);
  }
}
