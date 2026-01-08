import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import Card from '../ui/Card';
import profileData from '../../data/profile.json';

export default function Education() {
  return (
    <SectionWrapper
      id="education"
      title="Education"
      subtitle="My academic background"
    >
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {profileData.education.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-primary-500 font-semibold mb-3">{edu.institution}</p>
                </div>
                <GraduationCap className="w-8 h-8 text-primary-500 flex-shrink-0" />
              </div>

              <div className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.startDate} - {edu.endDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span className="font-semibold">GPA: {edu.gpa}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold mb-3 text-sm">Achievements:</h4>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex gap-2">
                      <span className="text-primary-500">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
