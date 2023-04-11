import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  exports: [
    FontAwesomeModule,
    ReactiveFormsModule,
    LoginComponent
  ],
  imports: [
    FontAwesomeModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    CommonModule
  ]
})
export class AuthModule { }
