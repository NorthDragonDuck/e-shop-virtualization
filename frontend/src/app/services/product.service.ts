import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';
  private categoryUrl = 'http://localhost:8080/api/category';

  constructor(private httpClient: HttpClient) { }

  getProduct(theProductId: number): Observable<Product> {
    const productUrl = `${this.baseUrl}/${theProductId}`;
    return this.httpClient.get<Product>(productUrl);
  }
  
  getProductListPaginate(thePage: number, 
                          thePageSize: number, 
                          theCategoryId: number): Observable<Product[]> {
    const randomProductsUrl = `${this.baseUrl}`
                            + `?page=${thePage}&size=${thePageSize}`;
    return this.httpClient.get<any>(randomProductsUrl)
                          .pipe(map(response => response._embedded.products));
  }

  // Function to get a list of products by category
  getProductListByCategory(categoryName: string, thePage: number, thePageSize: number): Observable<GetResponseProducts> {
    const categoryProductsUrl = `${this.categoryUrl}/${categoryName}`
                              + `?page=${thePage}&size=${thePageSize}`;
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
    return this.httpClient.get<any>(searchUrl)
      .pipe(
        // Adjust the map operation according to the actual response structure
        map(response => response._embedded.products) // Assuming the backend returns the products in a '_embedded.products' field
      );
  }

  searchProducts(theKeyword: string): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;
    return this.httpClient.get<any>(searchUrl)
      .pipe(
        // Adjust the map operation according to the actual response structure
        map(response => response.content) // Assuming the backend returns the products in a 'content' field
      );
  }

  // Modify this method as well
  searchProductsPaginate(thePage: number, 
                         thePageSize: number, 
                         theKeyword: string): Observable<GetResponseProducts> {
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`
                    + `&page=${thePage}&size=${thePageSize}`;
    return this.httpClient.get<any>(searchUrl)
      .pipe(
        // Adjust the map operation according to the actual response structure
        map(response => {
          // Map the response to the expected GetResponseProducts structure
          return {
            _embedded: {
              products: response.content // Again, assuming 'content' field
            },
            page: response.page // Assuming the backend returns pagination info in a 'page' field
          };
        })
      );
  }

  getProductCategories(): Observable<ProductCategory[]> {
    // The response is a direct list so we don't need to map to an _embedded object
    return this.httpClient.get<ProductCategory[]>(this.categoryUrl);
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
