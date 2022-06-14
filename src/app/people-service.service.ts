import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrganicInterface, UserInterface } from './user-interface';

@Injectable({
  providedIn: 'root',
})
export class PeopleServiceService {
  constructor(private http: HttpClient) {}
  fetchApi(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>('http://localhost:3000/api/employee');
  }
  fetchOrganic():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/api/employee/organic');
  }
}
