import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  shipping: any = {};

  constructor(
    private http: HttpClient
  ) {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  shippingChoice(choice: String) {
    this.shipping = choice;
  }

  getItems() {
    return this.items;
  }

  getShipping() {
    return this.shipping;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
