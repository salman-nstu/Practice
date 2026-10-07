import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'pending' | 'inactive';
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserListComponent {

  users: User[] = [
    { id: 1, name: 'Rahim',  email: 'rahim@example.com',  role: 'Admin',   status: 'active'   },
    { id: 2, name: 'Karim',  email: 'karim@example.com',  role: 'Doctor',  status: 'pending'  },
    { id: 3, name: 'Nadia',  email: 'nadia@example.com',  role: 'Patient', status: 'inactive' },
    { id: 4, name: 'Sadia',  email: 'sadia@example.com',  role: 'Nurse',   status: 'active'   },
    { id: 5, name: 'Farhan', email: 'farhan@example.com', role: 'Doctor',  status: 'pending'  },
  ];

}
