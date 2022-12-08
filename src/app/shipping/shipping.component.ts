import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent {
  @Input() selectedPrice: String = '';
  constructor(private cartService: CartService) {}

  shippingCosts!: Observable<{ type: string; price: number }[]>;

  prices: Array<{ price: number; name: string }> = [
    { price: 25.99, name: 'Overnight' },
    { price: 9.99, name: '2-Day' },
    { price: 2.99, name: 'Postal' },
  ];

  ngOnInit(): void {
    this.selectedPrice = this.prices[0].name;
    if (this.cartService.getShipping() != '') {
      this.selectedPrice = this.cartService.getShipping();
    }
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  submit(form: NgForm) {
    const shippings = this.selectedPrice;
    this.cartService.shippingChoice(shippings);
    window.alert('Successfully choose shipping');
  }
}
