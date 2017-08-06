import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MdCardModule, MdMenuModule, MdToolbarModule, MdGridListModule, MdButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { AppService } from './app.service';

const ROUTES = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: EventsComponent
  },
  {
    path: 'test',
    component: EventsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdGridListModule,
    MdButtonModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
