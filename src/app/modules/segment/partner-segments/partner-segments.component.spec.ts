import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerSegmentsComponent } from './partner-segments.component';

describe('PartnerSegmentsComponent', () => {
  let component: PartnerSegmentsComponent;
  let fixture: ComponentFixture<PartnerSegmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerSegmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerSegmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
