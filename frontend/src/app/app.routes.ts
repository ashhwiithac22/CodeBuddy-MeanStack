import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TopicListComponent } from './components/topics/topic-list.component';
import { CodingRoundComponent } from './components/coding-round/coding-round.component';
import { MockInterviewComponent } from './components/mock-interview/mock-interview.component';
import { ProgressTrackerComponent } from './components/progress-tracker/progress-tracker.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'topics', component: TopicListComponent, canActivate: [AuthGuard] },
  { path: 'coding-round', component: CodingRoundComponent, canActivate: [AuthGuard] },
  { path: 'mock-interview', component: MockInterviewComponent, canActivate: [AuthGuard] },
  { path: 'progress', component: ProgressTrackerComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/dashboard' }
];