import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent {
  constructor(private cartService: CartService) {}

  shippingCosts!: Observable<{ type: string; price: number }[]>;

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  prices: Array<{ num: number; name: string }> = [
    { num: 25.99, name: 'Overnight' },
    { num: 9.99, name: '2-Day' },
    { num: 2.99, name: 'Postal' },
  ];

  selectedPrice = '';

  submit(form: NgForm) {
    const shippings = form.value.selectedPrice;
  }
}
