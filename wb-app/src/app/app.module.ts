import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataentryComponent } from './dataentry/dataentry.component';
import { CheckerrorsComponent } from './checkerrors/checkerrors.component';
import { ExportapnacomplexComponent } from './exportapnacomplex/exportapnacomplex.component';
import { TogglelockComponent } from './togglelock/togglelock.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DataentryComponent,
    CheckerrorsComponent,
    ExportapnacomplexComponent,
    TogglelockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
