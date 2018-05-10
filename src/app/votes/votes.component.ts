import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../ApiService/api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {
  id: number;
  constructor(
    private router: Router,
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.getGroupTopics(id);
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);
    });
  }

  getGroupTopics(id) {
    this.apiService.get('Groups/GetGroupVoteTopics/id').subscribe((data: any) => {
      console.log('getGroupTopics');
    });
  }
}
