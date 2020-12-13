import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as $ from "node_modules/jquery";

@Component({
  selector: "app-block",
  templateUrl: "./block.component.html",
  styleUrls: ["./block.component.css"],
})
export class BlockComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goTo(route) {
    console.warn(route);
    this.router.navigateByUrl(route);
    $("body,html").animate(
      {
        scrollTop: $("#xd").offset().top,
      },
      800
    );
  }
}
