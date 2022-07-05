import { Component, OnInit } from '@angular/core';
import { NewsApiServiceService } from '../service/news-api-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private services:NewsApiServiceService) { }

  newsApi:any = []

  ngOnInit(): void {

    this.services.topHeading().subscribe((result) => {

      console.log(result);

      this.newsApi = result.articles
      
    })

    
  }

  
}
