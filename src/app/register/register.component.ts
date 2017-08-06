import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,  } from '@angular/forms';
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

  onSubmit() {
    const info = {
      email: this.form.value.email,
      companyName: this.form.value.companyName,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      id: this.details.id
    };
    console.log(info);
    this.registerService.register(info)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
    this.form.reset();
  }

  constructor(
    private appService: AppService,
    private registerService: RegisterService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.appService.getDetails(params.get('id')))
      .subscribe(details => {
        this.details = details[0];
        console.log(details);
      })

    this.form = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]),
      companyName:new FormControl(null, Validators.required)
    });
  }

}
