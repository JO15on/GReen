import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ShareService } from './services/share.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gr-recycle';
  onHome: boolean
  constructor(private _share: ShareService, private cdr: ChangeDetectorRef) {};



  ngOnInit() {
    this._share.getHomeView().subscribe( onHome => {
      this.onHome = onHome
      this.cdr.detectChanges()
    })
  }


};