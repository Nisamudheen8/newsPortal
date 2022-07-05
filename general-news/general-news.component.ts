import { Component, OnInit } from '@angular/core';
import { NewsApiServiceService } from '../service/news-api-service.service';

@Component({
  selector: 'app-general-news',
  templateUrl: './general-news.component.html',
  styleUrls: ['./general-news.component.css']
})
export class GeneralNewsComponent implements OnInit {

  constructor(private services:NewsApiServiceService) { }

  generalNews:any = []

  ngOnInit(): void {
    this.services.generalNews().subscribe((result) => {

      console.log(result);

      this.generalNews = result.articles
      
    })
  }

}
