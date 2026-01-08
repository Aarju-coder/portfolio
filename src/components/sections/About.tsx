import { motion } from 'framer-motion';
import { MapPin, Coffee } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import Card from '../ui/Card';
import profileData from '../../data/profile.json';

export default function About() {
  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Get to know me better"
    >
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card hover={false} className="h-full">
            <h3 className="text-2xl font-bold mb-4">My Story</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {profileData.bio}
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5 text-primary-500" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Coffee className="w-5 h-5 text-primary-500" />
                <span>Coffee enthusiast & problem solver</span>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card hover={false} className="h-full">
            <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
            <div className="grid grid-cols-2 gap-6">
              {profileData.quickFacts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20"
                >
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {fact.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {fact.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
