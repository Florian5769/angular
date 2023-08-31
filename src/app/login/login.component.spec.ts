import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormDemo } from './login.component';

describe('LoginComponent', () => {
  let component: LoginFormDemo;
  let fixture: ComponentFixture<LoginFormDemo>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoginFormDemo]
    });
    fixture = TestBed.createComponent(LoginFormDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
