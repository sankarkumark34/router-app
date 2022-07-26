import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkAdaccountComponent } from './link-adaccount.component';

describe('LinkAdaccountComponent', () => {
  let component: LinkAdaccountComponent;
  let fixture: ComponentFixture<LinkAdaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkAdaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkAdaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
