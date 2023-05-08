import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ACCOUNT_ERROR_MESSAGES } from 'src/app/constant/error-message';
import { LIMIT, REGEX } from 'src/app/constant/validator';
import { OnboardingService } from 'src/app/services/onboarding/onboarding.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  hide: boolean = true;
  SignupForm!: FormGroup;
  errorMsg = ACCOUNT_ERROR_MESSAGES;
  userName: any = [];
  constructor(
    private _fb: FormBuilder,
    private _http:OnboardingService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.SignupForm = this._fb.group({
      name: ['', [Validators.pattern(REGEX.NAME),Validators.minLength(LIMIT.MIN_NAME_LENGTH),Validators.maxLength(LIMIT.MAX_NAME_LENGTH)]],
      email: ['', [Validators.pattern(REGEX.EMAIL)]],
      password: ['', [Validators.required, Validators.pattern(REGEX.PASSWORD)]],


    });
  }
  get formControl() {
    return this.SignupForm.controls;
  }


  loginHandler() {
    this._http.register(this.SignupForm.value).subscribe((res)=>{
      console.log(res,'signup');

      // this.SignupForm.reset();
      //   setTimeout(() => {
      //     // this.router.navigate(['sign-in']);
      //   }, 3000);
      },
      err => {
      console.log(err);

      }
    );
  }
}
