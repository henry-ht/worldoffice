import { AccessGuard } from '../core/guards/access.guard';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TeamsComponent } from './teams/teams.component';
import { StoreTeamComponent } from './store-team/store-team.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'teams',
    pathMatch: 'full'
  },
  {
    path: 'teams',
    component: TeamsComponent,
    canActivate: [AccessGuard]
  },
  {
    path: 'store-team',
    component: StoreTeamComponent,
    canActivate: [AccessGuard]
  },
  {
    path: 'team/:id/edit',
    component: StoreTeamComponent,
    canActivate: [AccessGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule { }
