import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page.component';
import { SharedModule } from '@shared/shared.module';
import { PhotoComponent } from './components/list-photos/photo/photo.component';
import { ListPhotosComponent } from './components/list-photos/list-photos.component';


@NgModule({
  declarations: [
    HomePageComponent,
    ListPhotosComponent,
    PhotoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
