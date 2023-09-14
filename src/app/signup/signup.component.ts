import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { IProfile } from '../../interfaces/profile.model'
import { SignupService } from 'src/services/signup.service';
import { fieldsData } from './signup-fields';
import { IField } from 'src/interfaces/field.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  profileForm!: FormGroup;
  user: IProfile;
  fields: IField[];
  submitted = false;
  saveError = false;

  constructor(private signupService: SignupService, private router: Router) {
    this.user = {} as IProfile;
    this.fields = fieldsData as IField[];
  }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl(this.user.firstName, [
        Validators.required
      ]),
      lastName: new FormControl(this.user.lastName, [
        Validators.required
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email
      ]),
    });
    console.log(this.profileForm);
  }
  onSubmit() {

    // stop here if form is invalid
    if (this.profileForm.invalid) {
      this.submitted = true;
      return;
    }
    this.signupService.saveProfileData(this.profileForm.value).subscribe((data) => {
      if (data) {
        this.saveError = false;
        this.router.navigateByUrl('/success');
      } else {
        console.log("error while saving the data");
        this.saveError = true;
      }
    });
  }
}
