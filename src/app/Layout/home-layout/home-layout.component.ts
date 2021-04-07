import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {
  currentPage: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentPage = this.router.url;
    console.log('page:', this.currentPage)
  }

}
