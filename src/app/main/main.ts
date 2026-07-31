import {Component, ElementRef, ViewChild} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './main.html',
  styleUrl: './main.css',
})

export class Main {
  radius = 1000
  links = ["about","education","skills","projects","contacts"];
  words = [
    "About Me", "Education", "Skills", "Projects", "Contacts"
  ].map((word,index,array) => {
    if(index%2 == 0){
      this.radius = 43;
    }
    else{
      this.radius = 41;
    }
    const angle = index*40/array.length-15 ;
    return{
      word,
      transform: `rotate(${angle}deg) translateX(${this.radius}vw)`,
      RouterLink: `${this.links[index]}`
    }
  })


  @ViewChild('bgVideo')
  video!: ElementRef<HTMLVideoElement>;

  onLoaded() {
    const v = this.video.nativeElement;

    console.log('muted before:', v.muted);

    v.muted = true;
    v.defaultMuted = true;

    v.play().catch(console.error);

    console.log('muted after:', v.muted);
  }
}
