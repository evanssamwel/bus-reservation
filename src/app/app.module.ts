import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppRoutingModule } from './app-routing.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  imports: [BrowserModule,AppRoutingModule],
  providers: [],
})
export class AppModule {}

