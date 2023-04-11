import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from 'src/app/core/interfaces/team';
import { NotificationService } from 'src/app/core/services/notification.service';
import { RequestService } from 'src/app/core/services/request.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {

  teams:Team[] = [];
  loadPage:boolean = false;

  constructor(private router:Router, private request: RequestService, private noti:NotificationService) {}

  ngOnInit(): void {
    this.get();
  }

  get(){
    this.loadPage = true;
    this.teams = [];
    this.request.get('team')
    .subscribe({
      next: (data:any)=> {
        if (data.status === 'success') {
          this.teams = data.data;
        }
      },
      error: () => { this.loadPage = false},
      complete: () => {this.loadPage = false}
    });
  }

  delete(id:number){
    this.loadPage = true;
    this.request.delete('team/'+id)
    .subscribe({
      next: (data:any)=> {
        if (data.status === 'success') {
          this.get();
        }
      },
      error: () => { this.loadPage = false},
      complete: () => {this.loadPage = false}
    });
  }

}
