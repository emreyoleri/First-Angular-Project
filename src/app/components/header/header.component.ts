import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Test Project';

  constructor() {}

  ngOnInit(): void {
    this.updateTitle();
  }

  updateTitle() {
    this.title = 'Updated Project';
  }
}
