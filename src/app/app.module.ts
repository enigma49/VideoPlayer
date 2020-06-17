import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import {
  MatInputModule,
  MatCardModule,
  MatExpansionModule
} from "@angular/material";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { VideocenterComponent } from "./videocenter/videocenter.component";
import { VideolistComponent } from "./videolist/videolist.component";
import { VideodetailsComponent } from "./videodetails/videodetails.component";
import { HttpModule } from "@angular/http";
import { SafePipe } from "./safe.pipe";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideocenterComponent,
    VideolistComponent,
    VideodetailsComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
