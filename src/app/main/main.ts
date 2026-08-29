import {Component, ElementRef, ViewChild} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [
    RouterOutlet,
    RouterLink,
    NgStyle
  ],
  templateUrl: './main.html',
  styleUrl: './main.css',
})

export class Main {
  constructor(private router: Router) { }
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

  //transition properties
  transitionStyle = {
    position: 'fixed',
    background: 'black',
    display: 'block',
    "clip-path": 'polygon(0 100%, 20% 6%, 40% 6%, 40% 0,1000% 0, 1000% 100%)',
    width: '600%',
    height: '100%',
    transition: 'transform 1.78s ease-in-out',
    transform: 'translateX(100%)',
    "z-index": 5,

  }

  async toGo(path:string){
    this.onTransition();
    await this.sleep(1600);
    this.router.navigate([path]);
    this.transitionStyle["transition"] = "transform 0.1s ease";
    this.transitionStyle['transform'] = `translateX(100%)`;

  }
  sleep(ms:number){
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  onTransition(){
    this.transitionStyle = {
      ...this.transitionStyle,
      transition: 'transform 2s ease-in-out',
      transform: 'translateX(-80%)'
    }
  }


}
