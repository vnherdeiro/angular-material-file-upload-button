import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  template: `
  <app-upload-button [callback]='clog' upload_url='http://localhost:8080/upload'> </app-upload-button>
  `,
  styles: []
})
export class AppComponent {
  title = 'fileUploadFromScratch';


  constructor() {

  }


  clog( arg){
    console.log(arg);
  }


}
