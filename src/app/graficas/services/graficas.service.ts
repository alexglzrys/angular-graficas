import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { DataGraficaDona } from 'src/app/shared/interfaces/data-grafica-dona';
import { RedesSociales } from 'src/app/shared/interfaces/redes-sociales';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }

  getData(): Observable<RedesSociales[]> {
    return this.http.get<RedesSociales[]>(`http://localhost:3000/grafica`);
  }

  // Este servicio cambia la información mediante operadoes RxJS
  getDataRxjs(): Observable<DataGraficaDona> {
    return this.http.get<DataGraficaDona>(`http://localhost:3000/grafica`).pipe(
      delay(1500),
      map(res => {
        // Transformo mi data a la manera que me gustaría ofrecerla para quien consuma el servicio
        const labels = Object.keys(res);
        const data = Object.values(res);

        return {labels, data};
      })
    );
  }
}
