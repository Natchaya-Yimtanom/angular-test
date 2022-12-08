import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

import { NgForm } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent {
  @Input() selectedPrice: string = '';
  constructor(private cartService: CartService) {}

  routes: Routes = [{ path: 'cart', redirectTo: '/cart' }];

  shippingCosts!: Observable<{ type: string; price: number }[]>;

  prices: Array<{ price: number; name: string }> = [
    { price: 25.99, name: 'Overnight' },
    { price: 9.99, name: '2-Day' },
    { price: 2.99, name: 'Postal' },
  ];

  // selectedPrice: string = '';

  ngOnInit(): void {
    // this.shippingCosts = this.cartService.getShippingPrices();
    // this.selectedPrice = this.prices[0].name;
  }

  // selectedPrice = '';

  submit(form: NgForm) {
    const shippings = this.selectedPrice;
    this.cartService.shippingChoice(shippings);
    window.alert('Successfully chosing shipping');
  }
}
