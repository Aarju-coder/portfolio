import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import projectsData from '../../data/projects.json';

const filterTags = ['All', 'Frontend', 'Backend', 'Cloud', 'DevOps'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projectsData.projects
    : projectsData.projects.filter(project => project.tags.includes(activeFilter));

  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="Some of my recent work - Live demos available on request; source code on GitHub"
    >
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {filterTags.map((tag) => (
          <motion.button
            key={tag}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter(tag)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeFilter === tag
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                : 'glass glass-hover'
            }`}
          >
            {tag}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glass glass-hover rounded-xl overflow-hidden shadow-xl group"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary-400 to-secondary-400 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center px-4">
                    {project.title}
                  </h3>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="accent" className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Featured
                    </Badge>
                  </div>
                )}
              </div>

              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="gray">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="gray">+{project.technologies.length - 4}</Badge>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex gap-2">
                        <span className="text-primary-500">•</span>
                        <span className="line-clamp-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 mt-6">
                  {project.liveUrl && (
                    <Button
                      as="a"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="sm"
                      className="flex-1 text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      as="a"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant={project.liveUrl ? "secondary" : "primary"}
                      size="sm"
                      className={`${project.liveUrl ? 'flex-1' : 'w-full'} text-sm`}
                    >
                      <Github className="w-4 h-4 mr-1" />
                      View Code
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            No projects found for this category.
          </p>
        </motion.div>
      )}
    </SectionWrapper>
  );
}
