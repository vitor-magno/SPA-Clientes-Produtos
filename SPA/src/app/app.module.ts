import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from 'src/components/templates/header/header.component';
import { FooterComponent } from 'src/components/templates/footer/footer.component';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatCardModule } from  '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { NavComponent } from 'src/components/templates/nav/nav.component';
import { HomeComponent } from 'src/views/home/home.component';
import { ProductCrudComponent } from 'src/views/product-crud/product-crud.component';
import { ProductCreateComponent } from 'src/components/product/product-create/product-create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProductReadComponent } from 'src/components/product/product-read/product-read.component';
import { ProductUpdateComponent } from 'src/components/product/product-update/product-update.component';
import { ProductDeleteComponent } from 'src/components/product/product-delete/product-delete.component';
import { ClientCreateComponent } from 'src/components/clientes/client-create/client-create.component';
import { ClientReadComponent } from 'src/components/clientes/client-read/client-read.component';
import { ClientUpdateComponent } from 'src/components/clientes/client-update/client-update.component';
import { ClientDeleteComponent } from 'src/components/clientes/client-delete/client-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    ClientCreateComponent,
    ClientReadComponent,
    ClientUpdateComponent,
    ClientDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
