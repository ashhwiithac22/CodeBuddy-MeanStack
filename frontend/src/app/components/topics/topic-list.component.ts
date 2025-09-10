import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../services/topic.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-topic-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
  topics: any[] = [];
  filteredTopics: any[] = [];
  searchText = '';
  selectedCategory = 'all';
  categories = ['all', 'DSA', 'SQL', 'Python'];
  selectedTopic: any = null;
  showTopicDetail = false;
  userCode: string = '';
  output: string = '';
  isLoading = true;
  activeTab: string = 'hints';

  constructor(private topicService: TopicService) { }

  ngOnInit() {
    this.loadTopics();
  }

  loadTopics() {
    this.topicService.getTopics().subscribe(
      data => {
        this.topics = data;
        this.filteredTopics = data;
        this.isLoading = false;
      },
      error => {
        console.error('Error loading topics:', error);
        this.isLoading = false;
      }
    );
  }

  filterTopics() {
    this.filteredTopics = this.topics.filter(topic => {
      const matchesSearch = topic.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
                           topic.description.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesCategory = this.selectedCategory === 'all' || topic.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }

  selectTopic(topic: any) {
    this.selectedTopic = topic;
    this.showTopicDetail = true;
    this.userCode = topic.defaultCode || '# Write your solution here\n';
    this.output = '';
    this.activeTab = 'hints';
  }

  closeTopicDetail() {
    this.showTopicDetail = false;
    this.selectedTopic = null;
  }

  runCode() {
    this.output = 'Running your code...\n\n';
    
    // Simulate code execution
    setTimeout(() => {
      if (this.userCode.includes('def') || this.userCode.includes('class') || this.userCode.includes('return')) {
        this.output += '✅ Great job! Your solution looks correct.\n';
        this.output += '🎉 +10 points earned!\n\n';
        this.output += 'Sample Output: Solution executed successfully';
        
        // Add some sample outputs based on the topic
        if (this.selectedTopic.name.includes('Two Sum')) {
          this.output += '\nInput: [2,7,11,15], target=9\nOutput: [0,1]';
        } else if (this.selectedTopic.name.includes('Duplicate')) {
          this.output += '\nInput: [1,2,3,1]\nOutput: True';
        } else if (this.selectedTopic.name.includes('Palindrome')) {
          this.output += '\nInput: "A man, a plan, a canal: Panama"\nOutput: True';
        }
      } else {
        this.output += '❌ Please implement a complete solution.\n';
        this.output += '💡 Hint: ' + this.selectedTopic.hints[0];
      }
    }, 1500);
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  getProblemIcon(index: number): string {
    const icons = ['🔍', '🎯', '⚡', '🚀', '💡', '🔥', '🌟', '📊', '🎮', '🏆'];
    return icons[index % icons.length];
  }
}