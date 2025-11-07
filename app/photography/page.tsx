import Sidebar from '../components/Sidebar';
import Image from 'next/image';

export default function Photography() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="ml-64 flex-1 p-12">
        <div className="max-w-6xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Photography</h1>
          
          <p className="text-gray-700 mb-8">
            In my free time, I enjoy capturing moments through photography. Here are some of my favorite shots.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={`/photo-${i}.jpg`}
                  alt={`Photography ${i}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
