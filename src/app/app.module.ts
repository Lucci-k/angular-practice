import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyFormComponent } from './currency-form/currency-form.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningComponent } from './warning-alert/warning-alert.component';
import { DangerComponent } from './danger/danger.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyFormComponent,
    ServerComponent,
    ServersComponent,
    WarningComponent,
    DangerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
