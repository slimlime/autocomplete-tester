/* eslint-disable */
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import {
  jsf32,
  getRandomDateWithin,
  rng,
  xoshiro128ss,
  numberRandomiser,
  getMillisecondsFromYears
} from "../feature/autocomplete/utilities/seeder";

@Component({
  selector: "app-folder",
  templateUrl: "./folder.page.html",
  styleUrls: ["./folder.page.scss"]
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get("id");

    const a = 0xf1ea5eed;
    console.log(xoshiro128ss(0xf1ea5eed, 2, 3, 4));
    console.log(xoshiro128ss(10000, 555, 555, 555));

    console.log(xoshiro128ss(20002, 2, 3, 4));

    console.log(xoshiro128ss(15000, 2, 3, 8994));

    console.log(xoshiro128ss(15001, "999992", 3, 4));

    console.log(rng(1));
    console.log(rng(2));
    const min = new Date().getTime() - getMillisecondsFromYears(80);
    const minDate = new Date(min);
    console.log("FolderPage -> ngOnInit -> minDate", minDate);
    const maxDate = new Date();

    var seed = 1337; // any 32-bit integer;
    var rand = jsf32(0xf1ea5eed, seed, seed, seed);
    const aa = numberRandomiser();
    for (var i = 0; i < 20; i++) {
      console.log(rand());
    } // advance 20 times

    for (var i = 0; i < 20; i++) {
      console.log("numRandomiser", aa(), numberRandomiser()());
    } // advance 20 times

    console.log("bbnumRandomiser", aa(), numberRandomiser()());

    console.log("bbnumRandomiser", aa(), numberRandomiser()());

    console.log("bbnumRandomiser", aa(), numberRandomiser()());

    // const filledDateArray = Array.from({length: 20, () => ({})})
    const dates: ReadonlyArray<Date> = Array(20).fill(
      getRandomDateWithin(minDate, maxDate, aa())
    );

    var lol = Array(20);
    for (var i = 0; i < 20; i++) {
      lol[i] = getRandomDateWithin(minDate, maxDate, aa());
    }
    console.log(dates);
    console.log(lol);
  }
}
