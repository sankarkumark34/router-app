import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTraitsComponent } from './new-traits.component';

describe('NewTraitsComponent', () => {
  let component: NewTraitsComponent;
  let fixture: ComponentFixture<NewTraitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTraitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
