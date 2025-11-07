'use client';

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Image from 'next/image';

export default function Home() {
  const [showHero, setShowHero] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const handleNavigate = (sectionId: string) => {
    setIsExiting(true);
    setTimeout(() => {
      setShowHero(false);
      setIsExiting(false);
      // Scroll to the section after a short delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }, 400);
  };

  const handleToggleHero = () => {
    if (!showHero) {
      setShowHero(true);
    } else {
      setIsExiting(true);
      setTimeout(() => {
        setShowHero(false);
        setIsExiting(false);
      }, 400);
    }
  };

  if (showHero) {
    return (
      <div className={`relative min-h-screen w-full overflow-hidden ${isExiting ? 'hero-exit' : 'animate-fadeIn'}`}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.svg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
            <Image
              src="/profile.svg"
              alt="Frank Yang"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>

          {/* Name */}
          <h1 className="text-5xl font-bold mb-4 text-shadow">Frank Yang</h1>

          {/* Subtitle */}
          <p className="text-lg mb-8 opacity-90">
            Computer Scientist, Roboticist, amatuer Filmmaker
          </p>

          {/* Navigation Links */}
          <nav className="mb-8">
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleNavigate('about')}
                  className="text-lg font-semibold hover:underline underline-offset-4 cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('publications')}
                  className="text-lg font-semibold hover:underline underline-offset-4 cursor-pointer"
                >
                  Publications
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('research')}
                  className="text-lg font-semibold hover:underline underline-offset-4 cursor-pointer"
                >
                  Research
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('teaching')}
                  className="text-lg font-semibold hover:underline underline-offset-4 cursor-pointer"
                >
                  Teaching
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('work-experience')}
                  className="text-lg font-semibold hover:underline underline-offset-4 cursor-pointer"
                >
                  Work Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('photography')}
                  className="text-lg font-semibold hover:underline underline-offset-4 cursor-pointer"
                >
                  Photography
                </button>
              </li>
            </ul>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-6 text-white">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
              </svg>
            </a>
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z" />
              </svg>
            </a>
            <a
              href="mailto:email@example.com"
              className="hover:opacity-80 transition-opacity"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 right-8 animate-bounce">
            <svg
              className="w-12 h-12 text-white opacity-70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar onToggleHero={handleToggleHero} />
      
      <main className="ml-64 flex-1 content-enter">
        {/* About Section */}
        <section id="about" className="min-h-screen p-12 bg-white">
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
        </section>

        {/* Publications Section */}
        <section id="publications" className="min-h-screen p-12 bg-gray-50">
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
                <div className="w-64 h-48 relative flex-shrink-0 bg-gray-200 rounded">
                  <Image
                    src="/research-behavior.svg"
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
        </section>

        {/* Research Section */}
        <section id="research" className="min-h-screen p-12 bg-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Research</h1>
            
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                My research focuses on developing safe and efficient robotic learning systems that can operate in uncertain 
                environments with observation delays.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Current Projects</h2>
              
              <div className="bg-gray-50 rounded-lg shadow-sm p-6 mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe Reinforcement Learning</h3>
                <p className="text-gray-700 leading-relaxed">
                  Developing safe reinforcement learning strategies that handle uncertainties and observation delays in 
                  dynamic environments.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-sm p-6 mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Neural Network Verification</h3>
                <p className="text-gray-700 leading-relaxed">
                  Working on runtime verification methods for neural network-controlled robotic systems to ensure safety 
                  guarantees.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-sm p-6 mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Embodied AI</h3>
                <p className="text-gray-700 leading-relaxed">
                  Contributing to large-scale embodied AI benchmarks for training robots on complex, long-horizon tasks 
                  in realistic simulations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching Section */}
        <section id="teaching" className="min-h-screen p-12 bg-gray-50">
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
        </section>

        {/* Work Experience Section */}
        <section id="work-experience" className="min-h-screen p-12 bg-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Work Experience</h1>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Robotics Learning Intern</h3>
                <p className="text-gray-600 mb-2">Stanford Vision and Learning Lab | Summer 2024</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Worked on BEHAVIOR 1K benchmark for embodied AI</li>
                  <li>Developed collision-free action primitives for robotic manipulation</li>
                  <li>Implemented learning algorithms for long-horizon task planning</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Research Assistant</h3>
                <p className="text-gray-600 mb-2">Northwestern University | 2022 - Present</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Conducted research on safe reinforcement learning with observation delays</li>
                  <li>Developed runtime verification methods for neural network controllers</li>
                  <li>Published papers in top-tier conferences</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-sm p-6">
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
        </section>

        {/* Photography Section */}
        <section id="photography" className="min-h-screen p-12 bg-gray-50">
          <div className="max-w-6xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Photography</h1>
            
            <p className="text-gray-700 mb-8">
              In my free time, I enjoy capturing moments through photography. Here are some of my favorite shots.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={`/photo-${i}.svg`}
                    alt={`Photography ${i}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
