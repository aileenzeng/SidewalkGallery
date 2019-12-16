import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { GalleryOverview } from './gallery-overview';
import  {GalleryRoot } from './gallery-root';
import { GalleryService } from '../gallery-service';

import { AppComponent } from '../app.component';
import { AppHttpInterceptorService } from '../http-interceptor.service';
import { GalleryCard } from '../cards/gallery-card';
import {GalleryTag} from "../cards/gallery-tag";
import {MatButtonModule} from "@angular/material/button";

/**
 * Highest level Angular module for SidewalkGallery.
 * TODO: Break up into a GalleryModule?
 */
@NgModule({
  declarations: [
    GalleryCard,
    GalleryRoot,
    GalleryTag,
    GalleryOverview,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'Csrf-Token',
      headerName: 'Csrf-Token',
    }),
    MatCardModule,
    MatListModule,
    MatButtonModule,
  ],
  providers: [
    GalleryService,
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptorService
    }
  ],
  bootstrap: [AppComponent]
})
export class GalleryModule {

}
