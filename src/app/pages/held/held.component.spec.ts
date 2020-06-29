import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeldComponent } from './held.component';

describe('HeldComponent', () => {
  let component: HeldComponent;
  let fixture: ComponentFixture<HeldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
