import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css',
})

export class Main {
  radius = 1000
  words = [
    "About Me", "Education", "Skills", "Projects", "Contacts"
  ].map((word,index,array) => {
    if(index%2 == 0){
      this.radius = 620;
    }
    else{
      this.radius = 600;
    }
    const angle = index*40/array.length-15 ;
    return{
      word,
      transform: `rotate(${angle}deg) translateX(${this.radius}px)`,
    }
  })


}
