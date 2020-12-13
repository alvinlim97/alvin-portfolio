import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regional',
  templateUrl: './regional.component.html',
  styleUrls: ['./regional.component.css'],
})
export class RegionalComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  close() {
    this.router.navigateByUrl('/');
  }
}
