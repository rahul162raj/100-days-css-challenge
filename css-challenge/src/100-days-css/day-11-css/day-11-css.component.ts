import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'day-11-css-root',
  templateUrl: './day-11-css.component.html',
  styleUrls: ['./day-11-css.component.less']
})
export class Day11CssComponent {

  file: File = null;
  fileName: string = null;
  loading: boolean = false;
  status: string = 'Upload Files';

  onChange(event) {
    this.file = event.target.files[0];
    this.fileName = this.file.name;
  }

  onUploadBtnClick() {
    if (!this.file) {
      var dropZone = <HTMLElement>document.getElementsByClassName('drop-zone')[0];
      var uploadIcon = <HTMLElement>document.getElementsByClassName('upload-icon-initial')[0];
      dropZone.style.border = '1px dashed #F85B5B';
      uploadIcon.style.color = '#F85B5B';
    } else {
      if (this.status === 'Done') {
        this.fileName = null
        this.status = 'Upload Files';
      } else if (this.status === 'Upload Files') {
        var barElement = <HTMLElement>document.getElementsByClassName('bar')[0];
        barElement.animate([
          { transform: 'scaleX(0)' },
          { transform: 'scaleX(1)' }
        ], {
          duration: 3000,
          easing: 'ease-in-out'
        });
        this.status = 'Uploading...'
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.status = 'Done'
        },
          3100);
      }

    }

  }

}
