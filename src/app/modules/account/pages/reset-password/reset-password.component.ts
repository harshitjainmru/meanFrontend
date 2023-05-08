import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { REGEX } from 'src/app/constant/validator';
import { OnboardingService } from 'src/app/services/onboarding/onboarding.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
userInfo={id:'',token:''}
value:any
resetPasswordForm!:FormGroup
hide = true;
hide1 = true;
disable_btn:boolean=false
  constructor(  private _fb:FormBuilder ,private _http:OnboardingService ,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getApiData()
    this.makeForm()
  }
  getApiData() {
    this.route.params.subscribe((event) => {
      console.log(event);
      this.userInfo.id = event.id;
      this.userInfo.token = event.token;
    });
  }
  makeForm(){
    this.resetPasswordForm = this._fb.group({
      password:['',[Validators.required,]],
      passwrod_confirmation:['',[Validators.required]],
    })
  }
  get resetFormControl(){
    return this.resetPasswordForm.controls;
  }

  onSubmit() {
    const resetData = {
      data: {
        password: this.resetFormControl['password'].value,
        passwrod_confirmation: this.resetFormControl['passwrod_confirmation'].value
      },
      id: this.userInfo.id,
      token:this.userInfo.token
    };
    console.log(resetData);

    this._http.resetPassword(resetData.data,resetData.id,resetData.token).subscribe(response => {

      console.log(response);
    });
  }

}
