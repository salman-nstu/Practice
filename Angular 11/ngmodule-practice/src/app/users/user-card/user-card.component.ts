import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-card',
  standalone: false,
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input({ required: true }) user!: User;
  @Output() selected = new EventEmitter<User>();

  selectUser(): void {
    this.selected.emit(this.user);
  }
}
