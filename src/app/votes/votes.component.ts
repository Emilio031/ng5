import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../ApiService/api.service';
import { ActivatedRoute } from '@angular/router';
import { Group } from '../../typings';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {
  groupId: number;
  // topicId: number;
  group = <any>{};
  topic = <any>{};
  items = [];
  count = [];
  piedata: any;
  constructor(
    private router: Router,
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.groupId = +params['groupId'];
      // this.topicId = +params['topicId'];
      this.getGroupTopics(this.groupId);
    });

    this.piedata = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }
      ]
    };
  }

  getGroupTopics(id) {
    this.apiService.get('/Groups/GetGroupVoteTopics/' + this.groupId).subscribe((data: any) => {
      console.log('getGroupTopics', data);
      this.group = data;
    });
  }

  getTopicResultDetail(id) {
    // this.items = [];
    // this.count = [];
    this.apiService.get('/Votes/GetVoteResultDetail/' + id).subscribe((data: any) => {
      this.topic = data;
      for (const x of data.VoteItems) {
        this.items.push(x.Name);
        this.count.push(x.Count);
      }
      console.log(this.items);
      console.log(this.count);
    });
  }

  update(event: Event) {
    this.piedata = {
      labels: this.items,
      datasets: [
        {
          data: this.count,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }
      ]
    };
    console.log(this.piedata.abels);
  }
}
