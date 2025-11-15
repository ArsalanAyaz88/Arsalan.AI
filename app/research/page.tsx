import Sidebar from '../components/Sidebar';

export default function Research() {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      
      <main className="ml-64 flex-1 px-4 py-8 sm:px-8 lg:px-12">
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

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Published Implementations</h2>
            <p className="text-gray-600 mb-4">
              Explore the code repositories for the research papers I have implemented or reproduced. Each button below opens the source code or notebook used for experimentation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Safe Reinforcement Learning in Robotics', url: 'https://github.com/example/safe-rl-robotics' },
                { title: 'Neural Network Runtime Verification', url: 'https://github.com/example/nn-runtime-verification' },
                { title: 'Observation Delay Compensation', url: 'https://github.com/example/delay-compensation' },
                { title: 'Safe Exploration via Shielding', url: 'https://github.com/example/safe-exploration-shielding' },
                { title: 'Model Predictive Control with RL', url: 'https://github.com/example/mpc-with-rl' },
                { title: 'Adaptive Robust Control Policies', url: 'https://github.com/example/adaptive-robust-control' },
                { title: 'Certified Reinforcement Learning Agents', url: 'https://github.com/example/certified-rl' },
                { title: 'Hybrid Systems Verification Toolkit', url: 'https://github.com/example/hybrid-systems-verification' },
                { title: 'Learning from Demonstrations – Safe Imitation', url: 'https://github.com/example/safe-imitation-learning' },
                { title: 'Resilient Multi-Agent Coordination', url: 'https://github.com/example/resilient-multi-agent' },
                { title: 'Energy-Aware Autonomous Navigation', url: 'https://github.com/example/energy-aware-navigation' },
                { title: 'Bilevel Optimization for RL Safety', url: 'https://github.com/example/bilevel-rl-safety' },
                { title: 'Probabilistic Safety Guarantees', url: 'https://github.com/example/probabilistic-safety-guarantees' },
                { title: 'Safe Policy Gradient Methods', url: 'https://github.com/example/safe-policy-gradient' },
                { title: 'Human-in-the-Loop RL Systems', url: 'https://github.com/example/hitl-rl-systems' },
                { title: 'Formal Verification for Drones', url: 'https://github.com/example/formal-verification-drones' },
                { title: 'Safe AI for Autonomous Vehicles', url: 'https://github.com/example/safe-ai-autonomous-vehicles' },
                { title: 'Runtime Monitors for Agents', url: 'https://github.com/example/runtime-monitors' },
                { title: 'Safe Transfer Learning Framework', url: 'https://github.com/example/safe-transfer-learning' },
                { title: 'Uncertainty-Aware Control Systems', url: 'https://github.com/example/uncertainty-aware-control' },
              ].map((paper) => (
                <a
                  key={paper.title}
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-center justify-between rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 transition-all hover:border-blue-400 hover:bg-blue-100 hover:text-blue-900"
                >
                  <span className="font-semibold">{paper.title}</span>
                  <svg
                    className="h-5 w-5 opacity-80 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
