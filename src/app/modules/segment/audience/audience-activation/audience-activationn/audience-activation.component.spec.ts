import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudienceActivationComponent } from './audience-activation.component';

describe('AudienceActivationComponent', () => {
  let component: AudienceActivationComponent;
  let fixture: ComponentFixture<AudienceActivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudienceActivationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudienceActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
