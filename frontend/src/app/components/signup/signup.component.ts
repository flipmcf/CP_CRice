import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [FormsModule, RouterModule],
  template: `
    <div style="max-width: 400px; margin: 100px auto; padding: 30px; border: 1px solid #ddd; border-radius: 10px; font-family: sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      <h2 style="color: #2c3e50; text-align: center;">Create Account</h2>
      
      <div style="margin-bottom: 15px;">
        <label>Username</label>
        <input [(ngModel)]="user.username" style="width: 100%; padding: 10px; margin-top: 5px; border: 1px solid #ccc; border-radius: 4px;">
      </div>

      <div style="margin-bottom: 20px;">
        <label>Password</label>
        <input [(ngModel)]="user.password" type="password" style="width: 100%; padding: 10px; margin-top: 5px; border: 1px solid #ccc; border-radius: 4px;">
      </div>

      <button (click)="signup()" style="width: 100%; padding: 12px; background: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Sign Up</button>
      
      <p style="text-align: center; margin-top: 15px; font-size: 0.9rem;">
        Already have an account? <a routerLink="/login" style="color: #3498db; text-decoration: none;">Login here</a>
      </p>
    </div>
  `
})
export class SignupComponent {
  user = { username: '', password: '' };
  private http = inject(HttpClient);
  private router = inject(Router);

  signup() {
    if (!this.user.username || !this.user.password) {
      alert('Please fill in all fields');
      return;
    }

    this.http.post('http://localhost:8080/api/auth/signup', this.user)
      .subscribe({
        next: () => {
          alert('Signup successful! Please login.');
          this.router.navigate(['/login']);
        },
        error: (err) => alert(err.error || 'Signup failed')
      });
  }
}