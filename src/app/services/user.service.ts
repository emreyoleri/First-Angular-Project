import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  username: string = 'Emre Yoleri';
  apiUrl: string = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {}

  fetchUsers(){
    return this.http.get(this.apiUrl + 'users');
  }
}
