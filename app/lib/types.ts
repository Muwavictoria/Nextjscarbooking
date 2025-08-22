// app/lib/types.ts
import { Car } from './api';

export interface CarState {
  cars: Car[];
  selectedCar: Car | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}