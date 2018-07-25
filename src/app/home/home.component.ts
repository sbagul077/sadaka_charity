import { Title } from "@angular/platform-browser";
import { CarousalComponent } from "./../carousal/carousal.component";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",

  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [CarousalComponent]
})
export class HomeComponent implements OnInit {
  constructor(private myTitle: Title) {
    myTitle.setTitle("SADAKA | Charity / Non-profit");
  }

  ngOnInit() {}
}
