import { AutocompleteSearchFilterable } from "../../models/autocomplete-search-filterable";

/**
 * Function to tell us how to get the template searchable text / displayable name from list option.
 */
type OptionTextDisplayer<T> = (objOption: T) => string;
/**
 * Search predicate function to determine what to filter on (and keep, return when true)
 */
type OptionTextComparerSearchPredicate = (
  searchedName: string,
  searchText: string
) => boolean;
/**
 * Autocompletable utility
 *
 * Helper aggregation class.
 *
 * refactor to namespace or module?
 */

/**
 * Gets display name
 * @param option the object being search filtered on.
 * @returns   displayed name / searchable text name
 */
// tslint:disable-next-line: only-arrow-functions
export function getDisplayName(option: AutocompleteSearchFilterable): string {
  return option.name;
}

/**
 * Gets search text input for usability in downstream transformation
 * Get / validate search string input from object (code smell? not required? after object selection)
 * or weird case to get an autocomplete on focus (the "" blank value event too?)
 * @template T Autocompletable data objects that are closely related to form data entry.
 * @param inputTextOrT Text or object. Coupled with mat-autocomplete template usage that returns.
 * mat-autocomplete value input returned text on change or chosen object.
 * @param getFilterableDisplayName namer to get toString() or other representation.
 * @returns search text input validated as string... for pipeline.
 */
export function getSearchTextInput<T>(
  inputTextOrT: string | T,
  getFilterableDisplayName: OptionTextDisplayer<T>
): string {
  // - WARNING: TS compile const isNameTypeString: boolean = AutocompletableUtility.isInputString(inputTextOrT);
  const searchInput: string =
    typeof inputTextOrT === "string"
      ? inputTextOrT
      : getFilterableDisplayName(inputTextOrT);

  return searchInput;
}

/**
 * Gets search filtered options
 * @param inputText Text user wants to search on
 * @returns search filtered options
 */
export function getSearchFilteredOptions<T>(
  baseOptions: T[],
  inputText: string,
  getFilterableName: OptionTextDisplayer<T>,
  searchPredicate: OptionTextComparerSearchPredicate
): T[] {
  // Options returned after search filtered by the given predicate and inputText.
  const filteredOptions: T[] = baseOptions.filter((option: T) => {
    const optionName: string = getFilterableName(option);
    const isFound: boolean = searchPredicate(optionName, inputText);

    return isFound;
  });

  return filteredOptions;
}

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

/**
 * Determines whether search text found within option is
 * @param optionName acOption autocomplete searchable option object.
 * @param searchText User-input text to search and find within option.
 * @returns true if search text is found _anywhere_ within option
 */
export function isSearchTextFoundWithinOption(
  optionName: string,
  searchText: string
): boolean {
  const isSearchTextFound: boolean = optionName.indexOf(searchText) >= 0;

  return isSearchTextFound;
}

/**
 * Determines whether search text begin option is
 * @param optionName the option item's searchable name / display text
 * @param searchTextPrefix The user-input text that a search filtered option should start with.
 * @returns true if option _begins_ with the given search text.
 */
export function isSearchTextBeginOption(
  optionName: string,
  searchTextPrefix: string
): boolean {
  const isOptionStartingWithSearchText: boolean =
    optionName.indexOf(searchTextPrefix) === 0;

  return isOptionStartingWithSearchText;
}

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
