import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainScreenPageRoutingModule } from './main-screen-routing.module';

import { MainScreenPage } from './main-screen.page';
import { BannerTitleComponent } from 'src/app/components/banner-title/banner-title.component';
import { CardFeatureComponent } from 'src/app/components/card-feature/card-feature.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainScreenPageRoutingModule
  ],
  declarations: [
    MainScreenPage,
    BannerTitleComponent,
    CardFeatureComponent
  ]
})
export class MainScreenPageModule {}
