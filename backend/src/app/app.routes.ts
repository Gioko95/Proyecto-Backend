import { Routes } from '@angular/router';
import { InicioComponent } from "./components/inicio/inicio.component"
import { IniciarSesionComponent } from "./components/iniciar-sesion/iniciar-sesion.component"
import { ContactoComponent } from "./components/contacto/contacto.component"
import { NosotrosComponent } from "./components/nosotros/nosotros.component"
import { PrivadoComponent } from "./components/privado/privado.component"
import { ProductosComponent } from "./components/productos/productos.component"
import { ServiciosComponent } from "./components/servicios/servicios.component"


export const routes: Routes = [
    {path: "Inicio", component: InicioComponent},
    {path: "IniciarSesion", component: IniciarSesionComponent},
    {path: "Contacto", component: ContactoComponent},
    {path: "Nosotros", component: NosotrosComponent},
    {path: "Privado", component: PrivadoComponent},
    {path: "Productos", component: ProductosComponent},
    {path: "Servicios", component: ServiciosComponent}
];