import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeldenComponent } from './helden.component';

describe('HeldenComponent', () => {
  let component: HeldenComponent;
  let fixture: ComponentFixture<HeldenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeldenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeldenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
