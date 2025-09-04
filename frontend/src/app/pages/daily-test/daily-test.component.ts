import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-daily-test',
  templateUrl: './daily-test.component.html',
  styleUrls: ['./daily-test.component.css']
})
export class DailyTestComponent implements OnInit {
  dailyQuestions: any;
  loading = true;
  timer: number = 3600;
  interval: any;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.questionsService.getDailyQuestions().subscribe(
      data => {
        this.dailyQuestions = data;
        this.loading = false;
        this.startTimer();
      },
      error => {
        console.error('Error fetching daily questions:', error);
        this.loading = false;
      }
    );
  }

  startTimer(): void {
    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(this.interval);
        alert('Time is up!');
      }
    }, 1000);
  }

  get formattedTime(): string {
    const hours = Math.floor(this.timer / 3600);
    const minutes = Math.floor((this.timer % 3600) / 60);
    const seconds = this.timer % 60;
    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  private pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }
}