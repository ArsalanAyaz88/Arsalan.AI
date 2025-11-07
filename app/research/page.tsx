import Sidebar from '../components/Sidebar';

export default function Research() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="ml-64 flex-1 p-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Research Papers Coded</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              My research focuses on developing safe and efficient robotic learning systems that can operate in uncertain 
              environments with observation delays.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Current Projects</h2>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe Reinforcement Learning</h3>
              <p className="text-gray-700 leading-relaxed">
                Developing safe reinforcement learning strategies that handle uncertainties and observation delays in 
                dynamic environments.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Neural Network Verification</h3>
              <p className="text-gray-700 leading-relaxed">
                Working on runtime verification methods for neural network-controlled robotic systems to ensure safety 
                guarantees.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Embodied AI</h3>
              <p className="text-gray-700 leading-relaxed">
                Contributing to large-scale embodied AI benchmarks for training robots on complex, long-horizon tasks 
                in realistic simulations.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
