import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule], // Import FormsModule here
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onLogin() {
    if (this.username && this.password) {
      console.log('Logging in with:', this.username, this.password);
      // Call your backend login API here
    } else {
      alert('Please fill in all fields.');
    }
  }
}
