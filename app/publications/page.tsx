import Sidebar from '../components/Sidebar';
import Image from 'next/image';

export default function Publications() {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      
      <main className="ml-64 flex-1 px-4 py-8 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Publications</h1>
          
          {/* Publications List */}
          <div className="space-y-4 mb-12">
            <div className="text-gray-700">
              <p>
                S. Zhan, Q. Wu, <strong>F. Yang</strong>, X. Shi, C. Huang, Q. Zhu. Learning in Slow Motion: Adapting Offline Reinforcement 
                Learning with Online Delays. Neural Information Processing Systems, 2025. Paper <span className="text-blue-600">🔗</span> <strong>(In submission)</strong>
              </p>
            </div>

            <div className="text-gray-700">
              <p>
                S. Zhan, Q. Wu, Z. Ruan, <strong>F. Yang</strong>, P. Wang, Y. Wang, R. Jiao, C. Huang, Q. Zhu. Inverse Delayed Reinforcement 
                Learning. Learning for Dynamics and Control. 2025. Paper <span className="text-blue-600">🔗</span> <strong>(In submission)</strong>
              </p>
            </div>

            <div className="text-gray-700">
              <p>
                <strong>F. Yang</strong>, S. Zhan, Y. Wang, et al. Case Study: Runtime Safety Verification of Neural Network Controlled System. 
                Runtime Verification, 2024. Paper <span className="text-blue-600">🔗</span>
              </p>
            </div>

            <div className="text-gray-700">
              <p>
                <strong>F. Yang*</strong>, Y. Wen*. Efficient Encoding of Graphics Primitives with Simplex-based Structures. Midwest Machine 
                Learning Symposium, 2023. Paper <span className="text-blue-600">🔗</span>
              </p>
            </div>
          </div>

          {/* Research Projects */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Projects</h2>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex gap-6">
              <div className="w-64 h-48 relative flex-shrink-0">
                <Image
                  src="/research-behavior.jpg"
                  alt="Research Project"
                  fill
                  className="object-cover rounded"
                />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Behavior 1K: A Human-Centered, Embodied AI Benchmark with 1,000 Everyday Activities and Realistic Simulation
                </h3>
                
                <p className="text-gray-700 mb-2">
                  Advised by: Fei-Fei Li <span className="text-blue-600">🔗</span>
                </p>
                
                <p className="text-gray-700 mb-3">
                  Sources: Project <span className="text-blue-600">🔗</span> / Paper <span className="text-blue-600">🔗</span>
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Development on BEHAVIOR 1K: 1000 embodied AI robotic learning simulation benchmark built upon NVIDIA Omniverse engine; 
                  Decomposed complex, long-horizon tasks into learnable action primitives (pick, place, navigate); Implemented a 
                  collision-free action primitives execution pipeline using...
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
