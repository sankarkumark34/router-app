import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component'

const routes: Routes = [
{path:'',component:LoginComponent},
{ path: 'connect', loadChildren: () => import('./modules/connect/connect.module').then(m => m.ConnectModule) }, 
{ path: 'segment', loadChildren: () => import('./modules/segment/segment.module').then(m => m.SegmentModule) },
{ path: 'shared', loadChildren: () => import('./modules/shared/shared.module').then(m => m.SharedModule) },
{ path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
