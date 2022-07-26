import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import {ButtonModule} from 'primeng/button';
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
  declarations: [
    SharedComponent,
    CalendarComponent,
  
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ButtonModule,
  ],
  exports:[
    CalendarComponent
  ]
})
export class SharedModule { }
