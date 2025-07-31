// components/filters/Sidebar.tsx
export default function Sidebar() {
  return (
    <aside className="w-full md:w-1/5 p-4 bg-gray-100 rounded mt-20  dark:text-white dark bg-gray-900">
      <h2 className="text-lg font-bold mb-4">Filter Cars</h2>
      {/* Filter sections like brand, price, color etc */}
      <div>
        <h4 className="font-medium">By Brand</h4>
        <select className="w-full mt-2 mb-4 p-2 rounded border  dark:text-white dark bg-gray-900">
          <option>All Brands</option>
          <option>BMW</option>
          <option>Toyota</option>
        </select>
      </div>
    </aside>
  );
}
