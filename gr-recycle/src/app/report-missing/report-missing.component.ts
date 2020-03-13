import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-report-missing',
  templateUrl: './report-missing.component.html',
  styleUrls: ['./report-missing.component.css']
})
export class ReportMissingComponent implements OnInit {

  @Input()
  hidden : boolean = false;
  step: string = 'start';


  newDate = Date.now();

  constructor() { }

  ngOnInit() {
  }

  yes(){
    this.step = 'start-yes';
  }

  no(){
    this.step = 'start-no';
  }

  noDate(){
    this.step = 'end-no';
  }

  yesDate() {
    this.step = 'end-yes';
  }

  submit(){
    this.step = 'end';
  }

}
