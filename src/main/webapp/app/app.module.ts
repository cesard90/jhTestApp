import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { AppTestSharedModule } from 'app/shared/shared.module';
import { AppTestCoreModule } from 'app/core/core.module';
import { AppTestAppRoutingModule } from './app-routing.module';
import { AppTestHomeModule } from './home/home.module';
import { AppTestEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    AppTestSharedModule,
    AppTestCoreModule,
    AppTestHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    AppTestEntityModule,
    AppTestAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class AppTestAppModule {}
