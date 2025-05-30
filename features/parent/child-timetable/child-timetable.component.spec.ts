import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTimetableComponent } from './child-timetable.component';

describe('ChildTimetableComponent', () => {
  let component: ChildTimetableComponent;
  let fixture: ComponentFixture<ChildTimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildTimetableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
