import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';
import { ActivatedRoute } from '@angular/router';
import { timeoutWith } from 'rxjs/operators';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  currentCategorySlug: string = '';  // Use slug instead of ID
  previousCategorySlug: string = ''; // Track the previous slug for optimization
  searchMode: boolean = false;

  // New properties for pagination
  thePageNumber: number = 1;
  thePageSize: number = 5;
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

  updatePageSize(pageSize: number) {
    this.thePageSize = pageSize;
    this.thePageNumber = 1;
    this.listProducts();
  }

  processResult() {
    return data => {
      this.products = data.content;
      this.thePageNumber = data.number + 1; // Spring Data REST pages are zero-based
      this.thePageSize = data.size;
      this.theTotalElements = data.totalElements;
      // If you want to use totalPages, make sure it's included in the service's interface
      this.theTotalPages = data.totalPages;
    };
  }
  

  addToCart(theProduct: Product) {
    let theCartItem = new CartItem(theProduct.sku, theProduct.name, theProduct.imageUrl, theProduct.unitPrice);
    this.cartService.addToCart(theCartItem);
  }
}
