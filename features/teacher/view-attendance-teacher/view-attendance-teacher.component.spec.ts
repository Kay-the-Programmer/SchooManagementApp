import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAttendanceTeacherComponent } from './view-attendance-teacher.component';

describe('ViewAttendanceTeacherComponent', () => {
  let component: ViewAttendanceTeacherComponent;
  let fixture: ComponentFixture<ViewAttendanceTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAttendanceTeacherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAttendanceTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
