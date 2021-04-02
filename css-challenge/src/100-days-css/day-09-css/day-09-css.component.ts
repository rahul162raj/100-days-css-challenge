import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'day-09-css-root',
  templateUrl: './day-09-css.component.html',
  styleUrls: ['./day-09-css.component.less']
})
export class Day09CssComponent {

  mouseEnter() {
    var formElement = <HTMLElement>document.getElementsByClassName('tooltip')[0];
    formElement.animate([
      // keyframes
      { top: '0px', opacity: 0 },
      { top: '10px', opacity: 1 }
    ], {
      // timing options
      duration: 500,
      easing: 'ease-in-out'
    });
    formElement.style.opacity = '1';
  }

  mouseLeave() {
    var formElement = <HTMLElement>document.getElementsByClassName('tooltip')[0];
    formElement.animate([
      // keyframes
      { top: '10px', opacity: 1 },
      { top: '0px', opacity: 0 }
    ], {
      // timing options
      duration: 500,
      easing: 'ease-in-out'
    });
    formElement.style.opacity = '0';
  }

}
