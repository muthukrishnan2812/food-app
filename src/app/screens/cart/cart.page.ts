import { Component, EventEmitter, OnInit, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonButtons, IonTabButton, IonIcon, IonLabel, IonButton, IonList, IonItemSliding, IonItem, IonItemOptions } from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { cartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { add, car, cartOutline, remove, trash, trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [IonItemOptions, IonItem, IonItemSliding, IonList, IonButton, IonLabel, IonIcon, IonTabButton, IonButtons, IonImg, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CartPage implements OnInit {
  cartItem$!: Observable<cartItem[]>
  item?: cartItem
  add = add
  remove = remove
  trash = trashOutline
  cartIcon = cartOutline
  increase = new EventEmitter;
  decrease = new EventEmitter;

  constructor(private cart: CartService) {
    // this.item = {
    //   id: 1,
    //   name: 'Sea Food',
    //   price: 12,
    //   image: 'assets/images/foods/seafood-dishes.png',
    //   quantity:1
    // }
    this.cartItem$ = this.cart.getCart()
  }

  ngOnInit() {
    this.cartItem$ = this.cart.getCart();

  }
  onClick() {
  }
  onIncrease(item: cartItem) {

  }
  onDecrease(item: cartItem) { }

  removeFromCart(item: cartItem) {
    this.cart.removeItem(item.id)
    console.log('hello');
  }
}
