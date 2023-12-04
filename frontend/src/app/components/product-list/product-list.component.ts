import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  currentCategorySlug: string = '';
  previousCategorySlug: string = '';
  searchMode: boolean = false;

  // Properties for pagination
  thePageNumber: number = 1;
  thePageSize: number = 10;
  theTotalElements: number = 0;
  theTotalPages: number = 0;

  previousKeyword: string = "";

  constructor(private productService: ProductService,
              private cartService: CartService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListProducts();
    }
  }

  handleSearchProducts() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;
    if (this.previousKeyword != theKeyword) {
      this.thePageNumber = 1;
    }
    this.previousKeyword = theKeyword;

    this.productService.searchProductsPaginate(theKeyword, this.thePageNumber - 1, this.thePageSize)
                       .subscribe(this.processResult());
  }

  handleListProducts() {
    const hasCategorySlug: boolean = this.route.snapshot.paramMap.has('category');
    if (hasCategorySlug) {
      this.currentCategorySlug = this.route.snapshot.paramMap.get('category')!;
      if (this.previousCategorySlug != this.currentCategorySlug) {
        this.thePageNumber = 1;
      }
      this.previousCategorySlug = this.currentCategorySlug;

      this.productService.getProductsByCategory(this.currentCategorySlug, this.thePageNumber - 1, this.thePageSize)
                         .subscribe(this.processResult());
    } else {
      this.productService.getProductList(this.thePageNumber - 1, this.thePageSize)
                         .subscribe(this.processResult());
    }
  }

  processResult() {
    return data => {
      this.products = data.content;
      this.thePageNumber = data.number + 1;
      this.thePageSize = data.size;
      this.theTotalElements = data.totalElements;
      this.theTotalPages = data.totalPages; // If using totalPages, ensure it's included in the service's response
    };
  }
  
  addToCart(theProduct: Product) {
    let theCartItem = new CartItem(theProduct.sku, theProduct.name, theProduct.imageUrl, theProduct.unitPrice);
    this.cartService.addToCart(theCartItem);
  }
}
