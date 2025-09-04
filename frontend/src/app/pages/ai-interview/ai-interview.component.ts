import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-ai-interview',
  templateUrl: './ai-interview.component.html',
  styleUrls: ['./ai-interview.component.css']
})
export class AiInterviewComponent implements OnInit {
  interviewQuestion: any;
  loading = true;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.questionsService.getInterviewQuestion().subscribe(
      data => {
        this.interviewQuestion = data;
        this.loading = false;
      },
      error => {
        console.error('Error fetching interview question:', error);
        this.loading = false;
      }
    );
  }
}