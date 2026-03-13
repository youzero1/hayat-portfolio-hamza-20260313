'use client';

import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string;
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
  displayOrder: number;
  createdAt: string;
}

const projectColors = [
  'from-blue-500 to-cyan-500',
  'from-purple-500 to-pink-500',
  'from-orange-500 to-red-500',
  'from-green-500 to-emerald-500',
  'from-yellow-500 to-orange-500',
  'from-indigo-500 to-purple-500',
];

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { ref, isVisible } = useIntersectionObserver();

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProjects(data.data);
        } else {
          setError('Failed to load projects');
        }
      })
      .catch(() => setError('Failed to load projects'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Portfolio</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Featured Projects</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4" />
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              A selection of projects I&apos;ve built — from full-stack web apps to open-source tools.
            </p>
          </div>

          {/* Loading */}
          {loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="card p-6 animate-pulse">
                  <div className="h-40 bg-gray-200 dark:bg-gray-800 rounded-xl mb-4" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded mb-2" />
                  <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
                </div>
              ))}
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="text-center py-12 text-red-500">{error}</div>
          )}

          {/* Projects Grid */}
          {!loading && !error && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  colorClass={projectColors[index % projectColors.length]}
                  delay={index * 100}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  colorClass,
  delay,
}: {
  project: Project;
  colorClass: string;
  delay: number;
}) {
  const techTags = project.techStack.split(',').map((t) => t.trim()).filter(Boolean);

  return (
    <div
      className="card p-6 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Project Image / Color Block */}
      <div className={`h-40 rounded-xl bg-gradient-to-br ${colorClass} mb-6 flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative text-white text-center p-4">
          <div className="text-4xl mb-2">⚡</div>
          <div className="text-sm font-medium opacity-90">Project Preview</div>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
        {project.title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {techTags.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md"
          >
            {tech}
          </span>
        ))}
        {techTags.length > 4 && (
          <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-500 rounded-md">
            +{techTags.length - 4}
          </span>
        )}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
