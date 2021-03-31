import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  collection = [];
  endIndex: number = 100;
  currentIndex: number = 1;

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.currentIndex = Number(this.location.path().split("-")[1]);
  }

  pageChange(newPage: number) {
    this.router.navigate(['/day-' + newPage]);
    this.currentIndex = newPage;
  }

}
