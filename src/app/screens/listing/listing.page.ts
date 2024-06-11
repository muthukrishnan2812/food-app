import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { Title } from '@angular/platform-browser';

import { HomePage } from 'src/app/home/home.page';
import { SearchbarPage } from 'src/app/components/searchbar/searchbar.page';
import { category } from 'src/app/models/category.model';
import { Food } from 'src/app/models/food.model';
import { FoodCardComponent } from 'src/app/components/food-card/food-card.component';
import { FoodService } from 'src/app/services/food.service';
import {addOutline} from 'ionicons/icons'
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButtons, IonButton, IonImg, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonImg,SearchbarPage]
})
export class ListingPage implements OnInit {
  categories:category[]=[]
  foods:Food[]=[]
  posts:any
  add =addOutline


  constructor(private foodservice:FoodService,private route:Router) { }

  ngOnInit() {

    this.posts=this.getCategories();
    this.foods=this.foodservice.getFoods()
  
  }
  getCategories(){
    this.categories=[
      {
        id:1,
        label:'All',
        image:'assets/images/icons/all.png',
        active:true
      },
      {
        id:2,
        label:'Burgers',
        image:'assets/images/icons/burger.png',
        active:false
      },
      {
        id:3,
        label:'Dishes',
        image:'assets/images/icons/dish.png',
        active:false
      },
      {
        id:4,
        label:'Sushi',
        image:'assets/images/icons/sushi.png',
        active:false
      }
    ]
  }

  goToDetailPage(id:number){
    this.route.navigate(['details',id]);
    console.log('hello',id);
    
  }

}
