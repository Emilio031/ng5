import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../ApiService/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vote-detail',
  templateUrl: './vote-detail.component.html',
  styleUrls: ['./vote-detail.component.scss']
})
export class VoteDetailComponent implements OnInit {
  topicId: number;
  group = <any>{};
  topic = <any>{};
  items = [];
  MaleCount = [];
  FemaleCount = [];
  data: any;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.topicId = +params['topicId'];
      this.getTopicResultDetail(this.topicId);
    });
  }

  getTopicResultDetail(id) {
    this.apiService.get('/Votes/GetVoteResultDetail/' + id).subscribe((data: any) => {
      this.topic = data;
      for (const x of data.VoteItems) {
        this.items.push(x.Name);
        this.MaleCount.push(x.MaleCount);
        this.FemaleCount.push(x.FemaleCount);
      }
      console.log('MaleCount' + this.MaleCount);
      console.log(this.FemaleCount);
    });
    this.data = {
      labels: this.items,
      datasets: [
        {
          label: 'Male',
          backgroundColor: '#ED6E85',
          borderColor: '#E06C75',
          data: this.MaleCount
        },
        {
          label: 'Female',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: this.FemaleCount
        }
      ]
    };
  }
}
