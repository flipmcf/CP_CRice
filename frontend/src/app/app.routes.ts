import { Routes } from '@angular/router';
import { IssueDashboardComponent } from './components/issue-dashboard/issue-dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
// import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', component: IssueDashboardComponent },
  { path: 'signup', component: SignupComponent },
  // { path: 'login', component: LoginComponent },
];
