import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ACCOUNT_ERROR_MESSAGES } from 'src/app/constant/error-message';
import { REGEX } from 'src/app/constant/validator';
import { OnboardingService } from 'src/app/services/onboarding/onboarding.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm!:FormGroup
  errorMsg=ACCOUNT_ERROR_MESSAGES
  show:boolean=false

  constructor(private _fb:FormBuilder,private _http:OnboardingService) { }

  ngOnInit(): void {
    this.createForm()
  }
  createForm(){
    this.forgotForm = this._fb.group({
      email:['',[]],
    })
  }
  get formControl (){
    return this.forgotForm.controls
  }
  forgotHandler(){
    this.forgotForm.controls.email.setValidators([Validators.required,Validators.pattern(REGEX.EMAIL)]);
    this.forgotForm.controls.email.updateValueAndValidity()
    if(this.forgotForm.valid){
      this.show=true
      this._http.forgotPassword(this.forgotForm.value).subscribe((res)=>{
        console.log(res,'res');

      })
    }
  }
}
