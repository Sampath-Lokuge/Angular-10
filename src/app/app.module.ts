import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './shared/material.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    CoreModule,
    FlexLayoutModule,
    MaterialModule,
    NgMaterialMultilevelMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
