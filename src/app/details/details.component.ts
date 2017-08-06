import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../app.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details: any = [];
  sessionDetails: any = [];

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit():  void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.appService.getDetails(params.get('id')))
      .subscribe(details => {
        this.details = details[0];
        console.log(details);
      })

    this.route.paramMap
      .switchMap((params: ParamMap) => this.appService.getSession(params.get('id')))
      .subscribe(sessionDetails => {
        this.sessionDetails = sessionDetails;
        console.log(sessionDetails);
      })
  }

}
