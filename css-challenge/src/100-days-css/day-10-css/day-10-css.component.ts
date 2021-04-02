import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'day-10-css-root',
  templateUrl: './day-10-css.component.html',
  styleUrls: ['./day-10-css.component.less']
})
export class Day10CssComponent {

  onClickCancelBtn() {
    var formElement = <HTMLElement>document.getElementsByClassName('card-profile')[0];
    var backgroundImgElement = <HTMLElement>document.getElementsByClassName('background-image')[0];
    var backgroundClrElement = <HTMLElement>document.getElementsByClassName('background-color')[0];
    var cancelButtonElement = <HTMLElement>document.getElementsByClassName('cancel-button')[0];
    var profileElement = <HTMLElement>document.getElementsByClassName('profile-picture')[0];
    backgroundImgElement.animate([
      { top: '0px' },
      { top: '-160px' }
    ], {
      duration: 1400,
      easing: 'ease-out',
      fill: 'forwards'
    });
    backgroundClrElement.animate([
      { top: '160px' },
      { top: '360px' }
    ], {
      duration: 1400,
      easing: 'ease-in-out',
      fill: 'forwards'
    });
    profileElement.animate([
      { top: '115px' },
      { top: '-115px' }
    ], {
      duration: 700,
      easing: 'ease-in-out',
      fill: 'forwards'
    });
    cancelButtonElement.animate([
      { top: '12px' },
      { top: '-52px' }
    ], {
      duration: 400,
      easing: 'ease-in-out',
      fill: 'forwards'
    });
  }

  onClickAddBtn() {
    var formElement = <HTMLElement>document.getElementsByClassName('card-profile')[0];
    formElement.style.opacity = '1';
    formElement.style.zIndex = '2';
    var backgroundImgElement = <HTMLElement>document.getElementsByClassName('background-image')[0];
    var backgroundClrElement = <HTMLElement>document.getElementsByClassName('background-color')[0];
    var cancelButtonElement = <HTMLElement>document.getElementsByClassName('cancel-button')[0];
    var profileElement = <HTMLElement>document.getElementsByClassName('profile-picture')[0];
    backgroundImgElement.animate([
      { top: '-160px' },
      { top: '0px' }
    ], {
      duration: 600,
      easing: 'ease-out',
      fill: 'forwards'
    });
    backgroundClrElement.animate([
      { top: '360px' },
      { top: '160px' }
    ], {
      duration: 600,
      easing: 'ease-in-out',
      fill: 'forwards'
    });
    profileElement.animate([
      { top: '-155px' },
      { top: '115px' }
    ], {
      duration: 900,
      easing: 'ease-in-out',
      fill: 'forwards'
    });
    cancelButtonElement.animate([
      { top: '-152px' },
      { top: '12px' }
    ], {
      duration: 1200,
      easing: 'ease-in-out',
      fill: 'forwards'
    });
  }

}
