import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreateComponent } from 'src/components/clientes/client-create/client-create.component';
import { ClientUpdateComponent } from 'src/components/clientes/client-update/client-update.component';
import { ProductCreateComponent } from 'src/components/product/product-create/product-create.component';
import { ProductDeleteComponent } from 'src/components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from 'src/components/product/product-update/product-update.component';
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
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  },
  {
    path: "client",
    component: ClientCreateComponent
  },
  {
    path: "client/update/:id",
    component: ClientUpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
