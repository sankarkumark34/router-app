import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAudienceComponent } from './new-audience.component';

describe('NewAudienceComponent', () => {
  let component: NewAudienceComponent;
  let fixture: ComponentFixture<NewAudienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAudienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAudienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
