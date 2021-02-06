import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  baseUrl: string = 'http://localhost:27017/userdb';

  constructor(private http: HttpClient) { }

  createUser(data: User) {
    return this.http.post(this.baseUrl, data);
  }

  getUser() {
    return this.http.get<User[]>(this.baseUrl);
  }

}
