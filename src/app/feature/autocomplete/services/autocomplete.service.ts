import { Inject, Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import {
  getSearchTextInput,
  getSearchFilteredOptions,
  isSearchTextFoundWithinOption
} from "../utilities/autocomplete-utility/autocomplete-utility";

/**
 * Generic autocompletion service
 *  replacement for `AutocompletePatientService`
 * @usage: Make sure to call setupOptionsWith in the useFactory?
 */
@Injectable({
  providedIn: "root"
})
export class AutocompleteService<T> {
  /**
   * Base options of autocompletable service
   * e.g. Patient[]
   *
   * Setup if you want something for users to search.
   * The base options that autocomplete will be filter populated on.
   */
  @Inject("baseOptions") baseOptions: T[] = [];

  /**
   * Filtered options of autocompletable service
   *
   * To be setup after
   */
  filteredOptions: Observable<T[]> = new Observable();

  /**
   * Setups service list ac options with given options
   * Should not be used as options are injected with the service.
   * @param someOtherAltOptions arbitrary list of objects.
   * @returns The options now assigned to the service.
   */
  setupOptionsWith(someOtherAltOptions: T[]): T[] {
    this.baseOptions = someOtherAltOptions;

    return this.baseOptions;
  }
  /**
   * Gets created filter options
   *
   * 1. Get fC value change input/object
   * 2. Use input as searchText
   * 3. Return filteredOptions based on condition
   * @param formControl formControl to map value changes to related filtered options.
   * @param getFilterableDisplayName Function that returns text-searchable name
   */
  getCreatedFilterOptions(
    formControl: AbstractControl,
    getFilterableDisplayName: (objOption: T) => string,
    optionFilter: (objOption: T) => boolean
  ): Observable<T[]> {
    // tslint:disable: max-line-length no-any comment-format
    // prettier-ignore
    const [baseOptions, optionNamer, optionSearcher]: [T[], (objOption: T) => string, (a: string, b: string) => boolean] = [this.baseOptions, getFilterableDisplayName, isSearchTextFoundWithinOption]

    // User-input land dragons
    const valueChanges: Observable<any> = formControl.valueChanges;
    const filteredOptions: Observable<T[]> = valueChanges.pipe(
      startWith<string | T>(""),
      map((input: string | T) => getSearchTextInput(input, optionNamer)),
      map((inputSearchText: string) =>
        getSearchFilteredOptions(
          baseOptions,
          inputSearchText,
          optionNamer,
          optionSearcher
        )
      )
    );

    return filteredOptions;
  }
}
