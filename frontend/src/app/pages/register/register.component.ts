import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formData = { username: '', email: '', password: '' };

  constructor(private userService: UserService, private router: Router) { }

  onRegister() {
    this.userService.register(this.formData).subscribe(
      response => {
        console.log('Registration successful:', response);
        alert('Registration successful! Please log in.');
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Registration failed:', error);
        alert('Registration failed. Username or email may already be in use.');
      }
    );
  }
}