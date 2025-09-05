import { Component, OnInit } from '@angular/core';
import { AiService } from '../../services/ai.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mock-interview',
  templateUrl: './mock-interview.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./mock-interview.component.css']
})
export class MockInterviewComponent implements OnInit {
  interviewQuestions: any[] = [];
  currentQuestion: any = null;
  userAnswer: string = '';
  feedback: string = '';
  isInterviewStarted = false;
  isQuestionAnswered = false;
  currentQuestionIndex = 0;

  constructor(private aiService: AiService) { }

  ngOnInit() {
    this.loadInterviewQuestions();
  }

  loadInterviewQuestions() {
    // Mock questions - replace with AI service call
    this.interviewQuestions = [
      {
        id: 1,
        question: 'Explain the difference between lists and tuples in Python.',
        category: 'Python',
        difficulty: 'Easy',
        tips: ['Focus on mutability', 'Mention memory efficiency', 'Discuss use cases']
      },
      {
        id: 2,
        question: 'What is time complexity and why is it important?',
        category: 'DSA',
        difficulty: 'Medium',
        tips: ['Define Big O notation', 'Give examples', 'Discuss real-world implications']
      },
      {
        id: 3,
        question: 'How would you optimize a slow SQL query?',
        category: 'SQL',
        difficulty: 'Hard',
        tips: ['Discuss indexing', 'Mention query structure', 'Talk about database design']
      }
    ];
  }

  startInterview() {
    this.isInterviewStarted = true;
    this.currentQuestionIndex = 0;
    this.showNextQuestion();
  }

  showNextQuestion() {
    if (this.currentQuestionIndex < this.interviewQuestions.length) {
      this.currentQuestion = this.interviewQuestions[this.currentQuestionIndex];
      this.userAnswer = '';
      this.feedback = '';
      this.isQuestionAnswered = false;
    } else {
      this.endInterview();
    }
  }

  submitAnswer() {
    this.isQuestionAnswered = true;
    // Simulate AI feedback
    this.feedback = `Good answer! You covered the main points about ${this.currentQuestion.category}. 
    Remember to also mention: ${this.currentQuestion.tips.join(', ')}. 
    This shows strong understanding of ${this.currentQuestion.difficulty.toLowerCase()} level concepts.`;
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    this.showNextQuestion();
  }

  endInterview() {
    this.isInterviewStarted = false;
    this.currentQuestion = null;
    alert('Interview completed! Great job practicing.');
  }

  getProgressPercentage(): number {
    return ((this.currentQuestionIndex) / this.interviewQuestions.length) * 100;
  }
}