import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() rating: number;
  @Input() private starCount: number;

  ratingArr = [];

  constructor() {}

  ngOnInit(): void {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }

  showIcon(index: number): string {
    const index1 = index;
    const index2 = index1 + 0.5;
    if (this.rating >= index1 && this.rating !== index2) {
      return 'star';
    } else if (this.rating > index1 && this.rating === index2) {
      return 'star_half';
    } else {
      return 'star_border';
    }
  }
}
