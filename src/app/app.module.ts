import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { LoginService } from "./services/login.service";
import { ReactiveFormsModule } from "@angular/forms";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Test01Component } from './test01/test01.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HotelinfocardsComponent } from './hotelinfocards/hotelinfocards.component';
import { OurteamComponent } from './ourteam/ourteam.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    PageNotFoundComponent,
    Test01Component,
    CarouselComponent,
    HotelinfocardsComponent,
    OurteamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
