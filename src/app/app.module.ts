import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CategoryComponent } from './components/category/category.component';
import { CarouselModule } from '@coreui/angular';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkeletonModule } from 'primeng/skeleton';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductdetailsComponent,
    NavbarComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent,
    CarouselComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    SkeletonModule,
    ToastModule,
    ProgressSpinnerModule,
    AnimateOnScrollModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
