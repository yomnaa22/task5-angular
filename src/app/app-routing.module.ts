import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './aboutus/about-us/about-us.component';
//import { ProductAddComponent } from './features/products/add-product/add-product.component';
import { ListContainerComponent } from './features/products/list-container/list-container.component';
import { ProductDetailsComponent } from './features/products/product-details/product-details.component';
import { TopNavbarComponent } from './layout/top-navbar/top-navbar.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { RegisterFormComponent } from './login/register-form/register-form.component';
import { ProductAddComponent } from './features/products/product-add/product-add.component';

const routes: Routes = [
  {path:'home' , component:ListContainerComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
 
  {path:'login', component:LoginFormComponent},

  {path:'register', component:RegisterFormComponent},
  { path:'add-product', component:ProductAddComponent},
{path:'about-us', component:AboutUsComponent},
{ path:'product', children:[{path:'details/:productId', component:ProductDetailsComponent},
{path:'add', component:ProductAddComponent}]}
  //{path:'**', component:TopNavbarComponent}     lw kol eli fo2 mt722sh      
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
