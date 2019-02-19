import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-vert-scroll-line',
  templateUrl: './vert-scroll-line.component.html',
  styleUrls: ['./vert-scroll-line.component.css']
})
export class VertScrollLineComponent implements OnInit {

  lineStart = window.innerHeight*0.75;
  lineHeight = this.lineStart;
  topDist = 0;

  aboutLineLength = 0;
  
  
@HostListener('window:scroll', ['$event'])

onWindowScroll($event) {
this.lineHeight= this.lineStart + window.pageYOffset ;
this.topDist = window.pageYOffset;
console.log(window.pageYOffset);

}

@HostListener('window:resize', ['$event'])
onResize(event) {
  this.lineStart = window.innerHeight*0.75;
  this.lineHeight= this.lineStart + window.pageYOffset ;

}

  constructor() { }

  ngOnInit() {
  }

}
