import { SharedModule } from "./../shared/modules/shared/shared.module";
/* eslint-disable */
/* tslint:disable */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { FolderPageRoutingModule } from "./folder-routing.module";

import { FolderPage } from "./folder.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}
