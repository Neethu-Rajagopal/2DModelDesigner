import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfigureService } from '@app/Services/configure.service';
import { faBell, faQuestionCircle, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('page') page: string = '';
  selectedTab: string = 'Configure';
  faBell = faBell;
  faQuestionCircle = faQuestionCircle;
  faUser = faUser;
  navbarToggle: boolean = false;
  @Output() emitTabName = new EventEmitter();

  constructor(private configureService: ConfigureService) { }

  ngOnInit(): void {
    this.switchTab('Configure');
  }

  switchTab(tab: string) {
    this.selectedTab = tab;
    this.configureService.configureTabSubject.next({ tabName: this.selectedTab });
  }

}
