import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PopoverModule } from 'ngx-bootstrap/popover';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxBootstrapComponent } from './ngx-bootstrap/ngx-bootstrap.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, PopoverModule.forRoot() ],
  declarations: [ AppComponent, HelloComponent, NgxBootstrapComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
