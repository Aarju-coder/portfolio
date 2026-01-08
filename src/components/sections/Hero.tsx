import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import Button from '../ui/Button';
import profileData from '../../data/profile.json';
import * as LucideIcons from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50 dark:opacity-30 animate-gradient bg-[length:200%_200%]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center"
      >
        <motion.div variants={item} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium mb-4">
            {profileData.availability}
          </span>
        </motion.div>

        <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm{' '}
          <span className="text-gradient">{profileData.name}</span>
        </motion.h1>

        <motion.h2 variants={item} className="text-2xl md:text-4xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
          {profileData.title}
        </motion.h2>

        <motion.p variants={item} className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          {profileData.tagline}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-3 mb-10 max-w-3xl mx-auto">
          {['Java/Spring Boot', 'Angular', 'React', 'WebSockets', 'AWS', 'GCP', 'SQL'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-lg glass text-sm font-semibold text-primary-600 dark:text-primary-400"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button onClick={scrollToProjects} size="lg" className="group">
            View Projects
            <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button
            as="a"
            href="/resume.pdf"
            download
            variant="secondary"
            size="lg"
            className="group"
          >
            <Download className="mr-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            Download Resume
          </Button>
        </motion.div>

        <motion.div variants={item} className="flex items-center justify-center gap-4">
          {profileData.social.map((social) => {
            const Icon = (LucideIcons as any)[social.icon];
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full glass glass-hover"
                aria-label={social.name}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  );
}
