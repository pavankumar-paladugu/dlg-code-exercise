import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DlgInputModule } from '../dlg-input/dlg-input.module';
import { SignupService } from 'src/services/signup.service';
import { By } from '@angular/platform-browser';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [ReactiveFormsModule, HttpClientModule, DlgInputModule],
      providers: [SignupService]
    });
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('validate first name', () => {
    let firstName = component.profileForm.controls['firstName'];
    expect(firstName.valid).toBeFalsy();
  });

  it('validate first name with value', () => {
    let firstName = component.profileForm.controls['firstName'];
    expect(firstName.valid).toBeFalsy();
    firstName.setValue('Sam');
    expect(firstName.valid).toBeTruthy();
    expect(firstName.value).toEqual('Sam');
  });
  it('validate last name', () => {
    let lastName = component.profileForm.controls['lastName'];
    expect(lastName.valid).toBeFalsy();
  });

  it('validate last name with value', () => {
    let lastName = component.profileForm.controls['lastName'];
    expect(lastName.valid).toBeFalsy();
    lastName.setValue('grist');
    expect(lastName.valid).toBeTruthy();
    expect(lastName.value).toEqual('grist');
  });
  it('validate email', () => {
    let email = component.profileForm.controls['email'];
    expect(email.valid).toBeFalsy();
  });

  it('validate email name with invalid email', () => {
    let email = component.profileForm.controls['email'];
    expect(email.valid).toBeFalsy();
    email.setValue('test');
    expect(email.valid).toBeFalsy();
  });

  it('validate email name with valid email', () => {
    let email = component.profileForm.controls['email'];
    expect(email.valid).toBeFalsy();
    email.setValue('test@gmail.com');
    expect(email.valid).toBeTruthy();
    expect(email.value).toEqual('test@gmail.com');
  });

  it('validate submission', () => {
    expect(component.profileForm.invalid).toBeTruthy();

    component.profileForm.controls['firstName'].setValue('abc');
    component.profileForm.controls['lastName'].setValue('xyz');
    component.profileForm.controls['email'].setValue('test@test.com');
    
    component.onSubmit();
    fixture.detectChanges();

    expect(component.saveError).toBeFalsy();
  });

});
