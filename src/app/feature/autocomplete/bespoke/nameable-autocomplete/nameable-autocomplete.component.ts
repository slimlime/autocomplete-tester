import { getBespokeAutocompleteServiceInjected } from "./../../utilities/angular-injectables/injectable";
import { AutocompleteService } from "./../../services/autocomplete.service";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import {
  Component,
  OnInit,
  Input,
  Inject,
  SimpleChanges,
  SimpleChange,
  OnChanges
} from "@angular/core";

import { AutocompleteSearchFilterable } from "../../models/autocomplete-search-filterable";
import { AutocompleteComponent } from "./../../components/autocomplete/autocomplete.component";
import { getDisplayName } from "../../utilities/autocomplete-utility/autocomplete-utility";

/**
 * Component
 */
@Component({
  selector: "app-nameable-autocomplete",
  templateUrl: "./nameable-autocomplete.component.html",
  styleUrls: ["./nameable-autocomplete.component.scss"]
})
export class NameableAutocompleteComponent
  implements
    OnInit,
    OnChanges,
    AutocompleteComponent<AutocompleteSearchFilterable> {
  /**
   * Nested form control of autocomplete component
   * Instantiate due to strict checks. TypeScript setting. strictPropertyInitialization
   */
  nestedFormControl: FormControl;

  /**
   * Input  of autocomplete component
   * Pass the form control
   */
  // tslint:disable-next-line: no-unsafe-any
  @Input()
  set passFormControl(formControlVal: FormControl) {
    console.log(
      "AutocompleteComponent -> setPassFormControl -> val",
      formControlVal.value
    );
    this.nestedFormControl = formControlVal;
  }

  get passFormControl(): FormControl {
    return this.nestedFormControl;
  }
  /**
   * Creates an instance of autocomplete component.
   */
  constructor(
    // @Inject([]) s,
    public autocompleteService: AutocompleteService<
      AutocompleteSearchFilterable
    >
  ) {
    // this.autocompleteService = getBespokeAutocompleteServiceInjected();

    console.log(
      "NameableAutocompleteComponent autocompleteService",
      autocompleteService
    );
  }

  /**
   * on changes
   * @param changes Ch-ch-ch-ch-changes
   *
   */
  ngOnChanges(changes: SimpleChanges): void {
    try {
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
    } catch (e) {
      console.log("ngOnChanges -> e stringify huge change bug", e);
    }
  }
  /**
   * on init
   */
  ngOnInit(): void {
    console.log(
      "AutocompleteComponent -> ngOnInit -> form control",
      this.nestedFormControl
    );

    const options: AutocompleteSearchFilterable[] = this.autocompleteService.setupOptionsWith(
      [{ name: "test" }]
    );
    console.log("ngOnInit -> optionsReturned", options);

    const filterOptions: Observable<AutocompleteSearchFilterable[]> = this.autocompleteService.getCreatedFilterOptions(
      this.passFormControl,
      getDisplayName
    );
    this.autocompleteService.filteredOptions = filterOptions;
  }
}
