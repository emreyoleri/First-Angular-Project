import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  today = new Date();
  budget: number = 0;
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.budget = Math.round(Math.random() * 10000);
  }
}
