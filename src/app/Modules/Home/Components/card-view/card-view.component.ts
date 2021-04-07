import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {

  isDropdownShow: boolean = false;
  selectedIndex: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  moreOptions(index: number) {
    if (index === this.selectedIndex) { this.isDropdownShow = false }
    else { this.isDropdownShow = true; this.selectedIndex = index; }
  }

}
