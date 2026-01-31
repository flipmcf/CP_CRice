import { Component, OnInit, inject } from '@angular/core';
import { IssueService } from '../../services/issue.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-issue-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="dashboard-container">
      <div class="header-actions">
        <h2>Active Issues ({{ issueService.issues().length }})</h2>
        <button (click)="issueService.fetchIssues()" [disabled]="issueService.loading()">
          {{ issueService.loading() ? 'Loading...' : 'Refresh List' }}
        </button>
      </div>

      <div class="quick-add">
        <h3>Quick Add Issue</h3>
        <input [(ngModel)]="newIssue.title" placeholder="Issue Title">
        <select [(ngModel)]="newIssue.priority">
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>
        <button (click)="createIssue()">Add</button>
      </div>
      
      <div class="issue-grid">
        @for (issue of issueService.issues(); track issue.id) {
          <div class="issue-card" [class]="issue.priority.toLowerCase()">
            <div class="card-header">
              <span class="badge" [class]="issue.status.toLowerCase()">{{ issue.status }}</span>
              <span class="priority-label">{{ issue.priority }}</span>
            </div>
            <h3>{{ issue.title }}</h3>
            <p>{{ issue.description }}</p>
            <div class="card-footer">
              <small>Project: {{ issue.project?.name || 'Unassigned' }}</small>
            </div>
          </div>
        } @empty {
          <p>No issues found. Try checking the backend data loader.</p>
        }
      </div>
    </div>
  `,
  styles: [`
    .issue-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem; margin-top: 1rem; }
    .issue-card { border: 1px solid #ddd; padding: 1.5rem; border-radius: 8px; background: white; transition: transform 0.2s; }
    .issue-card:hover { transform: translateY(-3px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    .card-header { display: flex; justify-content: space-between; margin-bottom: 0.5rem; }
    .badge { padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: bold; }
    .open { background: #fee2e2; color: #991b1b; }
    .in_progress { background: #fef3c7; color: #92400e; }
    .closed { background: #dcfce7; color: #166534; }
    .high { border-left: 5px solid #ef4444; }
    .medium { border-left: 5px solid #f59e0b; }
    .low { border-left: 5px solid #3b82f6; }
  `]
})
export class IssueDashboardComponent implements OnInit {
  issueService = inject(IssueService);
  private http = inject(HttpClient);
  newIssue = { title: '', priority: 'LOW', status: 'OPEN' };  

  ngOnInit() {
    this.issueService.fetchIssues();
  }
  createIssue() {
    if (!this.newIssue.title) return;
  
    this.http.post('http://localhost:8080/api/issues', this.newIssue).subscribe(() => {
       this.issueService.fetchIssues(); // Refresh the list
       this.newIssue = { title: '', priority: 'LOW', status: 'OPEN' }; // Reset`
    });
  }
}