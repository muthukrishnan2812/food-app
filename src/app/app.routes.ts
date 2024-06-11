import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    children:[
      {
        path:'listing',
        loadComponent:() => import('./screens/listing/listing.page').then( m => m.ListingPage)
      },
      {
        path: 'cart',
        loadComponent: () => import('./screens/cart/cart.page').then( m => m.CartPage)
      },
      {
        path:'',
        redirectTo:'listing',
        pathMatch:'full'
      }
    ]
  },
  {
    path: 'listing',
    loadComponent: () => import('./screens/listing/listing.page').then( m => m.ListingPage)
  },
  {
    path: 'searchbar',
    loadComponent: () => import('./components/searchbar/searchbar.page').then( m => m.SearchbarPage)
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./screens/details/details.page').then( m => m.DetailsPage)
  },
  {
    path: 'cart',
    loadComponent: () => import('./screens/cart/cart.page').then( m => m.CartPage)
  },
];
