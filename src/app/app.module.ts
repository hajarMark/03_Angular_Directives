import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = "angular03-directives-challenge";
  bonjourTitle: string = "Bonjour !";
  isAdmin: boolean = true;
}
