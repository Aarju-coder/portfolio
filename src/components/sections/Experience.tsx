import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import Badge from '../ui/Badge';
import experienceData from '../../data/experience.json';

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      title="Work Experience"
      subtitle="My professional journey"
    >
      <div className="relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500" />

        <div className="space-y-12">
          {experienceData.experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="w-full md:w-1/2" />

              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900 transform -translate-x-1/2 z-10" />

              <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass glass-hover rounded-xl p-6 shadow-xl"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                      <p className="text-primary-500 font-semibold mb-2">{exp.company}</p>
                    </div>
                    <Briefcase className="w-6 h-6 text-primary-500 flex-shrink-0" />
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.startDate} - {exp.endDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex gap-2">
                          <span className="text-primary-500">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="gray">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {exp.achievements.length > 0 && (
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="font-semibold mb-2 text-sm">Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-primary-600 dark:text-primary-400 flex gap-2">
                            <span>🏆</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
