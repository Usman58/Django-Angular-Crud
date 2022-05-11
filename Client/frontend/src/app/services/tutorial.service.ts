import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tutorial } from '../models/tutorial/tutorial.module';
const baseUrl = 'http://127.0.0.1:8000/';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(baseUrl);
  }

  get(id: any): Observable<Tutorial> {
    return this.http.get(`${baseUrl}${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl+"createuser/", data);
  }

delete(id: any): Observable<any> {
  return this.http.delete(`${baseUrl}delete/${id}`);
}
update(id: any, data: any): Observable<any> {
  return this.http.put(`${baseUrl}update/${id}/`, data);
}
 
}

// deleteAll(): Observable<any> {
//   return this.http.delete(baseUrl);
// }
// findByTitle(title: any): Observable<Tutorial[]> {
//   return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
// }
