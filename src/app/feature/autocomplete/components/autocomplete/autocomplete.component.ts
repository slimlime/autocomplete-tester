import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
  Inject
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

import { AutocompleteSearchFilterable } from "../../models/autocomplete-search-filterable";
import { AutocompleteService } from "./../../services/autocomplete.service";
import {
  getDisplayName,
  isSearchTextFoundWithinOption
} from "./../../utilities/autocomplete-utility/autocomplete-utility";

// const someObjects: AutocompleteSearchFilterable[] = [{ name: "hi" }];
/**
 * Component
 */
@Component({
  selector: "app-autocomplete",
  templateUrl: "./autocomplete.component.html",
  styleUrls: ["./autocomplete.component.scss"]
})
export class AutocompleteComponent<T extends AutocompleteSearchFilterable>
  implements OnInit, OnChanges {
  /**
   * Nested form control of autocomplete component
   * Instantiate due to strict checks. TypeScript setting. strictPropertyInitialization
   */
  nestedFormControl: FormControl = new FormControl();

  /**
   * Input  of autocomplete component
   * Pass the form control
   */
  // tslint:disable-next-line: no-unsafe-any
  @Input()
  set passFormControl(formControlVal: FormControl) {
    console.log(
      "AutocompleteComponent -> setPassFormControl -> val",
      formControlVal
    );
    this.nestedFormControl = formControlVal;
  }

  get passFormControl(): FormControl {
    return this.nestedFormControl;
  }
  /**
   * Creates an instance of autocomplete component.
   */
  constructor(public autocompleteService: AutocompleteService<T>) {
    console.log("constructor -> autocompleteService", autocompleteService);
  }

  /**
   * on changes
   * @param changes Ch-ch-ch-ch-changes
   *
   */
  ngOnChanges(changes: SimpleChanges): void {
    // tslint:disable-next-line: forin no-for-in
    for (const propName in changes) {
      const chng: SimpleChange = changes[propName];
      const cur: string = JSON.stringify(chng.currentValue);
      const prev: string = JSON.stringify(chng.previousValue);
      console.log(`propName: currentValue = cur, previousValue = prev`);
      console.log(
        `chng cur prev ${chng.toString()} ${cur} ${prev}propName: currentValue = cur, previousValue = prev`
      );
    }

    for (const propName of Object.keys(changes)) {
      const chng: SimpleChange = changes[propName];
      const cur: string = JSON.stringify(chng.currentValue);
      const prev: string = JSON.stringify(chng.previousValue);
      console.log(`propName: currentValue = cur, previousValue = prev`);
      console.log(
        `chng cur prev ${chng.toString()} ${cur} ${prev}propName: currentValue = cur, previousValue = prev`
      );
    }
  }
  /**
   * on init
   */
  ngOnInit(): void {
    console.log(
      "AutocompleteComponent -> ngOnInit -> form control",
      this.nestedFormControl.value
    );

    const options: Observable<T[]> = this.autocompleteService.getCreatedFilterOptions(
      this.passFormControl,
      getDisplayName
    );
  }
}
