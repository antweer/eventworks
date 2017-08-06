import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm  } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../app.service';
import { RegisterService } from '../register/register.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
    '.full-width { width: 100%; }',
  ]
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  details: any = [];
  sessionDetails: any = [];

  constructor(
    private appService: AppService,
    private registerService: RegisterService,
    private route: ActivatedRoute,
    private location: Location) {}

  selectedOptions() {
    return this.sessionDetails
              .filter(opt => opt.checked)
              .map(opt => opt.id)
  }

  onSubmit() {

    const info = {
      email: this.form.value.email,
      companyName: this.form.value.companyName,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      phoneNumber: this.form.value.phoneNumber,
      id: this.details.id,
      sessions: this.selectedOptions()
    };
    console.log(info);
    this.registerService.register(info)
      .subscribe(
        data => console.log('1'),
        error => console.error(error)
      );
    this.form.reset();
  }

  ngOnInit() {
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

    this.form = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]),
      phoneNumber: new FormControl(null),
      companyName:new FormControl(null),
      sessions: new FormControl(null)
    });
  }

}
