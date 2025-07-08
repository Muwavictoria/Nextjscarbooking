
import CarGrid from "../ui/car/CarGrid";
import { mockCars } from "../lib/data";


// Mock Data

export default function CarsPage() {
  return (
    <>
    <section className="w-full mt-20">
                  <h1 className="text-3xl font-bold mb-4">Available Cars</h1>
          
        </section>
        <CarGrid cars={mockCars} />
        </>
  );
}
    