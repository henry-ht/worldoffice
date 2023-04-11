import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    FontAwesomeModule,
    ReactiveFormsModule,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    FontAwesomeModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    CommonModule
  ]
})
export class AuthModule { }
