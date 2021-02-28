import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterModule } from '../Modules/RegisterModule';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  EditUser(user: RegisterModule) {

    console.log(user);
    

    return this.http.put('http://localhost:9001/user/edit', user);
  }

  DeleteUser(id: number) {
    return this.http.delete('http://localhost:9001/user/delete/' + id);
  }

  constructor(private http: HttpClient) { }
  
  GetAllUser() {
    return this.http.get('http://localhost:9001/user/get');
  }

}
