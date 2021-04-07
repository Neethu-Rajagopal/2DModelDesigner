import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design-inspector',
  templateUrl: './design-inspector.component.html',
  styleUrls: ['./design-inspector.component.scss']
})
export class DesignInspectorComponent implements OnInit {
  inspectorTab: string = 'Design';

  constructor() { }

  ngOnInit(): void {
  }

}
