import { Injectable } from '@angular/core';
import {Gittafuta} from '/home/lorddoyo/githubsearcher/src/app/gittafuta';
import {HttpClient} from '@angular/common/http';
import {environment} from '/home/lorddoyo/githubsearcher/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GittafutaService {

  gittafuta:Gittafuta;
  userName: string;


  constructor(private http:HttpClient) {
    this.gittafuta= new Gittafuta("","","","","","","","",new Date)
   }


   gittafutaRequest(){ //to search through github

     interface ApiResponse{
       login: string;
       name: string;
       avatar_url :any;
       bio: any;
       public_repos: number;
       followers: number;
       following: number;
       html_url:any;

     }
     let promise = new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>(environment.apiUrl + this.userName + "?access_token=" + environment.access_token).toPromise().then(response=>{

          this.gittafuta.username = response.login
          this.gittafuta.name = response.name
          this.gittafuta.avatar= response.avatar_url
          this.gittafuta.bio = response.bio
          this.gittafuta.repositories = response.public_repos
          this.gittafuta.followers = response.followers
          this.gittafuta.following = response.following
          this.gittafuta.link = response.html_url

          resolve();
        },
        error=>{
          this.gittafuta.username = "Lorddoyo"
          this.gittafuta.name = "lorddoyo"
          this.gittafuta.avatar= ""
          this.gittafuta.bio = ""
          this.gittafuta.repositories = 14
          this.gittafuta.followers = 1
          this.gittafuta.following = 1
          this.gittafuta.link = "https://github.com/lorddoyo"

          reject(error);


       })
     })
     return promise
   }
   tafutaMsee(userName:string){
     this.userName =userName; //from searchbar to be accessed by  service
   }

}
