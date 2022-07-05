import { Component, OnInit } from '@angular/core';
import { NewsApiServiceService } from '../service/news-api-service.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  constructor(private services:NewsApiServiceService) { }

  techNews:any = []

  ngOnInit(): void {

    this.services.techNews().subscribe((result) => {

      console.log(result);

      this.techNews = result.articles
      
    })
  }

}
