import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {
  constructor(private http: Http) { }

  register(info) {
    //return this.http.get(`/api/register/${id}`)
    const body = JSON.stringify(info);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('api/register', body, {headers: headers})
      .map((response) => response.json())
  }
}
