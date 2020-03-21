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
    this.randomDateStuff();
  }

  /**
   *
   *
   *
   *
   *
   *
   *
   * ...
   */
  // tslint:disable
  randomDateStuff(): void {
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
    let seed = 1337; // Any 32-bit integer;
    let rand = jsf32(0xf1ea5eed, seed, seed, seed);
    const runMyNumRandomiser: () => number = numberRandomiser();
    // const filledDateArray = Array.from({length: 20, () => ({})})
    const dates: ReadonlyArray<Date> = Array(20).fill(
      getRandomDateWithin(minDate, maxDate, runMyNumRandomiser())
    );
    const lol = Array(20);
    for (let i = 0; i < 20; i++) {
      lol[i] = getRandomDateWithin(minDate, maxDate, runMyNumRandomiser());
    }
    console.log(dates);
    console.log(lol);
    const datesArrayFrom = Array.from({ length: 20 }, u =>
      getRandomDateWithin(minDate, maxDate, runMyNumRandomiser())
    );
    console.log(
      "FolderPage -> randomDateStuff -> datesArrayFrom",
      datesArrayFrom
    );

    // Works
    const run = xoshiro128ss(0xf1ea5eed, seed, seed, seed);
    const datesArrayFromXoshiro = Array.from({ length: 20 }, u =>
      getRandomDateWithin(minDate, maxDate, run())
    );
    console.log(
      "FolderPage -> randomDateStuff -> datesArrayFromXoshiro",
      datesArrayFromXoshiro
    );

    // Does not work
    const datesArrayFromXoshiroNotRunnable = Array.from({ length: 20 }, u =>
      getRandomDateWithin(
        minDate,
        maxDate,
        xoshiro128ss(0xf1ea5eed, seed, seed, seed)()
      )
    );
    console.log(
      "FolderPage -> randomDateStuff -> datesArrayFromXoshiro",
      datesArrayFromXoshiroNotRunnable
    );
  }
  // tslint:enable
}
