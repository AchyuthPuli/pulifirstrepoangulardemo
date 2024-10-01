import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface User {
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {
  createAccountForm: FormGroup;
  @Output() accountCreated = new EventEmitter<User>();

  constructor(private fb: FormBuilder) {
    this.createAccountForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onCreateAccount() {
    if (this.createAccountForm.valid) {
      const { username, email, password, confirmPassword } = this.createAccountForm.value;
      if (password === confirmPassword) {
        const newUser: User = { username, email, password };
        const existingUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');
        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));
        this.accountCreated.emit(newUser);
        this.createAccountForm.reset();
        alert('Account created successfully!');
      } else {
        alert('Passwords do not match');
      }
    }
  }
}

