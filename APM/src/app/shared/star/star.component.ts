import { Component, OnInit, OnChanges, Input } from "@angular/core";

@Component({
  selector: "app-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating: number;

  starWidth: number;

  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;
  }

  constructor() {}

  ngOnInit() {}
}
