import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Shared-Component/nav/nav.component';
import { BannerComponent } from './Shared-Component/banner/banner.component';
import { BlockComponent } from './Shared-Component/block/block.component';
import { ExperienceComponent } from './experience/experience.component';
import { DigitalComponent } from './digital/digital.component';
import { RegionalComponent } from './regional/regional.component';
import { QuotesComponent } from './quotes/quotes.component';
import { LonpacComponent } from './lonpac/lonpac.component';
import { CopyrightComponent } from './copyright/copyright.component';

@NgModule({
  declarations: [AppComponent, NavComponent, BannerComponent, BlockComponent, ExperienceComponent, DigitalComponent, RegionalComponent, QuotesComponent, LonpacComponent, CopyrightComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
