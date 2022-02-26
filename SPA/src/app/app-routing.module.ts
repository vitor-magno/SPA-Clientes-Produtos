import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from 'src/components/product/product-create/product-create.component';
import { HomeComponent } from 'src/views/home/home.component';
import { ProductCrudComponent } from 'src/views/product-crud/product-crud.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  // {
  //   path: "products/update/:id",
  //   component: ProductUpdateComponent
  // },
  // {
  //   path: "products/delete/:id",
  //   component: ProductDeleteComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
