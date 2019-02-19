import { Component, OnInit, HostListener } from '@angular/core';
import { RenderDebugInfo } from '@angular/core/src/render/api';
import { DebugContext } from '@angular/core/src/view';
import { IfStmt } from '@angular/compiler';
import { lineInfo } from '../lineInfo.model';

@Component({
  selector: 'app-hori-scroll-line',
  templateUrl: './hori-scroll-line.component.html',
  styleUrls: ['./hori-scroll-line.component.css']
})
export class HoriScrollLineComponent implements OnInit {

  id:number = -1;

  lines : lineInfo[] = [
    new lineInfo(300,900),
    new lineInfo(1100,1700),
    new lineInfo(2200,2800),
    new lineInfo(3300,3900),
    new lineInfo(4300, 4900)
  ];
  
  lineWidth = 0;
  startX = 200;



  currentEnabled = false;

  distCutoff = 800;
  currentLine = 0;
  switchDistance = 100;

  @HostListener('window:scroll', ['$event'])

  onWindowScroll($event) {

    //console.log(this.currentLine);
    console.log("id: " +this.id);

 

    if(window.pageYOffset>=this.lines[this.currentLine].start && window.pageYOffset < this.lines[this.currentLine].end){
      this.lineWidth= (window.pageYOffset - this.lines[this.currentLine].start);
    }
    else if(window.pageYOffset < this.lines[this.currentLine].start){
      this.lineWidth = 0;
      this.lines[this.currentLine].active = false;
    }

    if(window.pageYOffset >= this.lines[this.currentLine].end){
      this.lineWidth = this.lines[this.currentLine].end - this.lines[this.currentLine].start;
    }

    if(this.currentLine < this.lines.length - 1 && window.pageYOffset > this.lines[this.currentLine].end ){
      this.currentLine++;
    }
    else if(this.currentLine > 0 && window.pageYOffset < this.lines[this.currentLine-1].end){
      this.currentLine--;
    }

  
  console.log(window.pageYOffset);
}

setId(id:number){
this.id = id;
}


  constructor() { }

  ngOnInit() {
  }

}
