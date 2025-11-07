import Sidebar from '../components/Sidebar';

export default function Teaching() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="ml-64 flex-1 p-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Teaching</h1>
          
          <div className="prose prose-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Teaching Assistant Experience</h2>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">CS 101: Introduction to Computer Science</h3>
              <p className="text-gray-600 mb-2">Fall 2023 | Northwestern University</p>
              <p className="text-gray-700 leading-relaxed">
                Assisted students with fundamental programming concepts, held office hours, and graded assignments.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">CS 214: Data Structures</h3>
              <p className="text-gray-600 mb-2">Spring 2023 | Northwestern University</p>
              <p className="text-gray-700 leading-relaxed">
                Led discussion sections, created practice problems, and mentored students on algorithm design.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">CS 348: Introduction to Artificial Intelligence</h3>
              <p className="text-gray-600 mb-2">Fall 2022 | Northwestern University</p>
              <p className="text-gray-700 leading-relaxed">
                Helped students understand machine learning concepts, neural networks, and search algorithms.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
