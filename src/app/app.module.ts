import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MdCardModule, MdMenuModule, MdToolbarModule, MdGridListModule, MdButtonModule, MdListModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";


import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { AppService } from './app.service';
import { DetailsComponent } from './details/details.component';

const ROUTES = [
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'events/:id',
    component: DetailsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    DetailsComponent
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
    MdButtonModule,
    FlexLayoutModule,
    MdListModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
