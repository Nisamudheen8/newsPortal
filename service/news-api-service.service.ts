import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiServiceService {

  constructor(private http: HttpClient) { }

  //common news api
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=7bc1a707c4324f82bfb27b20f7a5fd87"


  //technews
  techNewsUrl ='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=7bc1a707c4324f82bfb27b20f7a5fd87'

  //businessNews
  businessNewsUrl ='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7bc1a707c4324f82bfb27b20f7a5fd87'


    //businessNews
    generalNewsUrl ='https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=7bc1a707c4324f82bfb27b20f7a5fd87'


    //businessNews
    sportsNewsUrl ='https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=7bc1a707c4324f82bfb27b20f7a5fd87'


  //sportsNews logic
  sportsNews(): Observable <any>{
    return this.http.get(this.sportsNewsUrl);
  }


   //businessNes logic
   generalNews(): Observable <any>{
    return this.http.get(this.generalNewsUrl);
  }

  //businessNes logic
  businessNews(): Observable <any>{
    return this.http.get(this.businessNewsUrl);
  }


  //technewslogic
  techNews(): Observable <any>{
    return this.http.get(this.techNewsUrl);
  }


  //common news login
  topHeading(): Observable <any>{
    return this.http.get(this.newsApiUrl);
  }

}
