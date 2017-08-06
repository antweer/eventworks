import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../app.service';
import { RegisterService } from '../register/register.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: ['.pull-right { flex: 1 1 auto }']
})
export class DetailsComponent implements OnInit {
  details: any = [];
  sessionDetails: any = [];

  constructor(
    private appService: AppService,
    private registerService: RegisterService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  onRegister() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.registerService.register(params.get('id')))
      .subscribe(response => {
        console.log(response);
      })
  }

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
