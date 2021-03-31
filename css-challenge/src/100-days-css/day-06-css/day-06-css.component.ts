import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'day-06-css-root',
  templateUrl: './day-06-css.component.html',
  styleUrls: ['./day-06-css.component.less']
})
export class Day06CssComponent {

  mouseEnter(item: string) {
    var formElement = <HTMLElement>document.getElementsByClassName(item)[0];
    formElement.style.visibility = 'visible';
    formElement.animate([
      // keyframes
      { transform: 'translateY(10px)', opacity: 0 },
      { transform: 'translateY(0px)', opacity: 1 }
    ], {
      // timing options
      duration: 500,
      easing: 'ease'
    });
  }

  mouseLeave(item: string) {
    var formElement = <HTMLElement>document.getElementsByClassName(item)[0];
    formElement.style.visibility = 'hidden';
  }
}
