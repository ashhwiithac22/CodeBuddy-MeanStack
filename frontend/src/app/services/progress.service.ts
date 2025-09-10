import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private apiUrl = 'http://localhost:5000/api/progress';

  constructor(private http: HttpClient) { }

  getUserProgress(): Observable<any> {
    // MOCK DATA - Replace with actual API call when backend is ready
    return of({
      totalSolved: 0,      // Start with 0
      easySolved: 0,
      mediumSolved: 0,
      hardSolved: 0,
      streak: 0,
      totalScore: 0
    }).pipe(delay(300));
    
    // REAL API CALL (comment out for now):
    // return this.http.get<any>(`${this.apiUrl}/user-progress`);
  }

  updateProgress(questionData: any): Observable<any> {
    // MOCK - Replace with actual API call
    return of({ success: true }).pipe(delay(300));
  }

  getLeaderboard(): Observable<any[]> {
    // MOCK leaderboard
    return of([
      { rank: 1, username: 'codeMaster', score: 850, solved: 68 },
      { rank: 2, username: 'algoNinja', score: 720, solved: 59 },
      { rank: 3, username: 'pythonPro', score: 680, solved: 54 },
      { rank: 4, username: 'beginnerCoder', score: 120, solved: 15 },
      { rank: 5, username: 'newbie', score: 45, solved: 8 }
    ]).pipe(delay(500));
  }
}