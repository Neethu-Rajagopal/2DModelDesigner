import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-twinaction',
  templateUrl: './twinaction.component.html',
  styleUrls: ['./twinaction.component.scss']
})
export class TwinactionComponent implements OnInit {
  @Input('isDropdownShow') isShow: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
