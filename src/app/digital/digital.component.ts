import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.css'],
})
export class DigitalComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  close() {
    this.router.navigateByUrl('/');
  }
}
