
// app/lib/carSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiService, Car, SearchParams } from './api';

// Define the initial state
export interface CarState {
  cars: Car[];
  selectedCar: Car | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CarState = {
  cars: [],
  selectedCar: null,
  status: 'idle',
  error: null,
};

// Async thunks for API calls
export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async () => {
    return await apiService.getAllCars();
  }
);

export const searchCars = createAsyncThunk(
  'cars/searchCars',
  async (params: SearchParams) => {
    return await apiService.searchCars(params);
  }
);

export const fetchCarById = createAsyncThunk(
  'cars/fetchCarById',
  async (id: number) => {
    return await apiService.getCarById(id);
  }
);

// Create the slice
const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    clearSelectedCar: (state) => {
      state.selectedCar = null;
    },
    clearCars: (state) => {
      state.cars = [];
    },
  },
  extraReducers: (builder) => {
    // Fetch all cars
    builder
      .addCase(fetchCars.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch cars';
      })
      // Search cars
      .addCase(searchCars.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchCars.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cars = action.payload;
      })
      .addCase(searchCars.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to search cars';
      })
      // Fetch car by ID
      .addCase(fetchCarById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedCar = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch car';
      });
  },
});

export const { clearSelectedCar, clearCars } = carSlice.actions;
export default carSlice.reducer;