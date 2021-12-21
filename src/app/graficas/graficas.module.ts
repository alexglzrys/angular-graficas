import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDobleComponent,
    DonaComponent,
    DonaHttpComponent,
    GraficaBarraComponent
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule,
    /**
     * Cuando se trabaja con librerías que estan basadas en módulos CommonJS o AMD, Angular lanzará un warning en consola.
     * En este caso podemos decirle que permita el uso de este tipo de librería
     * mediante el archivo de configuración de angular.json
     *
     * architects -> build -> options -> allowedCommonJsDependencies: ["nombre-de-librería-conflicto.js"]
     */
    ChartsModule,   // Módulo para trabajar con gráficas (Paquete ng2-charts)
  ]
})
export class GraficasModule { }
