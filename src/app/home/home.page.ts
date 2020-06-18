import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

private videos = [
  {
    imgPath: '../../assets/images/meditate.jpg',
    title: "Happy Meditation"
  },
  {
    imgPath: '../../assets/images/together.jpg',
    title: "Heart to Heart"
  },
  {
    imgPath: '../../assets/images/food.jpg', 
    title: "Food for thought"
  },
  {
    imgPath: '../../assets/images/coffee.jpg',
    title: "What's in your coffee?"
  },
  {
    imgPath: '../../assets/images/nature.jpg',
    title: "Reconnect with Nature"
  },
  {
    imgPath: '../../assets/images/run.jpg',
    title: "Fun to Run"
  }]


@ViewChild('canvas1') canvasEl1 : ElementRef;
@ViewChild('canvas2') canvasEl2 : ElementRef;
@ViewChild('canvas3') canvasEl3 : ElementRef;

constructor() {}

ngAfterViewInit() {
  let canvas1 = this.canvasEl1.nativeElement;
  let canvas2 = this.canvasEl2.nativeElement;
  let canvas3 = this.canvasEl3.nativeElement;

  canvas1.width  	= 100;
  canvas1.height 	= 100;

  canvas2.width  	= 100;
  canvas2.height 	= 100;

  canvas3.width  	= 100;
  canvas3.height 	= 100;

  this.drawCircle(canvas1, Math.PI, "50%");
  this.drawCircle(canvas2, 1.2 * Math.PI, "66%");
  this.drawCircle(canvas3, 0.4 * Math.PI, "20%");


}

drawCircle(canvas, angle, text)
{
  let context = canvas.getContext('2d');

   context.beginPath();
   // x, y, radius, startAngle, endAngle
   context.arc(canvas.width/2, canvas.height/2, 40, 0, 2 * Math.PI);
   context.lineWidth = 1;
   context.strokeStyle = '#ffffff';
   context.stroke();
   context.font = "16px Arial";
   context.fillStyle = "#ffffff"
   context.fillText(text, canvas.width/2-10, canvas.height/2+8);

   context.closePath()

   context.beginPath();
   context.arc(canvas.width/2, canvas.height/2, 40, 0, angle);
   context.lineWidth = 5;
   context.strokeStyle = '#1bd0e1';
   context.stroke();



}

}
