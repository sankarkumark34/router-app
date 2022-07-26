import { style } from '@angular/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponent } from './shared.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [{path:'',pathMatch: 'full', redirectTo: './style/style.component'},
{path:'',component:CalendarComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
