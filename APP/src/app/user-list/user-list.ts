import { Component } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserListComponent {

  users: User[] = [
    { id: 1, name: 'A', email: 'A@gmail.com', role: 'Admin' },
    { id: 2, name: 'B', email: 'B@gmail.com', role: 'Developer' },
    { id: 3, name: 'C', email: 'C@gmail.com', role: 'Designer' },
  ];

  selectedUser: User | null = null;


  onUserSelected(user: User): void {
    this.selectedUser = user;
  }


  onDeleteRequested(id: number): void {
    this.users = this.users.filter(u => u.id !== id);
    if (this.selectedUser?.id === id) {
      this.selectedUser = null;
    }
  }
}
