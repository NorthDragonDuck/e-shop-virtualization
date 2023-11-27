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

  getProductListPaginate(thePage: number, 
                         thePageSize: number, 
                         theCategoryId: number): Observable<GetResponseProducts> {

    // need to build URL based on category id, page and size 
    const searchUrl = `${this.baseUrl}/search/findByCategorySlug?slug=${theCategoryId}`
                    + `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseProducts>(searchUrl);
  }


  getProductList(): Observable<Product[]> {

    return this.httpClient.get<GetResponseProducts>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }

  searchProducts(theKeyword: string): Observable<Product[]> {

    // need to build URL based on the keyword 
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

    return this.getProducts(searchUrl);
  }

  searchProductsPaginate(thePage: number, 
                        thePageSize: number, 
                        theKeyword: string): Observable<GetResponseProducts> {

    // need to build URL based on keyword, page and size 
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`
                    + `&page=${thePage}&size=${thePageSize}`;
    
    return this.httpClient.get<GetResponseProducts>(searchUrl);
  }



  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(map(response => response._embedded.products));
  }

  getProductCategories(): Observable<ProductCategory[]> {
  
    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.categories)
      );
  }

  getProductsByCategoryName(categorySlug: string, page: number, size: number): Observable<GetResponseProducts> {
    const searchUrl = `${this.categoryUrl}/${categorySlug}`;
    return this.httpClient.get<GetResponseProducts>(searchUrl)
  }

}

interface GetResponseProducts {
  _embedded: {
    products: Product[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}

interface GetResponseProductCategory {
  _embedded: {
    categories: ProductCategory[]; // This key needs to match the one in the JSON response
  }
}