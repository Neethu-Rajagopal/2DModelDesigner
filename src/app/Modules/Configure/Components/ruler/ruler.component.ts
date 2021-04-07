import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruler',
  templateUrl: './ruler.component.html',
  styleUrls: ['./ruler.component.scss']
})
export class RulerComponent implements OnInit {
  @Input() alignment: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}