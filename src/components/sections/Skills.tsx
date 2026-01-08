import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import skillsData from '../../data/skills.json';

export default function Skills() {
  const getVariantForCategory = (index: number) => {
    const variants = ['primary', 'secondary', 'accent', 'gray'] as const;
    return variants[index % variants.length];
  };

  return (
    <SectionWrapper
      id="skills"
      title="Skills & Expertise"
      subtitle="Technologies and tools I work with"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <Card hover={false} className="text-center">
          <h3 className="text-lg font-bold mb-4 text-gray-700 dark:text-gray-300">Top Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skillsData.topSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Badge variant="primary" className="text-base px-4 py-2">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillsData.categories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
          >
            <Card hover={false} className="h-full">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="text-gradient">{category.name}</span>
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={getVariantForCategory(categoryIndex)}>
                        {skill.name}
                      </Badge>
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
