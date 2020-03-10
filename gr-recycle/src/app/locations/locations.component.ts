import { Component, OnInit, Input } from '@angular/core';
import { ICoords } from '../interfaces';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
})
export class LocationsComponent implements OnInit {

  @Input() zoom: number;
  @Input() center: any;
  @Input() options: any;

  constructor(private share: ShareService) { }

  ngOnInit() {
    this.share.getLocation().subscribe((res: ICoords) => {
      this.center = res.coords;
      this.zoom = res.zoom;
    })
  }
}
