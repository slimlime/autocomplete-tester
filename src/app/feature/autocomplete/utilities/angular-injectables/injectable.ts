import { InjectionToken, Injector, StaticProvider } from "@angular/core";

import { AutocompleteSearchFilterable } from "./../../models/autocomplete-search-filterable";
import { AutocompleteService } from "./../../services/autocomplete.service";

// Angular reference guide did not provide proper interface for options
interface MyInjectorOptions {
  /**
   * Describes how the Injector should be configured as static (that is, without reflection).
   */
  providers: StaticProvider[];
  /**
   * Concrete injectors implement this interface.
   * For more details, see the "Dependency Injection Guide".
   */
  parent?: Injector;
  /**
   * name
   */
  name?: string;
}

/**
 * Somes objects to inject
 * @returns Bespoke typed usage of generic autocompleteService.
 */
export const getBespokeAutocompleteServiceInjected: () => AutocompleteService<
  AutocompleteSearchFilterable
> = () => {
  const someObjectsToInject: AutocompleteSearchFilterable[] = [{ name: "hi" }];
  // A type InjectableTokenBespoke = InjectionToken<
  //   AutocompleteService<AutocompleteSearchFilterable>
  // >;

  const myToken: InjectionToken<AutocompleteService<
    AutocompleteSearchFilterable
  >> = new InjectionToken<AutocompleteService<AutocompleteSearchFilterable>>(
    "someTest"
  );

  const myACServiceTokenTestObjectsProvider: StaticProvider = {
    provide: myToken,
    useValue: someObjectsToInject
  };

  const injectorOptionsObj: MyInjectorOptions = {
    providers: [myACServiceTokenTestObjectsProvider]
  };
  const injector: Injector = Injector.create(injectorOptionsObj);
  console.log("injector", injector);
  const testGetServiceInjectedToken: AutocompleteService<AutocompleteSearchFilterable> = injector.get<
    AutocompleteService<AutocompleteSearchFilterable>
  >(myToken);
  console.log("testGetServiceInjectedToken", testGetServiceInjectedToken);

  return testGetServiceInjectedToken;
};
