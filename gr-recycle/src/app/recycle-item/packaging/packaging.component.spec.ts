import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagingComponent } from './packaging.component';

describe('PackagingComponent', () => {
  let component: PackagingComponent;
  let fixture: ComponentFixture<PackagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
