'use client';

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Image from 'next/image';

type Certification = {
  title: string;
  src: string;
  alt: string;
};

const CERTIFICATIONS: Certification[] = [
  {
    title: 'MultiAgentic Systems',
    src: 'https://res.cloudinary.com/dz0nrto5b/image/upload/v1762537481/crewai_mam7bf.png',
    alt: 'MultiAgentic Systems Certification',
  },
  {
    title: 'Intro to AI',
    src: 'https://res.cloudinary.com/dz0nrto5b/image/upload/v1762537481/intro_to_ai_wqcpcg.png',
    alt: 'Intro to AI Certification',
  },
  {
    title: 'Intro to ChatGPT and Generative AI',
    src: 'https://res.cloudinary.com/dz0nrto5b/image/upload/v1762537481/genai_nvpwq4.png',
    alt: 'Intro to ChatGPT and Generative AI Certification',
  },
  {
    title: 'Mathematics',
    src: 'https://res.cloudinary.com/dz0nrto5b/image/upload/v1762537481/mathematics_xrynij.png',
    alt: 'Mathematics Certification',
  },
  {
    title: 'Intro LangGraph',
    src: 'https://res.cloudinary.com/dz0nrto5b/image/upload/v1762537480/langGraph_bkgzkz.png',
    alt: 'Intro LangGraph Certification',
  },
];

export default function Home() {
  const [showHero, setShowHero] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [activeCertification, setActiveCertification] = useState<Certification | null>(null);

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
              alt="Arsalan"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>

          {/* Name */}
          <h1 className="text-5xl font-bold mb-4 text-shadow">Arsalan Ayaz</h1>

          {/* Subtitle */}
          <p className="text-lg mb-8 opacity-90">
             Cloud Native AI Engineer 
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
                  Technical Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('projects')}
                  className="text-lg font-semibold hover:underline underline-offset-4 cursor-pointer"
                >
                  My Projects
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
                  onClick={() => handleNavigate('certifications')}
                  className="text-lg font-semibold hover:underline underline-offset-4 cursor-pointer"
                >
                  Certifications
                </button>
              </li>
            </ul>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-6 text-white">
            <a
              href="https://www.linkedin.com/in/arsalan-ayaz-250057203/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://github.com/ArsalanAyaz88"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://docs.google.com/document/d/17kB46-msT1tgfbX32vRRNLVbj4mh4AGUU0hLe6RQQK4/edit?usp=sharing"
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
              href="arsalanayaz821@gmail.com"
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
        <section id="about" className="p-12 bg-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">About</h1>
            
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                I am <strong>Arsalan Ayaz</strong>, an AI Engineer, Researcher, and System Architect passionate about transforming 
                foundational AI research into real-world, production-grade intelligent systems. With a strong foundation in Machine 
                Learning, Deep Learning, and Generative AI, I specialize in designing and deploying scalable, mission-critical AI 
                solutions that bridge the gap between innovation and enterprise readiness.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                My experience includes building and orchestrating advanced AI systems using <strong>Docker</strong> and <strong>Kubernetes</strong>, 
                enabling seamless scalability, reliability, and automation across distributed environments. I have hands-on expertise 
                in <strong>Agentic AI</strong>, <strong>NLP</strong>, and <strong>Computer Vision</strong>, crafting solutions that 
                combine cutting-edge research with practical implementation.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Currently, I serve as an <strong>Agentic AI Engineer at FISTA Solutions</strong>, where I focus on developing 
                next-generation AI applications. Previously, I worked on AI-driven projects such as an AI-generated music platform 
                with intelligent recommendation features.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                I hold an Associate's degree in Artificial Intelligence from <strong>PIAIC</strong> and completed a Bachelor's in 
                Computer Science from the <strong>Virtual University of Pakistan</strong>. I'm driven by a mission to push the 
                boundaries of intelligent systems—designing architectures that are not just powerful, but also adaptive, reliable, 
                and ready for tomorrow's challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="publications" className="p-12 bg-gray-50">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Technical Skills</h1>
            
            <div className="space-y-6">
              {/* Programming & Frameworks */}
              <div>
                <p className="text-lg text-blue-500 mb-2">Programming & Frameworks</p>
                <p className="text-gray-700 pl-0">TypeScript, Next.js, Python, FastAPI</p>
              </div>

              {/* AI & Machine Learning */}
              <div>
                <p className="text-lg text-blue-500 mb-2">Artificial Intelligence & Machine Learning</p>
                <p className="text-gray-700 pl-0">PyTorch, TensorFlow, Deep Learning, Generative AI, LangChain, LangGraph, OpenAI Agent SDK</p>
              </div>

              {/* Databases & Vector Stores */}
              <div>
                <p className="text-lg text-blue-500 mb-2">Databases & Vector Stores</p>
                <p className="text-gray-700 pl-0">MongoDB, PostgreSQL, Qdrant, Pinecone</p>
              </div>

              {/* DevOps & System Architecture */}
              <div>
                <p className="text-lg text-blue-500 mb-2">DevOps & System Architecture</p>
                <p className="text-gray-700 pl-0">Docker, Kubernetes, GitHub, CI/CD Pipelines</p>
              </div>

              {/* AI Systems & MLOps */}
              <div>
                <p className="text-lg text-blue-500 mb-2">AI Systems & MLOps</p>
                <ul className="list-disc text-gray-700 space-y-2 pl-5">
                  <li>Design and orchestration of agentic AI architectures</li>
                  <li>Model deployment, monitoring, and scalability across distributed systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* My Projects Section */}
        <section id="projects" className="p-12 bg-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h1>
            
            <div className="space-y-6">
              {/* Project 1 */}
              <div>
                <p className="text-gray-700 mb-2 pl-0">Youtube Automation Agent</p>
                <p className="text-gray-700 mb-2 pl-0">Technologies: Spec Kit, AI Driven Development (AIDD), Nextjs, FastAPI, OpenAI AgentSDK, Short Term Memory (STM), Long Term Memory (LTM), Central Memory (CM), Reinforcement Learning</p>
                <p className="text-gray-700 leading-relaxed mb-4 pl-0">
                  An intelligent agent that helps YouTube content creators discover future topic ideas by analyzing their competitor's or their own channel's past performance. Uses the latest 30 videos data to make data-driven content recommendations—no guesswork, just insights.
                </p>
                <div className="flex gap-4">
                  <a href="https://automation-agent-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project →</a>
                  <a href="https://github.com/ArsalanAyaz88/AutomationAgent_Backend.git" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub →</a>
                  <a href="#" className="text-blue-500 hover:underline">Docs →</a>
                </div>
              </div>

              {/* Project 2 */}
              <div>
                <p className="text-gray-700 mb-2 pl-0">Project Name 2</p>
                <p className="text-gray-700 mb-2 pl-0">Technologies: TypeScript, Next.js, MongoDB</p>
                <p className="text-gray-700 leading-relaxed mb-4 pl-0">
                  Brief description of the project. What problem it solves, what technologies were used, and what the outcome was.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-500 hover:underline">View Project →</a>
                  <a href="#" className="text-blue-500 hover:underline">GitHub →</a>
                  <a href="#" className="text-blue-500 hover:underline">Docs →</a>
                </div>
              </div>

              {/* Project 3 */}
              <div>
                <p className="text-gray-700 mb-2 pl-0">Project Name 3</p>
                <p className="text-gray-700 mb-2 pl-0">Technologies: PyTorch, LangChain, Kubernetes</p>
                <p className="text-gray-700 leading-relaxed mb-4 pl-0">
                  Brief description of the project. What problem it solves, what technologies were used, and what the outcome was.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-500 hover:underline">View Project →</a>
                  <a href="#" className="text-blue-500 hover:underline">GitHub →</a>
                  <a href="#" className="text-blue-500 hover:underline">Docs →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="p-12 bg-gray-50">
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
        <section id="teaching" className="p-12 bg-gray-50">
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
        <section id="work-experience" className="p-12 bg-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Work Experience</h1>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Agentic AI Engineer</h3>
                <p className="text-gray-600 mb-3">FISTA Solutions | September 2025 – Present</p>
                <p className="text-sm text-gray-500 mb-3">Faisalabad, Punjab, Pakistan</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Leading the design and deployment of Agentic AI systems for enterprise-grade applications.</li>
                  <li>Developing intelligent agents that integrate NLP and Generative AI for automation and decision-making.</li>
                  <li>Building scalable, production-ready AI architectures using Docker and Kubernetes for distributed environments.</li>
                  <li>Collaborating with cross-functional teams to translate AI research into practical, high-impact solutions.</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Agentic AI Engineer (Freelance)</h3>
                <p className="text-gray-600 mb-3">Upwork | January 2025 – August 2025</p>
                <p className="text-sm text-gray-500 mb-3">England, United Kingdom (Remote)</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Delivered multiple client projects focused on AI-driven automation and generative intelligence.</li>
                  <li>Designed and developed an AI-generated music website with a user-friendly interface that generates and recommends music based on user preferences.</li>
                  <li>Applied NLP and recommendation algorithms to personalize user experiences.</li>
                  <li>Managed end-to-end AI model development, from experimentation to deployment in cloud-based environments.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="p-12 bg-gray-50">
          <div className="max-w-6xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Certifications</h1>
            
            <p className="text-gray-700 mb-8">
              Professional certifications demonstrating expertise in AI, Machine Learning, and related technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CERTIFICATIONS.map((cert) => (
                <button
                  key={cert.title}
                  type="button"
                  onClick={() => setActiveCertification(cert)}
                  className="group relative h-64 w-full overflow-hidden rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label={`View ${cert.title} certification`}
                >
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      {activeCertification && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
          onClick={() => setActiveCertification(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveCertification(null)}
              className="absolute top-3 right-3 text-white text-3xl leading-none hover:text-blue-200 focus:outline-none"
              aria-label="Close certification preview"
            >
              ×
            </button>
            <Image
              src={activeCertification.src}
              alt={activeCertification.alt}
              width={1600}
              height={900}
              className="w-full h-auto max-h-[80vh] rounded-lg object-contain"
              priority
            />
            <p className="mt-4 text-center text-white text-lg font-medium">
              {activeCertification.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
