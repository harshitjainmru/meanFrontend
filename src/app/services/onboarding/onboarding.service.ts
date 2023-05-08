import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {
  constructor(private http:HttpClient) { }
  register(data:any):Observable<any>{
    return this.http.post(`${environment.baseUrl}/register`,data)
  }
  login(data:any):Observable<any>{
    return this.http.post(`${environment.baseUrl}/login`,data)
  }
  forgotPassword(data:any):Observable<any>{
    return this.http.post(`${environment.baseUrl}/send-reset-password`,data)
  }
  resetPassword(data: any, id: any, token: any) {
    // const url = `http://localhost:3000/api/user/reset/${id}/${token}`;
    const url = `${environment.baseUrl}/reset-password/${id}/${token}`
    return this.http.post(url, data);
  }
}
