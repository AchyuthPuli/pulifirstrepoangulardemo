import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

declare var bootstrap: any;

interface User {
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginForm: FormGroup;
  private users: User[] = [];

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
  }

  onLogin() {
    const { username, password } = this.loginForm.value;
    const user = this.users.find(user => user.username === username && user.password === password);

    if (user) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }

  openCreateAccountModal() {
    const modalElement = document.getElementById('createAccountModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
  }

  onAccountCreated(newUser: User) {
    this.users.push(newUser);
    localStorage.setItem('users', JSON.stringify(this.users));
    console.log('User created:', newUser);
    console.log('Current users:', this.users);
  }
  
}
