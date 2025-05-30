import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierSignUpComponent } from './courier-sign-up.component';

describe('CourierSignUpComponent', () => {
  let component: CourierSignUpComponent;
  let fixture: ComponentFixture<CourierSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourierSignUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourierSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
