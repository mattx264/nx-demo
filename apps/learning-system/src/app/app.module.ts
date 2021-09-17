import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MymoduleModule } from '@lms/mymodule';
import { SharedModule } from '@lms/shared';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MymoduleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
