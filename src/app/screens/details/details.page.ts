import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabButton, IonButtons, IonIcon, IonLabel, IonButton, IonImg, IonText } from '@ionic/angular/standalone';
import { Food } from 'src/app/models/food.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { add, arrowBack, cart, heart, heartCircle, heartOutline, starOutline, timeOutline } from 'ionicons/icons';
import { cartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { ToastController } from '@ionic/angular'


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonText, IonImg, IonButton, IonLabel, IonIcon, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class DetailsPage implements OnInit {
  id: any
  foods?: Food;
  back = arrowBack
  heart = heartOutline
  time = timeOutline
  star = starOutline
  constructor(private activated: ActivatedRoute, private foodservice: FoodService, private cart: CartService, private toastCtrl: ToastController) {
    this.id = this.activated.snapshot.paramMap.get('id')
  }

  ngOnInit() {
    const fetchedFood = this.foodservice.getFood(this.id);
    this.foods = fetchedFood !== undefined ? fetchedFood : undefined;
  }
  addToCart() {
    if (this.foods !== undefined) {
      const cartitem: cartItem = {
        id: this.foods.id,
        name: this.foods.title,
        price: this.foods.price,
        image: this.foods.image,
        quantity: 1
      }
      this.cart.addToCart(cartitem)
      console.log(this.cart.addToCart(cartitem));
      this.presentToast();
    }
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Food added to Cart',
      mode: 'md',
      duration: 1000,
      position: 'top'
    });
    toast.present();
  }

}
