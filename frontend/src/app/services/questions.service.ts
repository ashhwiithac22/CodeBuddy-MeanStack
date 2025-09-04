import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private apiUrl = 'http://localhost:5000/api/questions';

  constructor(private http: HttpClient) { }

  getDailyQuestions(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/daily`);
  }

  getInterviewQuestion(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/interview`);
  }
}