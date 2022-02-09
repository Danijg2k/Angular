import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { IndexComponentComponent } from '../../pages/index/index-component/index-component.component';
import { ProductFromUrlComponent } from '../product-from-url/product-from-url.component';
import { ColoresComponent } from 'src/app/pages/colores/colores/colores.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponentComponent,
  },
  {
    path: 'colores',
    component: ColoresComponent,
  },
  {
    path: 'productos/:idProducto',
    component: ProductFromUrlComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
