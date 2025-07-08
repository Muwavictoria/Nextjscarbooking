// components/car/CarGrid.tsx
import CarCard from "./CarCard";

interface Car {
  car_name: string;
  price: number;
  image?: string;
  number_plate: string;
}

export default function CarGrid({ cars }: { cars: Car[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cars.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
    </div>
  );
}
