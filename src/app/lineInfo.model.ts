export class lineInfo{
    start: number;
    end: number;
    active:boolean;
    width:number;

    constructor(start: number, end: number){
        this.start = start;
        this.end = end;
        this.active = false;
        this.width = 0;
    }
}