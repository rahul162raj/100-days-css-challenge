import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'day-12-css-root',
  templateUrl: './day-12-css.component.html',
  styleUrls: ['./day-12-css.component.less']
})
export class Day12CssComponent {

  onclickRadioBtn(btnIndex: string) {
    var formElement = <HTMLElement>document.getElementsByClassName('active-circle')[0];
    var bgElement = <HTMLElement>document.getElementsByClassName('background-div-1')[0];

    switch (btnIndex) {
      case '1': {
        formElement.style.left = "78px";
        bgElement.style.marginLeft = '0px'
        break;
      }
      case '2': {
        formElement.style.left = "136px";
        bgElement.style.marginLeft = '-320px'
        break;
      }
      case '3': {
        formElement.style.left = "194px";
        bgElement.style.marginLeft = '-640px'
        break;
      }
    }

  }

}
