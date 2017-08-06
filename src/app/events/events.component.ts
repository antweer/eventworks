import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-posts',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  posts: any = [];
  events: any = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getAllEvents().subscribe(events => {
      this.events = events;
      console.log(events);
    });
  }

}
