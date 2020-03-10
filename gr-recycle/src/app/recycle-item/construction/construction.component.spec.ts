import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionComponent } from './construction.component';

describe('ConstructionComponent', () => {
  let component: ConstructionComponent;
  let fixture: ComponentFixture<ConstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
