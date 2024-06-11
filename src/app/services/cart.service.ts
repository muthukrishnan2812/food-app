import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //behaviourSubject -> maintans the current value
  private item$ = new BehaviorSubject<cartItem[]>([]);

  constructor() { }

  getCart(){
    return this.item$.asObservable();
  }
  addToCart(newItem:cartItem){
    this.item$.next([...this.item$.getValue(),newItem])
  }
  removeItem(id:number){
    this.item$.next(this.item$.getValue().filter((item)=>item.id === id))
  }
}
