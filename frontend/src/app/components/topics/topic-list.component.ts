import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../services/topic.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
  topics: any[] = [];
  filteredTopics: any[] = [];
  searchText = '';
  selectedCategory = 'all';
  categories = ['all', 'DSA', 'SQL', 'Python'];

  constructor(private topicService: TopicService) { }

  ngOnInit() {
    this.loadTopics();
  }

  loadTopics() {
    this.topicService.getTopics().subscribe(
      data => {
        this.topics = data;
        this.filteredTopics = data;
      },
      error => {
        console.error('Error loading topics:', error);
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

  getProgressPercentage(solved: number, total: number): number {
    return total > 0 ? (solved / total) * 100 : 0;
  }

  getProgressColor(percentage: number): string {
    if (percentage >= 70) return 'bg-success';
    if (percentage >= 40) return 'bg-warning';
    return 'bg-danger';
  }
}