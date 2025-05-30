import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNotificationsComponent } from './child-notifications.component';

describe('ChildNotificationsComponent', () => {
  let component: ChildNotificationsComponent;
  let fixture: ComponentFixture<ChildNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildNotificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
