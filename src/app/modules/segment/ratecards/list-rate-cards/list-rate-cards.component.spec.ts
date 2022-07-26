import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRateCardsComponent } from './list-rate-cards.component';

describe('ListRateCardsComponent', () => {
  let component: ListRateCardsComponent;
  let fixture: ComponentFixture<ListRateCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRateCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRateCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
