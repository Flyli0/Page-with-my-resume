import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [
    NgStyle
  ],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About{
  constructor(private cdr: ChangeDetectorRef) {}
  backimage = "p3rbb.jpg"
  style = {
    transform: 'scale(1.4)',
  }

  top = 0;
  left = 0;
  dx = 0.01;
  dy = 0.01;
  forward_x = true;
  forward_y = true;
  moveImage(){

    if(this.top+this.dy > 100 || this.top-this.dy < -100) {
      this.forward_y = !this.forward_y;
    }
    if (this.left+this.dx > 50 || this.left-this.dx < -50) {
      this.forward_x = !this.forward_x;
    }

    if (this.forward_y){
      this.top += this.dy;
    }
    else{
      this.top -= this.dy;
    }
    if(this.forward_x){
      this.left += this.dx;
    }
    else{
      this.left -= this.dx;
    }


    this.dy += (Math.random()-0.5)*0.01;
    this.dx += (Math.random()-0.5)*0.01;

    this.style = {
      ...this.style,
      transform: `translate(${this.left}px, ${this.top}px)   scale(1.05)`
    };
    this.cdr.detectChanges();
    requestAnimationFrame(()=>this.moveImage());
  }

  counter = 0;
  ngOnInit(){
    this.moveImage()
  }

}
