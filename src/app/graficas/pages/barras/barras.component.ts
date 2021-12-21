import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

/**
 * La versión 3.x de esta librería al 21-12-2021
 * no es compatible con Angular 12, tiene problemas de tipado estricto.
 * Aunque podría alterar la interfaz del tipo de dato en conflicto para agregar o hacer opcional, los datos en cuestión
 *
 * El problema se presenta en algunas propiedades del objeto de configuración, aunque en este punto lo que más importa es la
 * propiedad responsive = true
 */

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public barChartOptions: ChartOptions = {
    // Esta opción es la más importante
    responsive: true,
  };
  public barChartLabels: Label[] = ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  // Conjunto de datos a graficar
  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 70], label: 'PHP', backgroundColor: '#EC407A', hoverBackgroundColor: '#F48FB1' },
    { data: [28, 48, 40, 19, 86, 27, 90, 45], label: 'JavaScript', backgroundColor: '#673AB7', hoverBackgroundColor: '#CE93D8' },
    { data: [28, 48, 40, 19, 86, 27, 90, 45], label: 'Python', backgroundColor: '#26A69A', hoverBackgroundColor: '#80CBC4' },
    { data: [28, 48, 40, 19, 86, 27, 90, 45], label: 'Java', backgroundColor: '#FFCA28', hoverBackgroundColor: '#FFE082' },
  ];

  public randomize(): void {
    // Cambiar de forma programatica y aleatoria la data de cada cojunto de datos
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];

    this.barChartData[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];

    this.barChartData[2].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];

    this.barChartData[3].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];
  }

}
