import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Team } from 'src/app/core/interfaces/team';
import { NotificationService } from 'src/app/core/services/notification.service';
import { RequestService } from 'src/app/core/services/request.service';

@Component({
  selector: 'app-store-team',
  templateUrl: './store-team.component.html',
  styleUrls: ['./store-team.component.scss']
})
export class StoreTeamComponent {
  loadPage:boolean = false;
  iconSent  = faPaperPlane;
  TeamForm:FormGroup;

  constructor(private fb: FormBuilder, private router:Router, private request: RequestService, private noti:NotificationService) {
    this.TeamForm = this.fb.group({
      nombre: ['', [
        Validators.required,
        Validators.email
      ]],
      Estadio: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]],
      "Sitio Web": [true, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]]
    });

  }

  ngOnInit(): void {
  }

  isValid() {
    return this.TeamForm.controls;
  }

  onSubmit(){
    this.loadPage = true;
    this.request.save('login', this.TeamForm.value)
    .subscribe({
      next: (data:any)=> {
        console.log(data.data.token)
        if (data.status === 'success') {

        }
      },
      error: () => { this.loadPage = false},
      complete: () => {this.loadPage = false}
    });
  }
}
