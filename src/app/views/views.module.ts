import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ViewsRoutingModule } from './views-routing.module';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams/teams.component';
import { StoreTeamComponent } from './store-team/store-team.component';



@NgModule({
  declarations: [
    TeamsComponent,
    StoreTeamComponent,
  ],
  exports: [
    ViewsRoutingModule
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ViewsRoutingModule
  ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewsModule { }
