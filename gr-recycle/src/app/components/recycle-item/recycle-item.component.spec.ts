import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecycleItemComponent } from './recycle-item.component';

describe('RecycleItemComponent', () => {
  let component: RecycleItemComponent;
  let fixture: ComponentFixture<RecycleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecycleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecycleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
