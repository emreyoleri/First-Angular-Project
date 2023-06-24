import { Component, OnInit } from '@angular/core';

interface IUser {
  name: string;
  age: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users: IUser[] = [];

  constructor() {}
  ngOnInit(): void {
    this.users = [
      {
        name: 'Emre',
        age: 16,
      },
      {
        name: 'Batuhan',
        age: 18,
      },
      {
        name: 'Gülbeyaz',
        age: 42,
      },
      {
        name: 'Ufuk',
        age: 43,
      },
    ];
  }
}
