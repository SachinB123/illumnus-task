import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostGetService {

  constructor(private http: HttpClient) { }

  getUsersList() {
    return this.http.get('https://api.github.com/users');
  }
  getUserDetails(postData:string){
    return this.http.get(`https://api.github.com/users/${postData}`);
  }
  getUserRepoDetails(postData:string){
    return this.http.get(`https://api.github.com/users/${postData}/repos`);
  }
  getUserFollowerDetails(postData:string){
    return this.http.get(`https://api.github.com/users/${postData}/followers`);
  }
}
