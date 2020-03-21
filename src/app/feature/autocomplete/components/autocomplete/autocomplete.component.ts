import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

import { AutocompleteSearchFilterable } from "../../models/autocomplete-search-filterable";
import { AutocompleteService } from "./../../services/autocomplete.service";

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
   * Nested patient form control of autocomplete patient component
   * Instantiate due to strict checks. TypeScript setting. strictPropertyInitialization
   */
  nestedPatientFormControl: FormControl = new FormControl();

  /**
   * Input  of autocomplete patient component
   */
  // tslint:disable-next-line: no-unsafe-any
  @Input()
  set passFormControl(formControlVal: FormControl) {
    console.log(
      "AutocompletePatientComponent -> setPassFormControl -> val",
      formControlVal
    );
    this.nestedPatientFormControl = formControlVal;
  }

  get passFormControl(): FormControl {
    return this.nestedPatientFormControl;
  }
  /**
   * Creates an instance of autocomplete patient component.
   */
  constructor(public autocompleteService: AutocompleteService<T>) {}

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
      "AutocompletePatientComponent -> ngOnInit -> form control",
      this.nestedPatientFormControl
    );

    const options: Observable<T[]> = this.autocompleteService.getCreatedFilterOptions(
      this.passFormControl
    );
  }

  /**
   * Gets display name
   *
   * Only instance methods can be called from Angular html template view.
   */
  getDisplayName();
}
