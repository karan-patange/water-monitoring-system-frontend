import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName: string = '';
  passWord: string = '';
  role: string = '';
  message: string = '';

  constructor(
    private service: AdminServiceService,
    private router: Router
  ) {}

  login() {
    this.service.loginWithRole(this.userName, this.passWord, this.role)
      .subscribe({
        next: (response: any) => {
          this.message = 'Login Successful!';

          // Save username number and role if needed
          localStorage.setItem('userName', this.userName);
          localStorage.setItem('role', this.role);

          // Redirect based on role
          if (this.role === 'household') {
            this.router.navigate(['/household']);
          } else if (this.role === 'admin') {
            this.router.navigate(['/admin']);
          } 
        },
        error: () => {
          this.message = 'Invalid credentials or role';
        }
      });
  }
}

