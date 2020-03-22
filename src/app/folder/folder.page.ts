import {
  Component,
  InjectionToken,
  OnInit,
  Injector,
  StaticProvider
} from "@angular/core";
import { inject } from "@angular/core/testing";
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
import { AutocompleteSearchFilterable } from "./../feature/autocomplete/models/autocomplete-search-filterable";
import { AutocompleteService } from "./../feature/autocomplete/services/autocomplete.service";

/* eslint-disable */
const someObjects: AutocompleteSearchFilterable[] = [{ name: "hi" }];

const MY_SERVICE_TOKEN = new InjectionToken<
  AutocompleteService<AutocompleteSearchFilterable>
>("Manually constructed", {
  providedIn: "root",
  factory: () =>
    new AutocompleteService<AutocompleteSearchFilterable>(
      inject(someObjects, a => {
        console.log("inject needs a function huh", a);
      })
    )
});

const myToken = new InjectionToken<
  AutocompleteService<AutocompleteSearchFilterable>
>("someTest");

const myACServiceTokenTestObjectsProvider: StaticProvider = {
  provide: myToken,
  useValue: someObjects
};

const injectorOptionsObj: {
  providers: StaticProvider[];
  parent?: Injector;
  name?: string;
} = {
  providers: [myACServiceTokenTestObjectsProvider]
};
const injector = Injector.create(injectorOptionsObj);
console.log("injector", injector);
const testGet = injector.get(myToken);
console.log("testGet", testGet);
console.log("FolderPage -> testGet", testGet);

@Component({
  selector: "app-folder",
  templateUrl: "./folder.page.html",
  styleUrls: ["./folder.page.scss"]
})
export class FolderPage implements OnInit {
  public folder: string;
  public formControl = new FormControl();

  constructor(private readonly activatedRoute: ActivatedRoute) {
    // const someFactory = () => { return new AutocompleteService<AutocompleteSearchFilterable>(someObjects) }
    //   const lolInjector = Injector.create({
    //     providers: [{ provide: AutocompleteService, useValue: someObjects, useFactory: someFactory }]
    //   });
    //   const someInjectedGetToken = lolInjector.get(MY_SERVICE_TOKEN);
    //   console.log(
    //     "FolderPage -> constructor -> someInjectedGetToken",
    //     someInjectedGetToken
    //   );
  }

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
