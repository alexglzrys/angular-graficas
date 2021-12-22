import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RedesSociales } from 'src/app/shared/interfaces/redes-sociales';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }

  getData(): Observable<RedesSociales[]> {
    return this.http.get<RedesSociales[]>(`http://localhost:3000/grafica`);
  }
}
