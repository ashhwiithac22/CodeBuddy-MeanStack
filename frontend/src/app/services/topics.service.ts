import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  private apiUrl = 'http://localhost:5000/api/topics';

  constructor(private http: HttpClient) { }

  getTopics(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}