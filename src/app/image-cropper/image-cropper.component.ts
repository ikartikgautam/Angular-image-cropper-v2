import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import Cropper from 'cropperjs';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss']
})
export class ImageCropperComponent implements OnInit {


  @ViewChild("image", { static: false })
  public imageElement: ElementRef;

  @Input("src")
  public imageSource: string;

  public imageDestination: string;
  public cropper: Cropper;

  public constructor() {
    this.imageDestination = "";
  }

  public ngOnInit(): void {
  }

  public ngAfterViewInit() {
    this.cropper = new Cropper(this.imageElement.nativeElement, {
      zoomable: false,
      scalable: false,
      aspectRatio: 1,
      crop: () => {
        const canvas = this.cropper.getCroppedCanvas();
        this.imageDestination = canvas.toDataURL("image/png")
      }
    });
  }

  ngOnChanges() {
    if (this.imageSource != null || this.imageSource != undefined)
      console.log(this.cropper.replace(this.imageSource))
  }

  export() {
    const canvas = this.cropper.getCroppedCanvas();
    console.log(canvas.toDataURL())
  }

}
