import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  username: string = '';
  users: IUser[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.username = this.userService.username;
    this.getUsers();
  }

  getUsers() {
    this.userService.fetchUsers().subscribe((res) => {
      this.users = res as IUser[];
    });
  }
}
