'use client';

import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Next.js Portfolio',
    description: 'A modern portfolio website built with Next.js and React',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: '#',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
  },
  {
    title: 'Real-time Chat App',
    description: 'WebSocket-based chat application with user authentication',
    tags: ['WebSocket', 'React', 'Firebase', 'Tailwind CSS'],
    link: '#',
  },
  {
    title: 'API Management System',
    description: 'REST API development and management platform',
    tags: ['Express.js', 'PostgreSQL', 'Docker', 'AWS'],
    link: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-white dark:bg-slate-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12">
          Check out some of my recent work
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
