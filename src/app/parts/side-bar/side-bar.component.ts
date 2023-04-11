import { StorageService } from './../../core/services/storage.service';
import { UserService } from './../../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { faHome, faRightFromBracket, faStar, faUser} from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { RequestService } from 'src/app/core/services/request.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  faHome = faHome;
  faStar = faStar;
  faUser  = faUser;
  logoutIcon = faRightFromBracket;
  name: string = "";
  shopSelected:any = {};
  loadPage:boolean = false;
  protected ngUnsubscribe:Subject<void> = new Subject<void>();
  shops:any = [];

  listItems = [
    {
      name: "teams",
      url: "/teams",
      icon: faStar
    },
    {
      name: "store team",
      url: "/store-team",
      icon: faHome
    },
  ]
  constructor(private storage:StorageService, private request:RequestService, private user:UserService) { }

  ngOnInit(): void {
  }

  logout(){
    this.loadPage = true;
    this.storage.clearLocal();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    this.loadPage = false;
  }

}
