import { Routes } from '@angular/router';
import { InicioComponent } from "./components/inicio/inicio.component"
import { IniciarSesionComponent } from "./components/iniciar-sesion/iniciar-sesion.component"
import { ContactoComponent } from "./components/contacto/contacto.component"
import { NosotrosComponent } from "./components/nosotros/nosotros.component"
import { PrivadoComponent } from "./components/privado/privado.component"
import { ProductosComponent } from "./components/productos/productos.component"
import { ServiciosComponent } from "./components/servicios/servicios.component"
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path: "Inicio", component: InicioComponent, title: "Inicio"},
    {path: "IniciarSesion", component: IniciarSesionComponent, title: "Iniciar Sesion"},
    {path: "Contacto", component: ContactoComponent, title: "Contactanos"},
    {path: "Nosotros", component: NosotrosComponent, title: "Nosotros"},
    {path: "Privado", component: PrivadoComponent, title: "Privado"},
    {path: "Productos", component: ProductosComponent, title: "Productos"},
    {path: "Servicios", component: ServiciosComponent, title: "Nuestros Servicios"},
    {path: "", redirectTo: "Inicio", pathMatch: "full"},
    {path: "**", component: NotFoundComponent, title: "Page not found 404"}
];