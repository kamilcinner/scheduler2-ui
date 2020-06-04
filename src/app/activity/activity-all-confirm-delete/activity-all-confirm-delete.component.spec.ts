import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityAllConfirmDeleteComponent } from './activity-all-confirm-delete.component';

describe('ActivityAllConfirmDeleteComponent', () => {
  let component: ActivityAllConfirmDeleteComponent;
  let fixture: ComponentFixture<ActivityAllConfirmDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityAllConfirmDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityAllConfirmDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
