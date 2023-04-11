import { NotificationService } from './../../core/services/notification.service';
import { RequestService } from './../../core/services/request.service';

import { StorageService } from './../../core/services/storage.service';
import { UserService } from './../../core/services/user.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faPaperPlane, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loadPage:boolean = false;
  iconLogin = faSignInAlt;
  iconSent  = faPaperPlane;
  LogInForm:FormGroup;
  closeResult = '';

  constructor(private user:UserService, private fb: FormBuilder, private storage:StorageService, private router:Router, private request: RequestService, private noti:NotificationService) {
    this.LogInForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]],
      remember_token: [true, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]]
    });

  }

  ngOnInit(): void {
  }

  isValid() {
    return this.LogInForm.controls;
  }

  onSubmit(){
    this.loadPage = true;
    this.request.save('login', this.LogInForm.value)
    .subscribe({
      next: (data:any)=> {
        console.log(data.data.token)
        if (data.status === 'success') {
          this.storage.setInLocal('app_token', data.data.token);
          this.noti.success(data.message);

          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      },
      error: () => { this.loadPage = false},
      complete: () => {this.loadPage = false}
    });
  }
}
