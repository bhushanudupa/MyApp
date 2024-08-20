import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { SecAssignmentComponent } from './sec-assignment/sec-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AssignmentComponent,
    SecAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [SecAssignmentComponent]
})
export class AppModule { }
