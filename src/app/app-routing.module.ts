// tslint:disable no-submodule-imports no-any no-unsafe-any completed-docs no-floating-promises newline-per-chained-call
// tslint:disable typedef
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "folder/Inbox",
    pathMatch: "full"
  },
  {
    path: "folder/:id",
    loadChildren: () => import("./folder/folder.module").then(m => m.FolderPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
