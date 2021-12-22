import { Component, OnInit } from '@angular/core';
import { delay } from "rxjs/operators";

import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';
import { RedesSociales } from 'src/app/shared/interfaces/redes-sociales';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
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

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
    /*this.graficasService.getData().pipe(
      delay(2000)
    ).subscribe(redesSociales => {
      console.log(redesSociales);
      // Almacenar dentro de un arreglo las propiedades
      const labels: Label[] = Object.keys(redesSociales);
      // Almacenar dentro de un arreglo los valores
      const values: any[] = Object.values(redesSociales)

      // Asociar los valores que viene del servicio en la gráfica
      this.doughnutChartLabels = [...labels];
      this.doughnutChartData.push([...values])
    })*/


    // Este servicio transforma la respuesta original del servidor a una manera que sea más facil para el cliente consumirla y asociarla con la gráfica a generar
    this.graficasService.getDataRxjs().subscribe(({data, labels}) => {
      console.log(data, labels);

      this.doughnutChartLabels = [...labels];
      this.doughnutChartData.push([...data])
    })
  }

}
