import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  private baseURL="http://localhost:8080/user/users";
  private signURL="http://localhost:8080/user/user";
  constructor(private httpClient:HttpClient) { }
  getUserList():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`)
  }
  createUser(user:User):Observable<Object>{
    return this.httpClient.post(`${this.signURL}`,user);
  }
  getUserByUserName(userName: String):Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${userName}`);
}
updateUser(userName: String, user:User): Observable<Object> {
  console.log(user);
  return this.httpClient.put(`${this.baseURL}/${userName}`, user);
}
deleteUser(userName: String):Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${userName}`)
}
}
