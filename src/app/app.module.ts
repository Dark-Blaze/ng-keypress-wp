import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleComponentComponent } from './components/sample-component/sample-component.component';
import {HotkeyModule} from 'angular2-hotkeys';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponentComponent
  ],
  imports: [
    BrowserModule,
    NgxJsonViewerModule,
    HotkeyModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
