'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { fetchCarById } from "@/app/lib/carSlice";
import { RootState, AppDispatch } from "@/app/lib/store";
import { Car } from '@/app/lib/api';
import Image from "next/image";

// Define the transformed car interface to match the component needs
interface TransformedCar {
  car_name: string;
  price: number;
  image?: string;
  number_plate: string;
  color?: string;
  seats?: number;
  description?: string;
  id: number;
}

export default function CarDetailPage({
  params,
}: {
  params: { number_plate: string };
}) {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const carsState: any = useSelector((state: RootState) => state.cars);
  const selectedCar = carsState.selectedCar;
  const status = carsState.status || 'idle';
  const error = carsState.error || null;

  // Extract car ID from number_plate (format: CAR-{id})
  const carId = params.number_plate.startsWith('CAR-') 
    ? parseInt(params.number_plate.replace('CAR-', ''))
    : null;

  useEffect(() => {
    if (carId) {
      dispatch(fetchCarById(carId));
    }
  }, [dispatch, carId]);

  // Transform API car data to match the component interface
  const transformedCar: TransformedCar | null = selectedCar ? {
    car_name: `${selectedCar.make} ${selectedCar.model}`,
    price: selectedCar.pricePerDay,
    image: selectedCar.imageUrl || "/img/default.jpg",
    number_plate: `CAR-${selectedCar.id}`,
    color: selectedCar.color,
    id: selectedCar.id,
  } : null;

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

  if (!transformedCar) {
    return (
      <div className="text-center mt-10 text-red-600 text-lg">
        Car not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white mt-10 rounded-lg shadow dark:text-white dark:bg-gray-900">
      {transformedCar.image && (
        <Image
          src={transformedCar.image.startsWith('/') ? transformedCar.image : `/img/${transformedCar.image}`}
          alt={transformedCar.car_name}
          height={256}
          width={1024}
          className="w-full h-90 object-contain rounded mb-6"
        />
      )}
      <h1 className="text-3xl font-bold mb-2">{transformedCar.car_name}</h1>
      <p className="text-xl text-blue-600 font-semibold mb-2">
        UGX {transformedCar.price.toLocaleString()}
      </p>
      <p className="text-gray-700 mb-1">Number Plate: {transformedCar.number_plate}</p>
      <p className="text-gray-700 mb-1">Color: {transformedCar.color ?? 'Not specified'}</p>
      <p className="text-gray-700 mb-1">Seats: {transformedCar.seats ?? 'Not specified'}</p>
      <p className="mt-4 text-gray-800">
        {transformedCar.description ?? 'No description available.'}
      </p>
    </div>
  );
}
