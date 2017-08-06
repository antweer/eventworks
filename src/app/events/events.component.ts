import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-posts',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {
  events: any = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getEvents().subscribe(events => {
      this.events = events;
      console.log(events);
    });
  }

}
