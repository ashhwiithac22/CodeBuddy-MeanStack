import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TopicService, Problem } from '../../services/topic.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-topic-test',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './topic-test.component.html',
  styleUrls: ['./topic-test.component.css']
})
export class TopicTestComponent implements OnInit {
  problems: Problem[] = [];
  currentProblemIndex = 0;
  userCode: string = '';
  output: string = '';
  selectedLanguage: string = 'python';
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private topicService: TopicService
  ) { }

  ngOnInit() {
    const topicId = parseInt(this.route.snapshot.paramMap.get('id') || '1', 10);
    this.loadProblems(topicId);
  }

  loadProblems(topicId: number) {
    this.topicService.getProblems(topicId).subscribe(
      (problems: Problem[]) => {
        this.problems = problems;
        if (this.problems.length > 0) {
          this.userCode = this.problems[0].defaultCode[this.selectedLanguage] || '';
        }
        this.isLoading = false;
      },
      (error: any) => {
        console.error('Error loading problems:', error);
        this.isLoading = false;
      }
    );
  }

  get currentProblem(): Problem | null {
    return this.problems.length > 0 ? this.problems[this.currentProblemIndex] : null;
  }

  runCode() {
    this.output = 'Running your code...\n\n';
    
    // Simulate code execution with a compiler API
    setTimeout(() => {
      // This would be replaced with actual API call to a compiler service
      const testCase = this.currentProblem?.testCases?.[0];
      
      if (testCase && this.userCode.includes('return')) {
        this.output += `✅ Test Case Passed:\nInput: ${testCase.input}\nExpected Output: ${testCase.output}\n`;
        this.output += '🎉 +10 points earned!\n\n';
        this.output += 'All test cases passed!';
      } else {
        this.output += '❌ Compilation Error:\n';
        this.output += 'Please check your syntax and ensure your function returns the correct value.\n\n';
        this.output += '💡 Tip: Make sure your function signature matches the expected format.';
      }
    }, 2000);
  }

  nextProblem() {
    if (this.currentProblemIndex < this.problems.length - 1) {
      this.currentProblemIndex++;
      this.userCode = this.currentProblem?.defaultCode[this.selectedLanguage] || '';
      this.output = '';
    }
  }

  previousProblem() {
    if (this.currentProblemIndex > 0) {
      this.currentProblemIndex--;
      this.userCode = this.currentProblem?.defaultCode[this.selectedLanguage] || '';
      this.output = '';
    }
  }

  onLanguageChange() {
    if (this.currentProblem) {
      this.userCode = this.currentProblem.defaultCode[this.selectedLanguage] || '';
    }
  }
}