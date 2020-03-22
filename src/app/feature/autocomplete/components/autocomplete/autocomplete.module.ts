import { AutocompleteComponent } from "./autocomplete.component";
import { SharedModule } from "../../../../shared/modules/shared/shared.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";
import { IonicModule } from "@ionic/angular";

/**
 * Ng module for Angular Material and form usage in component.
 */
@NgModule({
  declarations: [AutocompleteComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [AutocompleteComponent]
})
export class AutocompleteModule {}
