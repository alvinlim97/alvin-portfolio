import { Component, OnInit } from '@angular/core';
import * as $ from 'node_modules/jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {
    // tslint:disable-next-line:only-arrow-functions
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $('nav').addClass('bg-white');
        $('.quote').removeClass('quoteHide').addClass('quoteShow');
        $('.navC').removeClass('navC').addClass('navS');
      } else {
        $('nav').removeClass('bg-white');
        $('.quote').removeClass('quoteShow').addClass('quoteHide');
        $('.navS').removeClass('navS').addClass('navC');
      }
    });
  }

  ngOnInit() {
    console.warn();
  }

  toggleNav() {
    const nav = $('#navbarNav');
    if (nav.hasClass('collapse')) {
      nav.removeClass('collapse');
    } else {
      nav.addClass('collapse');
    }
  }
}
