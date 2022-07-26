import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTraitsComponent } from './list-traits.component';

describe('ListTraitsComponent', () => {
  let component: ListTraitsComponent;
  let fixture: ComponentFixture<ListTraitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTraitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
