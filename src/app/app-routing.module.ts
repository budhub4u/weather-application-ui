import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherItemsComponent } from './components/weather-items/weather-items.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  //{ path: 'home', component: WeatherItemsComponent },
  { path: ':city', component: WeatherItemsComponent },
  { path: '', component: WeatherItemsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
