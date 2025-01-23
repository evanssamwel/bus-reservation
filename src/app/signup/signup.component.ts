import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [CommonModule, FormsModule], // Import FormsModule here
})

export class SignupComponent {
  username: string = '';
  password: string = '';

  onSignup() {
    if (this.username && this.password) {
      console.log('Signing up with:', this.username, this.password);
      // Call your backend signup API here
    } else {
      alert('Please fill in all fields.');
    }
  }
}
