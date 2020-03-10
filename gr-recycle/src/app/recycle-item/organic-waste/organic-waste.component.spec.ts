import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicWasteComponent } from './organic-waste.component';

describe('OrganicWasteComponent', () => {
  let component: OrganicWasteComponent;
  let fixture: ComponentFixture<OrganicWasteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganicWasteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganicWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
