import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegmentRoutingModule } from './segment-routing.module';
import { SegmentComponent } from './segment.component';
import { AudienceComponent } from './audience/audience.component';
import { JourneyComponent } from './journey/journey.component';
import { PartnerSegmentsComponent } from './partner-segments/partner-segments.component';
import { RatecardsComponent } from './ratecards/ratecards.component';
import { TraitsComponent } from './traits/traits.component';
import { WhitelistComponent } from './whitelist/whitelist.component';
import { AudienceActivationComponent } from './audience/audience-activation/audience-activation.component';
import { ListAudienceComponent } from './audience/list-audience/list-audience.component';
import { NewAudienceComponent } from './audience/new-audience/new-audience.component';
import { CreateJourneyComponent } from './journey/create-journey/create-journey.component';
import { ListJourneyComponent } from './journey/list-journey/list-journey.component';
import { CreateComponent } from './ratecards/create/create.component';
import { ListRateCardsComponent } from './ratecards/list-rate-cards/list-rate-cards.component';
import { CreateSegmentComponent } from './segment/create-segment/create-segment.component';
import { ListSegmentComponent } from './segment/list-segment/list-segment.component';
import { ListTraitsComponent } from './traits/list-traits/list-traits.component';
import { NewTraitsComponent } from './traits/new-traits/new-traits.component';
import { ListComponent } from './whitelist/list/list.component';


@NgModule({
  declarations: [
    SegmentComponent,
    AudienceComponent,
    JourneyComponent,
    PartnerSegmentsComponent,
    RatecardsComponent,
    TraitsComponent,
    WhitelistComponent,
    AudienceActivationComponent,
    ListAudienceComponent,
    NewAudienceComponent,
    CreateJourneyComponent,
    ListJourneyComponent,
    CreateComponent,
    ListRateCardsComponent,
    CreateSegmentComponent,
    ListSegmentComponent,
    ListTraitsComponent,
    NewTraitsComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    SegmentRoutingModule
  ]
})
export class SegmentModule { }
