import { Component, OnInit } from '@angular/core';
import { NewsApiServiceService } from '../service/news-api-service.service';

@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})
export class SportsNewsComponent implements OnInit {

  constructor(private services:NewsApiServiceService) { }

  sportsNews:any = []

  ngOnInit(): void {
    this.services.sportsNews().subscribe((result)=>{
      console.log(result);

      this.sportsNews = result.articles
      
    })
  }

}
