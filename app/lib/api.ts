'use client'

// app/lib/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3867';

export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  pricePerDay: number;
  available: boolean;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  cars?: T;
  car?: T;
  message?: string;
}

// Search parameters interface
export interface SearchParams {
  make?: string;
  model?: string;
  minPrice?: number;
  maxPrice?: number;
  startDate?: string;
  endDate?: string;
}

class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  // Generic fetch method with error handling
  private async fetchApi<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`API request failed: ${error}`);
      throw error;
    }
  }

  // Get all available cars
  async getAllCars(): Promise<Car[]> {
    const data: ApiResponse<Car[]> = await this.fetchApi('/api/cars');
    return data.cars || [];
  }

  // Search cars with parameters
  async searchCars(params: SearchParams): Promise<Car[]> {
    const queryParams = new URLSearchParams();
    
    if (params.make) queryParams.append('make', params.make);
    if (params.model) queryParams.append('model', params.model);
    if (params.minPrice) queryParams.append('minPrice', params.minPrice.toString());
    if (params.maxPrice) queryParams.append('maxPrice', params.maxPrice.toString());
    if (params.startDate) queryParams.append('startDate', params.startDate);
    if (params.endDate) queryParams.append('endDate', params.endDate);
    
    const queryString = queryParams.toString();
    const endpoint = `/api/cars/search${queryString ? `?${queryString}` : ''}`;
    
    const data: ApiResponse<Car[]> = await this.fetchApi(endpoint);
    return data.cars || [];
  }

  // Get car by ID
  async getCarById(id: number): Promise<Car> {
    const data: ApiResponse<Car> = await this.fetchApi(`/api/cars/${id}`);
    if (!data.car) {
      throw new Error('Car not found');
    }
    return data.car;
  }
}

// Create and export a singleton instance
export const apiService = new ApiService();