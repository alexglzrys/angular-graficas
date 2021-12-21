import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  // Leyendas a colocar en la gráfica
  @Input() barChartLabels: Label[] = [];
  // Orientación por defecto de esta gráfica
  @Input() horizontal: boolean = false;
  // Datos a presentar en la gráfica
  @Input() barChartData: ChartDataSets[] = [];

  // Configuraciones por defecto en las gráficas de barras para ng2-charts
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  constructor() { }

  ngOnInit(): void {
    // Cambiar la orientación de esta gráfica con base al Input especificado en el componente
    // Los Inputs estan disponibles una vez que iniciaizado el componente
    if (this.horizontal) this.barChartType = 'horizontalBar';
  }



}
