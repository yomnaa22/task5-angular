import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }
  
registerUser(user:any)
{
  return this.httpClient.post<any>(environment.baseUrl + 'user/login',user)
}


}
