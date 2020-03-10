import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardousComponent } from './hazardous.component';

describe('HazardousComponent', () => {
  let component: HazardousComponent;
  let fixture: ComponentFixture<HazardousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HazardousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HazardousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
