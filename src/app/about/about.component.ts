import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  constructor(private myTitle: Title) {
    myTitle.setTitle("About | Charity / Non-profit");
  }

  ngOnInit() {}
}
