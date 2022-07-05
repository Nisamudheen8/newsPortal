import { Component, OnInit } from '@angular/core';
import { NewsApiServiceService } from '../service/news-api-service.service';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent implements OnInit {

  constructor(private services:NewsApiServiceService) { }

  businessNews:any = []

  ngOnInit(): void {

    this.services.businessNews().subscribe((result) => {

      console.log(result);

      this.businessNews = result.articles
      
    })
  }

}
