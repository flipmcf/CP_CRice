import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Issue } from '../models/issue.model';

@Injectable({ providedIn: 'root' })
export class IssueService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/issues';
  
  // Signals for state
  issues = signal<Issue[]>([]);
  loading = signal(false);

  fetchIssues() {
    this.loading.set(true);
    this.http.get<any>(this.apiUrl).subscribe({
      next: (data) => {
        // Handle both simple arrays or Spring Page objects
        this.issues.set(data.content || data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  updateIssueStatus(id: number, newStatus: string) {
    return this.http.patch(`${this.apiUrl}/${id}`, { status: newStatus });
  }
}