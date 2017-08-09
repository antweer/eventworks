import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-posts',
  templateUrl: './events.component.html',
  styles: ['.gap{margin:10px;}']
})
export class EventsComponent implements OnInit {
  events: any = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getEvents().subscribe(events => {
      this.events = events;
    });
  }

}
