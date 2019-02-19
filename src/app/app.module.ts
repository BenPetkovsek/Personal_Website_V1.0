import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VertScrollLineComponent } from './vert-scroll-line/vert-scroll-line.component';
import { HoriScrollLineComponent } from './hori-scroll-line/hori-scroll-line.component';

@NgModule({
  declarations: [
    AppComponent,
    VertScrollLineComponent,
    HoriScrollLineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
