import {ChangeDetectorRef, Component} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [
    NgStyle
  ],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  constructor(private cdr: ChangeDetectorRef) {
  }

  vw_to_pix(vw:number){
    return window.innerWidth * vw / 100;
  }
  vh_to_pix(vh:number){
    return window.innerHeight * vh / 100;
  }

  round_center(vw:number, vh:number, width:number, height:number, border:number){
    return [this.vw_to_pix(vw)-(width/2)-border, this.vh_to_pix(vh)-(height/2)-(border)];
  }

  async toMove(){
    await new Promise(resolve => setTimeout(resolve,900))
  }

  //round 1:
  width1 = 200
  heigth1 = 200
  border1 = 35
  border2 = 46
  final_width1 = 1500
  final_heigth1 = 1500


  round1_coord = this.round_center(75,-30,this.width1,this. heigth1,this.border1)
  round2_coord = this.round_center(75,-30,this.width1,this. heigth1,this.border2)
  book = "book-pngblue.png"
  round1Style = {
    width: `${this.width1}px`,
    height: `${this.heigth1}px`,
    'border-radius': '50%',
    border: `solid rgba(12, 121, 154, 0.51) ${this.border1}px`,
    display: 'block',
    position: 'absolute',
    transformOrigin: 'center center',
    transform: 'translate('+this.round1_coord[0]+'px,'+this.round1_coord[1]+'px) scale(1)',
    scale: 1,
    transition: 'scale 1s ease',

  }
  round2Style = {
    width: `${this.width1}px`,
    height: `${this.heigth1}px`,
    'border-radius': '50%',
    border: `solid rgba(12, 121, 154, 0.51) ${this.border2}px`,
    display: 'block',
    position: 'absolute',
    transformOrigin: 'center center',
    transform: 'translate('+this.round1_coord[0]+'px,'+this.round1_coord[1]+'px) scale(1)',
    scale: 1,
    transition: 'scale 1s cubic-bezier(0.25,0.1,0.25,1)',
  }
ngAfterViewInit(){
    requestAnimationFrame(async ()=>{
      this.round1Style = {
        ...this.round1Style,
        transform: 'translate('+this.round1_coord[0]+'px,'+this.round1_coord[1]+'px) scale(14)',
        transition: 'transform 0.9s cubic-bezier(0.2,1,0.45,0.95)',
      };
      await this.toMove()
      this.round2Style = {
        ...this.round2Style,
        transform: 'translate('+this.round2_coord[0]+'px,'+this.round2_coord[1]+'px) scale(9.5)',
        transition: 'transform 0.5s cubic-bezier(0.2,1,0.45,0.95)',
      };
      this.cdr.detectChanges();
    })
}
}
