import Sidebar from '../components/Sidebar';

export default function WorkExperience() {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      
      <main className="ml-64 flex-1 px-4 py-8 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Work Experience</h1>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Robotics Learning Intern</h3>
              <p className="text-gray-600 mb-2">Stanford Vision and Learning Lab | Summer 2024</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Worked on BEHAVIOR 1K benchmark for embodied AI</li>
                <li>Developed collision-free action primitives for robotic manipulation</li>
                <li>Implemented learning algorithms for long-horizon task planning</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Research Assistant</h3>
              <p className="text-gray-600 mb-2">Northwestern University | 2022 - Present</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Conducted research on safe reinforcement learning with observation delays</li>
                <li>Developed runtime verification methods for neural network controllers</li>
                <li>Published papers in top-tier conferences</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Software Engineering Intern</h3>
              <p className="text-gray-600 mb-2">Tech Company | Summer 2023</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Developed machine learning pipelines for production systems</li>
                <li>Optimized algorithm performance and reduced latency</li>
                <li>Collaborated with cross-functional teams</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
