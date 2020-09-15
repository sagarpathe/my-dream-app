import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBoxDirective } from './search-box.directive';
import { SearchBox2Directive } from './search-box2/search-box2.directive';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxDirective,
    SearchBox2Directive,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
