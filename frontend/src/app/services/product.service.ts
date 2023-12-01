import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../common/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://vhost1.localhost/api/products';

  private categoryUrl = 'http://vhost1.localhost/api/categories';

  constructor(private httpClient: HttpClient) { }

  getProduct(theProductSku: string): Observable<Product> {

    // need to build URL based on product id
    const productUrl = `${this.baseUrl}/${theProductSku}`;

    return this.httpClient.get<Product>(productUrl);
  }

  


  getProductList(thePage: number, thePageSize: number): Observable<GetResponseProducts> {
    const searchUrl = `${this.baseUrl}?page=${thePage}&size=${thePageSize}`;
    return this.httpClient.get<GetResponseProducts>(searchUrl);
  }
  

  searchProductsPaginate(theKeyword: string, thePage: number, thePageSize: number): Observable<GetResponseProducts> {
    const searchUrl = `${this.baseUrl}/search/${theKeyword}?page=${thePage}&size=${thePageSize}`;
    return this.httpClient.get<GetResponseProducts>(searchUrl);
  }


  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient.get<ProductCategory[]>(this.categoryUrl);
  }

  getProductsByCategory(category: string, page: number, size: number): Observable<GetResponseProducts> {
    const searchUrl = `${this.baseUrl}/by-category/${category}?page=${page}&size=${size}`;
    return this.httpClient.get<GetResponseProducts>(searchUrl)
  }

}

interface GetResponseProducts {
  content: Product[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

interface GetResponseProductCategory {
  _embedded: {
    categories: ProductCategory[]; // This key needs to match the one in the JSON response
  }
}