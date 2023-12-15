import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopbagService {
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  getCartCount(): number {
    return this.cartCountSubject.value;
  }

  incrementCartCount() {
    this.cartCountSubject.next(this.cartCountSubject.value + 1);
  }

  decrementCartCount() {
    if (this.cartCountSubject.value > 0) {
      this.cartCountSubject.next(this.cartCountSubject.value - 1);
    }
  }
}
