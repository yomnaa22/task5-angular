import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { TopNavbarComponent } from './layout/top-navbar/top-navbar.component';
import { ProductItemComponent } from './features/products/product-item/product-item.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { ListContainerComponent } from './features/products/list-container/list-container.component';
import { productService } from './_services/product.service';
import { ProductDetailsComponent } from './features/products/product-details/product-details.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
//import { ProductAddComponent } from './features/products/add-product/add-product.component';
import { AboutUsComponent } from './aboutus/about-us/about-us.component';
import { RegisterFormComponent } from './login/register-form/register-form.component';
import { FormsModule } from '@angular/forms';
import { ProductAddComponent } from './features/products/product-add/product-add.component';
import { RegisterService } from './_services/register.service';
// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    // FooterComponent,
    // InnerNavComponent,
    TopNavbarComponent,
    ProductItemComponent,
    ProductListComponent,
    ListContainerComponent,
    ProductDetailsComponent,
    LoginFormComponent,
    //ProductAddComponent,
    AboutUsComponent,
    RegisterFormComponent,
    ProductAddComponent
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [productService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
