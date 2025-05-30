import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassEnrollmentComponent } from './class-enrollment.component';

describe('ClassEnrollmentComponent', () => {
  let component: ClassEnrollmentComponent;
  let fixture: ComponentFixture<ClassEnrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassEnrollmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
