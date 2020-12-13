import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() bConfig: any;
  constructor() {}

  ngOnInit() {
    console.log(this.bConfig);
  }
}
