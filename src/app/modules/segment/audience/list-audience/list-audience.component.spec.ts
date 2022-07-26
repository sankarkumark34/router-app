import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAudienceComponent } from './list-audience.component';

describe('ListAudienceComponent', () => {
  let component: ListAudienceComponent;
  let fixture: ComponentFixture<ListAudienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAudienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAudienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
