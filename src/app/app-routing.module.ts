import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { GroupsComponent } from './groups/groups.component';
import { VotesComponent } from './votes/votes.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about/:id',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'groups',
    component: GroupsComponent
  },
  {
    path: 'members',
    component: MembersComponent
  },
  {
    path: 'groups/votes/:id',
    component: VotesComponent
  },
  {
    path: 'groups/votes/:id/:voteId',
    component: VotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
