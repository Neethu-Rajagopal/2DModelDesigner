import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design-side-bar',
  templateUrl: './design-side-bar.component.html',
  styleUrls: ['./design-side-bar.component.scss']
})
export class DesignSideBarComponent implements OnInit {
  selectedSubTab: string = 'System';

  constructor() { }

  ngOnInit(): void {
  }

}
