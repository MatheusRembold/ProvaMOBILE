import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private apiUrl = "https://jsonplaceholder.typicode.com/users"
  users$:Observable<any> = this.http.get(this.apiUrl)

  constructor(private http:HttpClient) {
    
  }
}
