import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  constructor(private http: Http) { }

  // Get all posts from the API

  getAllEvents() {
   return this.http.get('/api/events')
     .map(res => res.json());
  }
}
