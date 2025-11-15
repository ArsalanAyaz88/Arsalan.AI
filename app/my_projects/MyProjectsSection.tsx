"use client";

import Image from "next/image";
import { useState } from "react";

type Project = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  tech: string;
  description: string;
  primaryLink?: { label: string; href: string };
  secondaryLink?: { label: string; href: string };
};

const PROJECTS: Project[] = [
  {
    id: "youtube-agent",
    title: "Youtube Automation Agent",
    image:
      "https://res.cloudinary.com/dz0nrto5b/image/upload/v1763104200/youtubeAgentResearch_ahyisl.png",
    imageAlt: "Youtube Automation Agent",
    tech:
      "Technologies: Spec Kit, AI Driven Development (AIDD), Nextjs, FastAPI, OpenAI AgentSDK, Short Term Memory (STM), Long Term Memory (LTM), Central Memory (CM), Reinforcement Learning",
    description:
      "An intelligent agent that helps YouTube content creators discover future topic ideas by analyzing their competitor's or their own channel's past performance. Uses the latest 30 videos data to make data-driven content recommendations—no guesswork, just insights.",
    primaryLink: {
      label: "Visit website",
      href: "https://automation-agent-frontend.vercel.app/",
    },
    secondaryLink: {
      label: "GitHub",
      href: "https://github.com/ArsalanAyaz88/AutomationAgent_Backend.git",
    },
  },
  {
    id: "ai-lms",
    title: "AI Powered Learning Management System - LMS",
    image:
      "https://res.cloudinary.com/dz0nrto5b/image/upload/v1763104096/suti_bv2x1h.png",
    imageAlt: "AI-Powered Medical LMS",
    tech: "Technologies: Next.js, PostgreSQL, FastAPI, LangChain, LangGraph, OpenAI Agent SDK",
    description:
      "An advanced Learning Management System tailored for online education. Admins upload course videos, generate customized assignments and quizzes for each course, and the AI-powered system tracks student performance with real-time feedback and analytics.",
    primaryLink: {
      label: "Visit website",
      href: "https://lms-frontend-rho-one.vercel.app/",
    },
    secondaryLink: {
      label: "GitHub",
      href: "https://github.com/ArsalanAyaz88/LMS-Frontend.git",
    },
  },
  {
    id: "youtube-mcp",
    title: "YouTube MCP Server",
    image:
      "https://res.cloudinary.com/dz0nrto5b/image/upload/v1763185370/youtubemcpserverdf_fud8b3.png",
    imageAlt: "YouTube MCP Server",
    tech: "Technologies: TypeScript, Node.js, Model Context Protocol (MCP), YouTube Data API",
    description:
      "An MCP-compliant server that exposes YouTube as a structured tool for AI agents. It lets models browse channels and playlists, fetch video metadata and transcripts, and ground conversations in real YouTube content for research, summarization, and automation workflows.",
    primaryLink: {
      label: "Visit website",
      href: "https://huggingface.co/spaces/Arsalan-joiya/youtube-mcp-server",
    },
    secondaryLink: {
      label: "GitHub",
      href: "https://github.com/ArsalanAyaz88/youtube-mcp-server.git",
    },
  },
  {
    id: "cortex-lane",
    title: "Cortex Lane - AI Services for Businesses",
    image:
      "https://res.cloudinary.com/dz0nrto5b/image/upload/v1763185304/cotrexlanwebsite_iwezim.png",
    imageAlt: "Cortex Lane - AI Services Company",
    tech: "Technologies: Next.js, TypeScript, Tailwind CSS, Vercel",
    description:
      "Marketing and lead-generation site for an AI consultancy that helps businesses adopt intelligent automation. Highlights service offerings, showcases case-study style sections, and funnels prospects into a clear contact flow for bespoke AI solutions.",
    primaryLink: {
      label: "Visit website",
      href: "https://cortex-lane.vercel.app/",
    },
    secondaryLink: {
      label: "GitHub",
      href: "https://github.com/ArsalanAyaz88/cortexLane.git",
    },
  },
];

export default function MyProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="w-full p-3 sm:p-4">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight border-l-4 border-emerald-500 pl-3">
        My Projects
      </h1>

      {/* Horizontal scroll cards */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto overflow-y-visible py-4 px-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {PROJECTS.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setActiveProject(project)}
              className="my-2 flex-shrink-0 w-72 bg-white rounded-xl border border-gray-200 shadow-sm text-left hover:shadow-md transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <div className="relative w-full h-40">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="rounded-t-xl object-cover"
                />
              </div>
              <div className="px-4 py-3">
                <h3 className="text-base font-semibold text-gray-900 mb-1 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-600 line-clamp-2">{project.tech}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detail panel (like second screenshot) */}
      {activeProject && (
        <div className="mt-6 bg-black text-white rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row md:items-stretch">
          <div className="relative w-full md:w-1/2 min-h-[260px]">
            <Image
              src={activeProject.image}
              alt={activeProject.imageAlt}
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold mb-2">{activeProject.title}</h2>
              <p className="text-sm text-gray-200 mb-2">{activeProject.tech}</p>
              <p className="text-sm text-gray-100 leading-relaxed">
                {activeProject.description}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {activeProject.primaryLink && (
                <a
                  href={activeProject.primaryLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:bg-gray-100 transition-colors"
                >
                  <span>{activeProject.primaryLink.label}</span>
                  <span aria-hidden className="text-base">
                    ↗
                  </span>
                </a>
              )}
              {activeProject.secondaryLink && (
                <a
                  href={activeProject.secondaryLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-400 px-5 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                >
                  <span>{activeProject.secondaryLink.label}</span>
                  <span aria-hidden className="text-base">
                    ↗
                  </span>
                </a>
              )}
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="ml-auto text-sm text-gray-300 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
