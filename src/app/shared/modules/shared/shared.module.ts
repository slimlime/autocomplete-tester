import { AutocompleteModule } from "./../../../feature/autocomplete/components/autocomplete/autocomplete.module";
import {
  MatInputModule,
  MatAutocompleteModule,
  MatFormFieldModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { AutocompleteComponent } from "./../../../feature/autocomplete/components/autocomplete/autocomplete.component";

/**
 * SharedModule
 */
@NgModule({
  declarations: [AutocompleteModule],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  exports: [AutocompleteModule]
})
export class SharedModule {}
