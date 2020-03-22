import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import {
  getMillisecondsFromYears,
  getRandomDateWithin,
  jsf32,
  numberRandomiser,
  rng,
  xoshiro128ss
} from "../feature/autocomplete/utilities/seeder";
import { AutocompleteComponent } from "./../feature/autocomplete/components/autocomplete/autocomplete.component";
import { AutocompleteSearchFilterable } from "./../feature/autocomplete/models/autocomplete-search-filterable";
import { AutocompleteService } from "./../feature/autocomplete/services/autocomplete.service";
import { getBespokeAutocompleteServiceInjected } from "./../feature/autocomplete/utilities/angular-injectables/injectable";

/* eslint-disable */
const someObjects: AutocompleteSearchFilterable[] = [{ name: "hi" }];

// const MY_SERVICE_TOKEN = new InjectionToken<
//   AutocompleteService<AutocompleteSearchFilterable>
// >("Manually constructed", {
//   providedIn: "root",
//   factory: () =>
//     new AutocompleteService<AutocompleteSearchFilterable>(
//       inject(someObjects, a => {
//         console.log("inject needs a function huh", a);
//       })
//     )
// });

@Component({
  selector: "app-folder",
  templateUrl: "./folder.page.html",
  styleUrls: ["./folder.page.scss"]
})
export class FolderPage implements OnInit {
  // @ViewChild("appAutocomplete") appAutocomplete: AutocompleteComponent<
  //   AutocompleteSearchFilterable
  // >;
  /**
   * Folder  of folder page
   */
  public folder: string;
  /**
   * Form control of folder page
   */
  public formControl = new FormControl();
  /**
   * Autocomplete service of folder page
   */
  public autocompleteService: AutocompleteService<AutocompleteSearchFilterable>;

  constructor(private readonly activatedRoute: ActivatedRoute) {
    console.log("FolderPage -> constructor -> activatedRoute", activatedRoute);
    this.autocompleteService = getBespokeAutocompleteServiceInjected();
    // const someFactory = () => { return new AutocompleteService<AutocompleteSearchFilterable>(someObjects) }
    //   const lolInjector = Injector.create({
    //     providers: [{ provide: AutocompleteService, useValue: someObjects, useFactory: someFactory }]
    //   });
    //   const someInjectedGetToken = lolInjector.get(MY_SERVICE_TOKEN);
    //   console.log(
    //     "FolderPage -> constructor -> someInjectedGetToken",
    //     someInjectedGetToken
    //   );
    console.log("end constructor");
  }

  ngOnInit() {
    console.log("FolderPage -> ngOnInit -> ngOnInit");
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
    console.log(rng(1)());
    console.log(rng(2)());
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

    console.log("FolderPage -> randomDateStuff -> dates", dates);
    console.log("FolderPage -> randomDateStuff -> lol", lol);

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

  getRandomisedSeedOptions() {}
}
