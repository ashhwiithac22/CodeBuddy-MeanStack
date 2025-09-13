import { Routes } from '@angular/router';
import { TopicListComponent } from './components/topics/topic-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MockInterviewComponent } from './components/mock-interview/mock-interview.component';
import { ProgressTrackerComponent } from './components/progress-tracker/progress-tracker.component';
import { CodingRoundComponent } from './components/coding-round/coding-round.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'topics', component: TopicListComponent },
  { path: 'coding-round', component: CodingRoundComponent },
  { path: 'mock-interview', component: MockInterviewComponent },
  { path: 'progress', component: ProgressTrackerComponent },
  { path: '**', redirectTo: '/dashboard' }
];