import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faBell, faQuestionCircle, faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() page: string = '';

  selectedTab: string = 'Configure';
  faBell = faBell;
  faQuestionCircle = faQuestionCircle;
  faUser = faUser;
  navbarToggle: boolean = false;
  @Output() emitTabName = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
