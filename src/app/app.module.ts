import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { GalleryHomeComponent } from './gallery-home/gallery-home.component';
import { CeremonialComponent } from './ceremonial/ceremonial.component';
import { OffersComponent } from './offers/offers.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { CarouselHomeComponent } from './carousel-home/carousel-home.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "our-story", component: OurStoryComponent },
  { path: "faq", component: FaqComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CatalogueComponent,
    GalleryHomeComponent,
    CeremonialComponent,
    OffersComponent,
    OurStoryComponent,
    CarouselHomeComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
