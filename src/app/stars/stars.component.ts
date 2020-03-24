import {Component, Input, OnInit} from '@angular/core';

@Component({
  templateUrl: 'stars.component.html',
  styleUrls: ['./stars.component.scss'],
  selector: 'nga-stars'
})
export class StarsComponent implements OnInit {
  @Input() count = 5;
  @Input() rating = 0;
  stars: boolean[] = [];

  ngOnInit() {
    for (let i = 1; i <= this.count; i++) {
      this.stars.push(i > this.rating);  // wysyła true lub false
    }
  }
}
