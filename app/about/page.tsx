import Sidebar from '../components/Sidebar';

export default function About() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="ml-64 flex-1 p-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              Hi! My name is Frank. I am currently a Computer Science MS student at Northwestern University at the Design 
              Automation of Intelligent Systems Lab <span className="text-blue-600">🔗</span> advised by Prof. Qi Zhu <span className="text-blue-600">🔗</span>. 
              I also work closely with Prof. Chao Huang <span className="text-blue-600">🔗</span> at University of Southampton. 
              I am also worked as a Robotics Learning Intern at the Stanford Vision and Learning Lab <span className="text-blue-600">🔗</span> advised 
              by Prof. Fei-Fei Li <span className="text-blue-600">🔗</span>.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              I received my Bachelor's Degree with <em>summa cum laude</em> in Computer Science and Mathematics in 2024, also 
              from Northwestern University. I had the privilege of collaborating with Professor Florian Willomitzer <span className="text-blue-600">🔗</span> at 
              the 3DIM Lab <span className="text-blue-600">🔗</span>.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              I have a broad interest in robotic learning and control. I'm fascinated by the challenge of building autonomous 
              robots that navigate complex environments and perform long-horizon tasks efficiently and safely. I am researching 
              on equipping robots with safe learning and runtime decision-making capabilities within uncertain environments 
              subject to disturbances or observation delays. This interest extends from common applications like self-driving 
              vehicles to humanoid robotics. Looking ahead, I aim to design state-of-the-art learning methods that effectively 
              assist humans in complex tasks, while prioritizing safety alongside performance.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Within robotic learning and control, I am particularly interested in:
            </p>

            <div className="mb-6">
              <p className="text-gray-800 font-semibold italic mb-2">Data-Driven Control in Uncertainty:</p>
              <p className="text-gray-700 leading-relaxed ml-4">
                developing safe reinforcement learning and model predictive control strategies that can handle uncertainties 
                and observation delays in dynamic environments.
              </p>
            </div>

            <div className="mb-6">
              <p className="text-gray-800 font-semibold italic mb-2">Safety Verification:</p>
              <p className="text-gray-700 leading-relaxed ml-4">
                Equipping robots with decision-making capabilities that assess the safety of learned systems, especially in 
                the presence of neural network-controlled systems.
              </p>
            </div>

            <div className="mb-6">
              <p className="text-gray-800 font-semibold italic mb-2">Skill-Based Learning:</p>
              <p className="text-gray-700 leading-relaxed ml-4">
                Developing long-horizon skill acquisition from expert demonstration. This includes imitation learning and 
                inverse reinforcement learning techniques.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
