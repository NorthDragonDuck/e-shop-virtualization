import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/common/product";
import { ProductService } from "src/app/services/product.service";
import { CartService } from "src/app/services/cart.service";
import { CartItem } from "src/app/common/cart-item";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  pageNumber: number = 0;
  pageSize: number = 10;
  totalElements: number = 0;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.queryParams.subscribe(params => {
          const keyword = params['keyword'];
          if (keyword) {
              this.searchProducts(keyword);
          }
      });
  }

  searchProducts(keyword: string) {
      this.productService.searchProducts(keyword, this.pageNumber, this.pageSize).subscribe(
          data => {
              this.products = data.content;
              this.pageNumber = data.number;
              this.pageSize = data.size;
              this.totalElements = data.totalElements;
          }
      );
  }

  
}