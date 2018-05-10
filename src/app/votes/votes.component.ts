import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../ApiService/api.service';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {
  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    // this.getGroupTopics(id);
  }

  getGroupTopics(id) {
    this.apiService.get('Groups/GetGroupVoteTopics/id').subscribe((data: any) => {
      console.log('getGroupTopics');
    });
  }
}
