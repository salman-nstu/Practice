import { Component } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      role: 'Admin',
      active: true
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob@example.com',
      role: 'Editor',
      active: false
    },
    {
      id: 3,
      name: 'Charlie Brown',
      email: 'charlie@example.com',
      role: 'Viewer',
      active: true
    }
  ];

  selectedUser: User | null = null;

  onUserSelected(user: User): void {
    this.selectedUser = user;
  }
}
