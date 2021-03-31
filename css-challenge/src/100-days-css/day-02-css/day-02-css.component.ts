import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'day-02-css-root',
  templateUrl: './day-02-css.component.html',
  styleUrls: ['./day-02-css.component.less']
})
export class Day02CssComponent implements OnInit {

  isButtonClicked: boolean = true;

  ngOnInit(): void {
  }

  public onClickIcon() {
    this.isButtonClicked = !this.isButtonClicked;
  }

}
