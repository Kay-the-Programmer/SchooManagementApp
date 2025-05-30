import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationListAdminComponent } from './notification-list-admin.component';

describe('NotificationListAdminComponent', () => {
  let component: NotificationListAdminComponent;
  let fixture: ComponentFixture<NotificationListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationListAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
