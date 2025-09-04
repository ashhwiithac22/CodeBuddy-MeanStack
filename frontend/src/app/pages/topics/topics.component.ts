import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../../services/topics.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  topics: any[] = [];
  loading = true;

  constructor(private topicsService: TopicsService) { }

  ngOnInit(): void {
    this.topicsService.getTopics().subscribe(
      data => {
        this.topics = data;
        this.loading = false;
      },
      error => {
        console.error('Error fetching topics:', error);
        this.loading = false;
      }
    );
  }
}