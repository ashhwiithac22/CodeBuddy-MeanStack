import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../../services/progress.service';
import { TopicService } from '../../services/topic.service';
import { CommonModule } from '@angular/common'; // Add this

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [CommonModule],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userProgress: any = {
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
    streak: 0
  };
  dailyChallenge: any = { title: 'Daily Challenge', difficulty: 'Medium' };
  topics: any[] = [];
  streak = 0;

  constructor(
    private progressService: ProgressService,
    private topicService: TopicService
  ) { }

  ngOnInit() {
    this.loadUserProgress();
    this.loadDailyChallenge();
    this.loadTopics();
  }

  loadUserProgress() {
    // Mock data - replace with actual API call
    this.userProgress = {
      totalSolved: 15,
      easySolved: 8,
      mediumSolved: 5,
      hardSolved: 2,
      streak: 7
    };
  }

  loadDailyChallenge() {
    // Mock data - replace with actual API call
    this.dailyChallenge = {
      title: 'Two Sum',
      difficulty: 'Easy',
      description: 'Find two numbers that add up to a target'
    };
  }

  loadTopics() {
    // Mock data - replace with actual API call
    this.topics = [
      { name: 'Arrays', description: 'Learn about array manipulation', solved: 5, total: 10 },
      { name: 'Strings', description: 'String operations and algorithms', solved: 3, total: 8 },
      { name: 'Linked Lists', description: 'Working with linked data structures', solved: 2, total: 6 },
      { name: 'Trees', description: 'Tree traversal and algorithms', solved: 1, total: 5 },
      { name: 'Graphs', description: 'Graph algorithms and traversal', solved: 0, total: 7 }
    ];
  }

  getProgressPercentage(solved: number, total: number): number {
    return total > 0 ? (solved / total) * 100 : 0;
  }
}