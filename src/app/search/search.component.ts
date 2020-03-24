import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nga-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  categories: string[] = [];

  ngOnInit() {
  }

}
