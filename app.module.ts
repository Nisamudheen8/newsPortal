import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { SideCardsComponent } from './side-cards/side-cards.component';
import { HttpClientModule } from '@angular/common/http'
import { NewsApiServiceService } from './service/news-api-service.service';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { EntertainmentNewsComponent } from './entertainment-news/entertainment-news.component';
import { ScienceComponent } from './science/science.component';
import { HealthComponent } from './health/health.component';
import { GeneralNewsComponent } from './general-news/general-news.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    HomeComponent,
    SideCardsComponent,
    BusinessNewsComponent,
    TechNewsComponent,
    SportsNewsComponent,
    EntertainmentNewsComponent,
    ScienceComponent,
    HealthComponent,
    GeneralNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
