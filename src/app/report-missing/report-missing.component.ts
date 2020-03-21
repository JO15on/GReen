import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-report-missing',
  templateUrl: './report-missing.component.html',
  styleUrls: ['./report-missing.component.css']
})
export class ReportMissingComponent implements OnInit {

  @Input()
  hidden : boolean = false;
  step: string = 'start';

  reportForm : FormGroup;
  newDate = Date.now();

  constructor(private fb : FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.reportForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required]
    });
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
