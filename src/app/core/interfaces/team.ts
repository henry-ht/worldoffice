import { DecimalPipe } from "@angular/common";

export interface Team {
  id: number,
  name: String,
  stadium: String,
  website: String,
  nationality: String,
  foundation_year: Number,
  trainer: String,
  capacity: number,
  value: DecimalPipe,
}
