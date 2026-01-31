// frontend/src/app/services/issue.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IssueService {
  private apiUrl = 'http://localhost:8080/api/issues';

  constructor(private http: HttpClient) {}

  getIssues(filters: any): Observable<any> {
    let params = new HttpParams();
    if (filters.status) params = params.set('status', filters.status);
    if (filters.priority) params = params.set('priority', filters.priority);
    if (filters.search) params = params.set('search', filters.search);
    
    // Pagination (MVP Requirement)
    params = params.set('page', filters.page || 0);
    params = params.set('size', filters.size || 10);

    return this.http.get(this.apiUrl, { params });
  }
}
