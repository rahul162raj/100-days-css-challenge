import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'day-07-css-root',
  templateUrl: './day-07-css.component.html',
  styleUrls: ['./day-07-css.component.less']
})
export class Day07CssComponent {

  isOptionClicked = false;
  isSearchBtnClicked = false;

  onClickMenuIcon() {
    var formElement = <HTMLElement>document.getElementsByClassName('card-dashboard')[0];
    if (this.isOptionClicked) {
      formElement.style.transform = 'translate3d(0px, 0, 0)';
      this.isOptionClicked = false;
      console.log('false')
    } else {
      formElement.style.transform = 'translate3d(150px, 0, 0)';
      this.isOptionClicked = true;
      console.log('true')
    }
  }

  onClickSearchIcon() {
    var formElement = <HTMLElement>document.getElementsByClassName('search-bar')[0];
    if (this.isSearchBtnClicked) {
      formElement.style.transform = 'translate3d(10px, 0, 0)';
      formElement.style.opacity = '0';
      formElement.style.zIndex = '0';
      this.isSearchBtnClicked = false;
    } else {
      formElement.style.transform = 'translate3d(0px, 0, 0)';
      formElement.style.opacity = '1';
      formElement.style.zIndex = '2';
      this.isSearchBtnClicked = true;
    }
  }

}
