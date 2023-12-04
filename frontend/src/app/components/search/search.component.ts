import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  doSearch(value: string) {
    console.log(`value=${value}`);
    // Trim the search string and replace spaces with a delimiter like plus (+)
    const trimmedValue = value.trim().replace(/\s+/g, '+');

    // Navigate to the search route with the trimmed and processed value
    this.router.navigateByUrl(`/products/search/${trimmedValue}`);
  }
}
