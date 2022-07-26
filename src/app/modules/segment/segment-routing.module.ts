import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SegmentComponent } from './segment.component';
import { AudienceComponent } from './audience/audience.component';
import { AudienceActivationComponent } from './audience/audience-activation/audience-activation.component';
import { ListAudienceComponent } from './audience/list-audience/list-audience.component';
import { NewAudienceComponent } from './audience/new-audience/new-audience.component';
import { JourneyComponent } from './journey/journey.component';
import { CreateJourneyComponent } from './journey/create-journey/create-journey.component';
import { ListJourneyComponent } from './journey/list-journey/list-journey.component';
import { PartnerSegmentsComponent } from './partner-segments/partner-segments.component';
import { RatecardsComponent } from './ratecards/ratecards.component';
import { CreateComponent } from './ratecards/create/create.component';
import { ListRateCardsComponent } from './ratecards/list-rate-cards/list-rate-cards.component';
import {CreateSegmentComponent} from './segment/create-segment/create-segment.component';
import { ListSegmentComponent } from './segment/list-segment/list-segment.component';
import { ListTraitsComponent } from './traits/list-traits/list-traits.component';
import { NewTraitsComponent } from './traits/new-traits/new-traits.component';
import { WhitelistComponent } from './whitelist/whitelist.component';


const routes: Routes = 
[{ path: '', component: SegmentComponent },
{path:'./audience/audience.component',component:AudienceComponent},
{path:'../audience/audience-activation/audience-activation.component',component:AudienceActivationComponent},
{path:'./audience/list-audience/list-audience.component',component:ListAudienceComponent},
{path:'./audience/new-audience/new-audience.component',component:NewAudienceComponent},
{path:'./journey/journey.component',component:JourneyComponent},
{path:'./journey/create-journey/create-journey.component',component:CreateJourneyComponent},
{path:'./journey/list-journey/list-journey.component',component:ListJourneyComponent},
{path:'./partner-segments/partner-segments.component',component:PartnerSegmentsComponent},
{path:'./ratecards/ratecards.component',component:RatecardsComponent},
{path:'./ratecards/create/create.component',component:CreateComponent},
{path:'./ratecards/list-rate-cards/list-rate-cards.component',component:ListRateCardsComponent},
{path:'./segment/create-segment/create-segment.component',component:CreateSegmentComponent},
{path:'./segment/list-segment/list-segment.component',component:ListSegmentComponent},
{path:'./traits/list-traits/list-traits.component',component:ListTraitsComponent},
{path:'./traits/new-traits/new-traits.component',component:NewTraitsComponent},
{path:'./whitelist/whitelist.component',component:WhitelistComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SegmentRoutingModule { }
