import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Team } from 'src/app/core/interfaces/team';
import { NotificationService } from 'src/app/core/services/notification.service';
import { RequestService } from 'src/app/core/services/request.service';
import { UrlValidator } from 'src/app/core/validators/url.validator';

@Component({
  selector: 'app-store-team',
  templateUrl: './store-team.component.html',
  styleUrls: ['./store-team.component.scss']
})
export class StoreTeamComponent {
  loadPage:boolean = false;
  iconSent  = faPaperPlane;
  TeamForm:FormGroup;
  team_id:number;
  mode:string = "store";

  constructor(private fb: FormBuilder, private route:ActivatedRoute, private request: RequestService, private noti:NotificationService) {
    this.TeamForm = this.fb.group({
      id: [''],
      name: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(250),
      ]],
      stadium: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(150),
      ]],
      website: ['', [
        Validators.required,
        UrlValidator.validUrl
      ]],
      nationality: ['', [
        Validators.required,
      ]],
      foundation_year: ['', [
        Validators.required,
      ]],
      trainer: ['', [
        Validators.required,
      ]],
      capacity: ['', [
        Validators.required
      ]],
      value: ['', [
        Validators.required,
        Validators.pattern(/^\d+(\.\d{1,2})?$/)
      ]]
    });
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        if(params['id'] != undefined){
          this.request.get('team/'+params['id'])
          .subscribe({
            next: (data:any)=> {
              if (data.status === 'success') {
                this.team_id = params['id'];
                this.mode = "update";
                this.TeamForm.patchValue(data.data);
              }
            },
            error: () => { this.loadPage = false},
            complete: () => {this.loadPage = false}
          });
        }
      }
    );
  }

  isValid() {
    return this.TeamForm.controls;
  }

  onSubmit(){
    if(this.mode == "store"){
      this.save();
    }else{
      this.update();
    }
  }

  save(){
    this.loadPage = true;
    this.request.save('team', this.TeamForm.value)
    .subscribe({
      next: (data:any)=> {
        if (data.status === 'success') {
          this.noti.success(data.message);
        }
      },
      error: () => { this.loadPage = false},
      complete: () => {this.loadPage = false}
    });
  }

  update(){
    this.loadPage = true;
    this.request.put('team/'+this.team_id, this.TeamForm.value)
    .subscribe({
      next: (data:any)=> {
        if (data.status === 'success') {
          this.noti.success(data.message);
        }
      },
      error: () => { this.loadPage = false},
      complete: () => {this.loadPage = false}
    });
  }
}
