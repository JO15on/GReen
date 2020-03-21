import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMissingComponent } from './report-missing.component';

describe('ReportMissingComponent', () => {
  let component: ReportMissingComponent;
  let fixture: ComponentFixture<ReportMissingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportMissingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportMissingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
