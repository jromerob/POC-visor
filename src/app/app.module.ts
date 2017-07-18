import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//  Componentes
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/share/sidebar/sidebar.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { ContainerComponent } from './components/share/container/container.component';

// Constantes
import {APP_ROUTING} from './app.routes';
import { MapComponent } from './components/map/map.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ContainerComponent,
    MapComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
