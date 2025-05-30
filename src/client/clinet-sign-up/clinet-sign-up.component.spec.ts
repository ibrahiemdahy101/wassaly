import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinetSignUpComponent } from './clinet-sign-up.component';

describe('ClinetSignUpComponent', () => {
  let component: ClinetSignUpComponent;
  let fixture: ComponentFixture<ClinetSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinetSignUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinetSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
