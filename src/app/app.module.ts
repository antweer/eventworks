import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MdCardModule, MdToolbarModule, MdButtonModule, MdInputModule, MdCheckboxModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { AppService } from './app.service';
import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register/register.service';

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
  },
  {
    path: 'register/:id',
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    DetailsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    MdCardModule,
    MdToolbarModule,
    MdButtonModule,
    FlexLayoutModule,
    MdInputModule,
    MdCheckboxModule,
    BrowserAnimationsModule,
    ReactiveFormsModule 
  ],
  providers: [
    AppService,
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
