import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { AutocompleteComponent } from "./../../../feature/autocomplete/components/autocomplete/autocomplete.component";

/**
 * SharedModule
 */
@NgModule({
  declarations: [AutocompleteComponent],
  imports: [CommonModule, IonicModule],
  exports: [AutocompleteComponent]
})
export class SharedModule {}
