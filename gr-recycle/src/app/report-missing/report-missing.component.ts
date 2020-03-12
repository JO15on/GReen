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
  hideNo : boolean = false;

  newDate = Date.now();

  constructor() { }

  ngOnInit() {
  }

  yes(){
    if(this.hide === false){
      this.hide = true;
    }
  }

  no(){
    if(this.hideNo === false){
      this.hideNo = true;
    }
  }

  submit(){
    if(this.hidden === false){
      this.hidden = true;
    }
  }

}
