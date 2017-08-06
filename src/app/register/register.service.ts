import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {
  constructor(private http: Http) { }

  register(id) {
    return this.http.get(`/api/register/${id}`)
  }
}
