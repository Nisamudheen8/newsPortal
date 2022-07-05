import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { GeneralNewsComponent } from './general-news/general-news.component';
import { HomeComponent } from './home/home.component';
import { SideCardsComponent } from './side-cards/side-cards.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';

const routes: Routes = [
 {path:'',component:HomeComponent},
 {path:'',component:SideCardsComponent },
 {path:'tech',component:TechNewsComponent },
 {path:'business',component:BusinessNewsComponent },
 {path:'general',component:GeneralNewsComponent },
 {path:'sports',component:SportsNewsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
