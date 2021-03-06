import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { VideocenterComponent } from "./videocenter/videocenter.component";

const routes: Routes = [
  { path: "", redirectTo: "/videos", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "videos", component: VideocenterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
