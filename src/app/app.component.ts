import { Component } from '@angular/core';
import * as $ from 'node_modules/jquery';
import { Banner } from './Shared-Component/banner/banner.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'akron';

  bConfig: Banner = {
    text: 'Welcome to my Portfolio, I am Alvin Lim. It is nice to meet you!',
    class: 'caption-left',
  };
  constructor() {
    // tslint:disable-next-line:only-arrow-functions
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $('nav').addClass('bg-white');
        $('.nottoShow').removeClass('nottoShow').addClass('toShow');
      } else {
        $('nav').removeClass('bg-white');
        $('.toShow').removeClass('toShow').addClass('nottoShow');
      }
    });
  }

  toTop() {
    $('body,html').animate(
      {
        scrollTop: $('#top').offset().top,
      },
      800
    );
  }
}
