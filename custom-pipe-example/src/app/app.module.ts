import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { HttpClientModule } from '@angular/common/http';
import { AgePipe } from './age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
