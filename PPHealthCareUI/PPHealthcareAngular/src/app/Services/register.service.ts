import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterModule } from '../Modules/RegisterModule';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  RegisterUser(user: RegisterModule) {
    return this.http.post('http://localhost:9001/user/register', user);
  }

  
}
