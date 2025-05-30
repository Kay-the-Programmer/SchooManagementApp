import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendNotificationTeacherComponent } from './send-notification-teacher.component';

describe('SendNotificationTeacherComponent', () => {
  let component: SendNotificationTeacherComponent;
  let fixture: ComponentFixture<SendNotificationTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendNotificationTeacherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendNotificationTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
