import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  selectedIndex: number = -1;
  array: any = [{
    name: 'My first digital Twin - Screen 1', order: 1, children: [
      {
        name: 'My first digital Twin - Screen 1.1', order: 1,
        children: [
          { name: 'My first digital Twin - Screen 1.1.1', order: 1, children: [], date: '2 hours ago' },
          { name: 'My first digital Twin - Screen 1.1.2', order: 1, children: [], date: '2 hours ago' },
          { name: 'My first digital Twin - Screen 1.1.3', order: 1, children: [], date: '2 hours ago' }], date: '2 hours ago'
      },
      { name: 'My first digital Twin - Screen 1.2', order: 1, children: [], date: '2 hours ago' },
      { name: 'My first digital Twin - Screen 1.3', order: 1, children: [], date: '2 hours ago' }], date: '2 hours ago'
  },
  {
    name: 'My first digital Twin - Screen 2', order: 1, children: [
      { name: 'My first digital Twin - Screen 2.1', order: 1, children: [], date: '2 hours ago' }], date: '2 hours ago'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
