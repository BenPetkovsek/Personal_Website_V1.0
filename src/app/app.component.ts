import { Component, HostListener } from '@angular/core';
import { lineInfo } from './lineInfo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
  .activated{
    color: #9feffc;
  }
  
  `]
})
export class AppComponent {
  
  distCutoff = 800;
  currentEnabled = false;
  fadeAmt = 1;
  lines : lineInfo[] = [
    new lineInfo(300,900),
    new lineInfo(1100,1700),
    new lineInfo(2200,2800),
    new lineInfo(3300,3900),
    new lineInfo(4300, 4900)
  ];
  currentLine = 0;
  switchDistance = 100;

  @HostListener('window:scroll', ['$event'])

  onWindowScroll($event) {

    //this.fadeAmt = (window.pageYOffset - this.lines[this.currentLine].start)/(this.lines[this.currentLine].end- this.lines[this.currentLine].start);
    //console.log(this.lines[this.currentLine].active);

    if(window.pageYOffset >= this.lines[this.currentLine].end){
      this.lines[this.currentLine].active = true;
      
    }

    if(this.currentLine < this.lines.length - 1 && window.pageYOffset >= this.lines[this.currentLine].end){
      this.currentLine++;
    }
    else if(window.pageYOffset < this.lines[this.currentLine].end  ){

      this.lines[this.currentLine].active = false;

      if(this.currentLine > 0){this.currentLine--; }
       
    }


    //sizing current horizontal line
    if(window.pageYOffset>=this.lines[this.currentLine].start && window.pageYOffset < this.lines[this.currentLine].end){
      this.lines[this.currentLine].width= (window.pageYOffset - this.lines[this.currentLine].start);
    }
    else if(window.pageYOffset < this.lines[this.currentLine].start){
      this.lines[this.currentLine].width = 0;
    }

    

  }

  getActive(index){
    return this.lines[index].active;
  }

  getWidth(index:number){
   return this.lines[index].width;
  }

}
