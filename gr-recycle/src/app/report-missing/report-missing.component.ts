import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-report-missing',
  templateUrl: './report-missing.component.html',
  styleUrls: ['./report-missing.component.css']
})
export class ReportMissingComponent implements OnInit {

  @Input()
  hide : boolean = false;
  hidden : boolean = false;

  newDate = Date.now();

  constructor() { }

  ngOnInit() {
  }

  yes(){
    if(hide = false){
      this.hide = true;
    }

  }

  no(){
    if(hidden = false){
      this.hidden = true;
    }
  }

  submit(){

  }

}
