import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private apiUrl = 'http://localhost:5000/api/progress';

  constructor(private http: HttpClient) { }

  getUserProgress(): Observable<any> {
    // Mock data - replace with actual API call
    return new Observable(observer => {
      const progress = {
        totalSolved: 27,
        easySolved: 15,
        mediumSolved: 9,
        hardSolved: 3,
        streak: 12,
        totalScore: 420,
        dailyScores: [
          { date: '2023-05-01', score: 30 },
          { date: '2023-05-02', score: 45 },
          { date: '2023-05-03', score: 20 },
          { date: '2023-05-04', score: 60 },
          { date: '2023-05-05', score: 35 },
          { date: '2023-05-06', score: 50 },
          { date: '2023-05-07', score: 40 }
        ],
        recentActivities: [
          { type: 'solved', problem: 'Two Sum', difficulty: 'Easy', time: '2 hours ago' },
          { type: 'solved', problem: 'Reverse String', difficulty: 'Easy', time: '4 hours ago' },
          { type: 'attempted', problem: 'Binary Tree Inorder', difficulty: 'Medium', time: '1 day ago' },
          { type: 'solved', problem: 'Valid Parentheses', difficulty: 'Easy', time: '1 day ago' }
        ]
      };
      observer.next(progress);
      observer.complete();
    });
  }

  getLeaderboard(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/leaderboard`);
  }

  updateProgress(questionId: number, solved: boolean): Observable<any> {
    return this.http.post(`${this.apiUrl}/update`, { questionId, solved });
  }
}