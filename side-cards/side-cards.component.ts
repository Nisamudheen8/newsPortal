import { Component, OnInit } from '@angular/core';
import { NewsApiServiceService } from '../service/news-api-service.service';

@Component({
  selector: 'app-side-cards',
  templateUrl: './side-cards.component.html',
  styleUrls: ['./side-cards.component.css']
})
export class SideCardsComponent implements OnInit {

  constructor(private _services:NewsApiServiceService) { }

  newsApi:any = []
  ngOnInit(): void {

    this._services.topHeading().subscribe((result)=>{

      console.log(result);
      
      this.newsApi = result.articles


    })
  }

}
