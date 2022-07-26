import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatecardsComponent } from './ratecards.component';

describe('RatecardsComponent', () => {
  let component: RatecardsComponent;
  let fixture: ComponentFixture<RatecardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatecardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
