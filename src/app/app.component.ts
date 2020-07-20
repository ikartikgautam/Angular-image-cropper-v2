import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selectedImg : any;

  preview(file) {
    // console.log(file[0])
    const reader = new FileReader();
    reader.readAsDataURL(file[0])
    reader.onload = _event => {
      this.selectedImg = reader.result;
    }
  }

}
