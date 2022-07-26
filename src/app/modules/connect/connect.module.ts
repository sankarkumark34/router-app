import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectRoutingModule } from './connect-routing.module';
import { AdAccountsComponent } from './ad-accounts/ad-accounts.component';
import { LinkAdaccountComponent } from './ad-accounts/link-adaccount/link-adaccount.component';
import { SourceComponent } from './source/source.component';
import { CreateSourceComponent } from './source/create-source/create-source.component';
import { ListSourceComponent } from './source/list-source/list-source.component';
import { ViewSourceComponent } from './source/view-source/view-source.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AdAccountsComponent,
    LinkAdaccountComponent,
    SourceComponent,
    CreateSourceComponent,
    ListSourceComponent,
    ViewSourceComponent,
  ],
  imports: [
    CommonModule,
    ConnectRoutingModule,
    SharedModule
  ]
})
export class ConnectModule { }
