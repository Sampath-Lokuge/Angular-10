import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { MaterialModule } from '../shared/material.module';
import { SidenavPrimengComponent } from './navigation/sidenav-primeng/sidenav-primeng.component';
import { PrimengModule } from '../shared/primeng.module';



@NgModule({
  declarations: [SidenavComponent, HeaderComponent, FooterComponent, SidenavPrimengComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    PrimengModule
  ],
  exports: [
    SidenavComponent, HeaderComponent, FooterComponent, SidenavPrimengComponent
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) { throw new Error('You should import core module only in the root module'); }
  }
}
