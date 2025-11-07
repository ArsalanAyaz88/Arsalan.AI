'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface SidebarProps {
  onToggleHero: () => void;
}

export default function Sidebar({ onToggleHero }: SidebarProps) {
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Publications', id: 'publications' },
    { name: 'Research', id: 'research' },
    { name: 'Teaching', id: 'teaching' },
    { name: 'Work Experience', id: 'work-experience' },
    { name: 'Photography', id: 'photography' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-sidebar text-white flex flex-col items-center py-12 px-6 z-50">
      {/* Hamburger Menu Button - Toggle back to Hero */}
      <button
        onClick={onToggleHero}
        className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded transition-all"
        aria-label="Toggle to hero view"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Profile Image */}
      <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-white">
        <Image
          src="/profile.svg"
          alt="Frank Yang"
          width={96}
          height={96}
          className="object-cover"
        />
      </div>

      {/* Name */}
      <h1 className="text-2xl font-bold mb-2 text-center">Frank Yang</h1>

      {/* Subtitle */}
      <p className="text-sm text-center mb-8 opacity-90">
        Computer Scientist, Roboticist,
        <br />
        amatuer Filmmaker
      </p>

      {/* Navigation */}
      <nav className="w-full">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-center py-2 px-4 rounded transition-colors ${
                  activeSection === item.id
                    ? 'bg-white/20 font-semibold'
                    : 'hover:bg-white/10'
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Icons */}
      <div className="mt-auto flex gap-4 text-white">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
          </svg>
        </a>
        <a
          href="https://scholar.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z" />
          </svg>
        </a>
        <a
          href="mailto:email@example.com"
          className="hover:opacity-80 transition-opacity"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
