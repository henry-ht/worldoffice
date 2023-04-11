import { DecimalPipe } from "@angular/common";

export interface Team {
  id: number,
  Nombre: String,
  Estadio: String,
  "Sitio Web": String,
  Nacionalidad: String,
  "Año de Fundación": Number,
  Entrenador: String,
  Capacidad: number,
  Valor: DecimalPipe,
}
