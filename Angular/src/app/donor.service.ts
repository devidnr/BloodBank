import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donor } from './donor';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  private baseURL="http://localhost:8080/user/blood";
  private signURL="http://localhost:8080/user/bloods";

  constructor(private httpClient:HttpClient) { }
  getDonorList():Observable<Donor[]>{
    return this.httpClient.get<Donor[]>(`${this.baseURL}`)
  }
  createDonor(donor:Donor):Observable<Object>{
    return this.httpClient.post(`${this.signURL}`,donor);
  }
  getDonorByEmail(email: String):Observable<Donor>{
    return this.httpClient.get<Donor>(`${this.signURL}/${email}`);
}
updateDonor(email: String, donor:Donor): Observable<Object> {
  console.log(donor);
  return this.httpClient.put(`${this.signURL}/${email}`, donor);
}
deleteDonor(email: String):Observable<Object>{
  return this.httpClient.delete(`${this.signURL}/${email}`)
}
}
