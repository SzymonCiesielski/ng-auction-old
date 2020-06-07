import { ProductService, Product } from './../shared/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nga-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products: Product[] = [];

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}