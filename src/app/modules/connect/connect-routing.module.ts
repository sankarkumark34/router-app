import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdAccountsComponent } from './ad-accounts/ad-accounts.component';
import { LinkAdaccountComponent } from './ad-accounts/link-adaccount/link-adaccount.component';
import { SourceComponent } from './source/source.component';
import { CreateSourceComponent } from './source/create-source/create-source.component';
import { ListSourceComponent } from './source/list-source/list-source.component';
import { ViewSourceComponent } from './source/view-source/view-source.component';

const routes: Routes = [
{path:'',pathMatch: 'full', redirectTo: 'ad-accounts/ad-accounts.component'},
{ path: 'ad-accounts/ad-accounts.component', component: AdAccountsComponent },
{ path: 'ad-accounts/link-adaccount/link-adaccount.component', component: LinkAdaccountComponent },
{ path: 'source/source.component', component: SourceComponent},
{ path: 'source/create-source/create-source.component', component: CreateSourceComponent},
{ path: 'source/list-source/list-source.component', component: ListSourceComponent},
{ path: 'source/view-source/view-source.component', component: ViewSourceComponent},
];

@NgModule({
  declarations: [
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectRoutingModule { }
