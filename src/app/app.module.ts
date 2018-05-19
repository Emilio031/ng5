import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { GroupsComponent } from './groups/groups.component';
import { ApiService } from './ApiService/api.service';
import { VotesComponent } from './votes/votes.component';
import { MembersComponent } from './members/members.component';
// primeng
import { ChartModule } from 'primeng/chart';
import { DataTableModule } from 'primeng/primeng';
import { VoteDetailComponent } from './vote-detail/vote-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    GroupsComponent,
    VotesComponent,
    MembersComponent,
    VoteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    // primeng
    DataTableModule,
    ChartModule
  ],
  providers: [DataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
