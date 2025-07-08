// app/cars/[number_plate]/page.tsx
import { mockCars } from "@/app/lib/data";
import Image from "next/image";


export default function CarDetailPage({
  params,
}: {
  params: { number_plate: string };
}) {
  const car = mockCars.find(
    (c) => c.number_plate.toUpperCase() === params.number_plate.toUpperCase()
  );

  if (!car) {
    return (
      <div className="text-center mt-10 text-red-600 text-lg">
        Car not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white mt-10 rounded-lg shadow">
      {car.image && (
        <Image
          src={car.image.startsWith('/') ? car.image : `/img/${car.image}`}
          alt={car.car_name}
          height={100}
          width={100}
          className="w-full h-64 object-cover rounded mb-6"
        />
      )}
      <h1 className="text-3xl font-bold mb-2">{car.car_name}</h1>
      <p className="text-xl text-blue-600 font-semibold mb-2">
        UGX {car.price.toLocaleString()}
      </p>
      <p className="text-gray-700 mb-1">Number Plate: {car.number_plate}</p>
      <p className="text-gray-700 mb-1">Color: {car.color ?? 'Not specified'}</p>
      <p className="text-gray-700 mb-1">Seats: {car.seats ?? 'Not specified'}</p>
      <p className="mt-4 text-gray-800">{car.description ?? 'No description available.'}</p>
    </div>
  );
}
