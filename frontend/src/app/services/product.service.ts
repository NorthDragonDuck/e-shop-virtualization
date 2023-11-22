import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product, Page } from '../common/product';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private baseUrl = "http://backend:8080/api/products";
  private categoryUrl = "http://backend:8080/api/category";

  constructor(private httpClient: HttpClient) { }

  getProduct(theProductId: number): Observable<Product> {
    const productUrl = `${this.baseUrl}/${theProductId}`;
    return this.httpClient.get<Product>(productUrl);
  }

  getProductListPaginate(
    thePage: number,
    thePageSize: number,
    theCategoryId: number
  ): Observable<Product[]> {
    const randomProductsUrl =
      `${this.baseUrl}` + `?page=${thePage}&size=${thePageSize}`;
    return this.httpClient
      .get<any>(randomProductsUrl)
      .pipe(map((response) => response._embedded.products));
  }

  // Function to get a list of products by category
  getProductListByCategory(
    categoryName: string,
    thePage: number,
    thePageSize: number
  ): Observable<GetResponseProducts> {
    const categoryProductsUrl =
      `${this.categoryUrl}/${categoryName}` +
      `?page=${thePage}&size=${thePageSize}`;
    return this.httpClient.get<GetResponseProducts>(categoryProductsUrl);
  }

  // getProductListPaginate(thePage: number,
  //                        thePageSize: number,
  //                        theCategoryId: number): Observable<GetResponseProducts> {
  //   const searchUrl = `${this.baseUrl}`
  //                   + `&page=${thePage}&size=${thePageSize}`;
  //   return this.httpClient.get<GetResponseProducts>(searchUrl);
  // }

  getProductList(theCategoryId: number): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/products`;
    return this.httpClient.get<any>(searchUrl).pipe(
      // Adjust the map operation according to the actual response structure
      map((response) => response._embedded.products) // Assuming the backend returns the products in a '_embedded.products' field
    );
  }

  searchProducts(keyword: string, page: number, size: number): Observable<Page<Product>> {
    const searchUrl = `${this.baseUrl}/search?name=${encodeURIComponent(keyword)}&page=${page}&size=${size}`;
    return this.httpClient.get<Page<Product>>(searchUrl);
  }


  // Modify this method as well
  searchProductsPaginate(
    thePage: number,
    thePageSize: number,
    theKeyword: string
  ): Observable<GetResponseProducts> {
    // Ensure the keyword is URL-encoded
    const encodedKeyword = encodeURIComponent(theKeyword);
    const searchUrl =
      `${this.baseUrl}/search/name=${encodedKeyword}` +
      `&page=${thePage}&size=${thePageSize}`;
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map((response) => {
        // Map the response to the expected GetResponseProducts structure
        return {
          _embedded: {
            products: response._embedded.products,
          },
          page: response.page,
        };
      }),
      catchError(this.handleError)
    );
  }


  getProductCategories(): Observable<ProductCategory[]> {
    // The response is a direct list so we don't need to map to an _embedded object
    return this.httpClient.get<ProductCategory[]>(this.categoryUrl);
  }

  private handleError(error: HttpErrorResponse) {
    // Return an observable with a user-facing error message
    console.error('An error occurred:', error.error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
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
