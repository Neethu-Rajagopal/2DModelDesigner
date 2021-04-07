import { Component, OnInit } from '@angular/core';
import { ConfigureService } from '@app/Services/configure.service';

@Component({
  selector: 'app-configure-layout',
  templateUrl: './configure-layout.component.html',
  styleUrls: ['./configure-layout.component.scss']
})
export class ConfigureLayoutComponent implements OnInit {
  tabNameSubscription: any;
  tabName: string = 'Configure';

  constructor(private configureService: ConfigureService) { }

  ngOnInit(): void {
    this.tabNameSubscription = this.configureService.configureTabSubject.subscribe(res => {
      this.tabName = res.tabName;
    }, error => { })
  }

  ngOnDestroy() {
    if (this.tabNameSubscription) { this.tabNameSubscription.unsubscribe(); }
  }

}
