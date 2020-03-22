import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";
import { IonicModule } from "@ionic/angular";

import { SharedModule } from "../../../../shared/modules/shared/shared.module";
import { AutocompleteComponent } from "./autocomplete.component";

/**
 * Ng module for Angular Material and form usage in component.
 */
@NgModule({
  declarations: [AutocompleteComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [AutocompleteComponent]
})
export class AutocompleteModule {}
