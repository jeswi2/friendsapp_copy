import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewfriends=()=>{
    return this.http.get("http://dummyapifriends.herokuapp.com/view")
  }
 
  addfriends=(data:any)=>{
    return this.http.post("https://dummyapifriends.herokuapp.com/adddata",data)
  }
}
