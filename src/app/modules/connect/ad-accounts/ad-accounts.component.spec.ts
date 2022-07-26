import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAccountsComponent } from './ad-accounts.component';

describe('AdAccountsComponent', () => {
  let component: AdAccountsComponent;
  let fixture: ComponentFixture<AdAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdAccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
