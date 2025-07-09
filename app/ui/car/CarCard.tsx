import Image from "next/image";


// components/car/CarCard.tsx
interface Car {
  car_name: string;
  price: number;
  image?: string;
  number_plate: string;
  seats?:number
}

export default function CarCard({ car }: { car: Car }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden pt-20">
      <Image
        src={car.image || "/img/default.jpg"}
        alt={car.car_name}
        width={563}
        height={675}
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{car.car_name}</h3>
        <p className="text-green-600 font-semibold">${car.price} / Per Day</p>
        <div className="flex justify-between text-gray-500 text-sm mt-3">
          <span>Manual</span>
          <p className="text-gray-600">UGX {car.price.toLocaleString()}</p>
          <span>{car.seats}</span>
        </div>
        <div className="mt-4 flex justify-between">
          <a href={`/Cars/CarDetail/${car.number_plate}`} className="text-sm bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}
