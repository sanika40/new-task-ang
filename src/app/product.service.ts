import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  userApiUrl ="http://localhost:3000/user"


  getuser():Observable<any>{
    return this.http.get(this.userApiUrl)
  }
  getuserbyid(id:any):Observable<any>{
    return this.http.get(this.userApiUrl + '/'+id)
  }

  setuser(user:any):Observable<any>{
    return this.http.post(this.userApiUrl,user)
  }
  updateuser(user:any,id:any):Observable<any>{
    return this.http.patch(this.userApiUrl + '/'+id,user)
  }
  postapi(form_data_var:any){
    return this.http.post(this.userApiUrl,form_data_var);
  }
  updateapi(form_data:any,id:any){
    return this.http.put(`${this.userApiUrl}/${id}`,form_data);

  }
}



