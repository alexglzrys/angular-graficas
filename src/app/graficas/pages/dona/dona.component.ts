import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Antara', 'Andamar', 'Antea', 'Luxury Hall', 'Angelópolis'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 85, 290],
    // Se definen otros arreglos para generar gráficos de donas de 2 a x dimensiones
    // [50, 150, 120],
    // [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';
  // Colores en gráficas de donas es un poco diferente a barras.
  public doughnutChartColors: Color[] = [
    {
      backgroundColor: [
        '#4CAF50',
        '#2196F3',
        '#3949AB',
        '#004D40',
        '#BA68C8'
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
