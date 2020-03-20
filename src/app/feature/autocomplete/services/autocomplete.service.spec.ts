import { TestBed } from "@angular/core/testing";

import { AutocompleteService } from "./autocomplete.service";

/* eslint-disable */
/* tslint:disable */

describe("AutocompleteService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: AutocompleteService<any> = TestBed.get(AutocompleteService);
    expect(service).toBeTruthy();
  });
});
