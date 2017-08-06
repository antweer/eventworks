import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  constructor(private http: Http) { }

  // Get all posts from the API

  getEvents() {
   return this.http.get('/api/events')
     .map(res => res.json());
  }

  getDetails(id) {
    return this.http.get(`/api/details/${id}`)
      .map(res => res.json());
  }

  getSession(id) {
    return this.http.get(`/api/sessions/${id}`)
      .map(res => res.json());
  }

}
