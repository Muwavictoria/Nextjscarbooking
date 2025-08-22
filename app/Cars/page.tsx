'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CarGrid from "../ui/car/CarGrid";
import { fetchCars } from "../lib/carSlice";
import { RootState, AppDispatch } from "../lib/store";
import { Car } from '../lib/api';

// Define the transformed car interface to match the CarGrid component
interface TransformedCar {
  car_name: string;
  price: number;
  image: string;
  number_plate: string;
  id: number;
}

export default function CarsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const carsState: any = useSelector((state: RootState) => state.cars);
  const cars = carsState.cars || [];
  const status = carsState.status || 'idle';
  const error = carsState.error || null;

  useEffect(() => {
    // Only fetch all cars if no search has been performed
    if (cars.length === 0) {
      dispatch(fetchCars());
    }
  }, [dispatch, cars.length]);

  // Transform API car data to match the existing CarGrid component interface
  const transformedCars: TransformedCar[] = cars.map((car: Car) => ({
    car_name: `${car.make} ${car.model}`,
    price: car.pricePerDay,
    image: car.imageUrl || "/img/default.jpg",
    number_plate: `CAR-${car.id}`, // Using ID as placeholder since we don't have number_plate in API
    id: car.id,
  }));

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="text-center mt-10 text-red-600 text-lg">
        Error: {error}
      </div>
    );
  }

  return (
    <>
      <section className="w-full mt-20">
        <h1 className="text-3xl font-bold mb-4 dark:text-white dark:bg-gray-900">
          {cars.length > 0 ? `Available Cars (${cars.length})` : 'Available Cars'}
        </h1>
      </section>
      {transformedCars.length > 0 ? (
        <CarGrid cars={transformedCars} />
      ) : (
        <div className="text-center mt-10 text-gray-600 text-lg">
          No cars found matching your search criteria.
        </div>
      )}
    </>
  );
}