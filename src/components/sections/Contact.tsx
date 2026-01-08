import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, Check, Send } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import Card from '../ui/Card';
import Button from '../ui/Button';
import profileData from '../../data/profile.json';
import * as LucideIcons from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Let's work together on your next project"
    >
      <div className="max-w-2xl mx-auto">
        <Card hover={false}>
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', duration: 0.6 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 mb-6"
            >
              <Mail className="w-10 h-10 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-400">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg glass">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500" />
                <span className="font-medium">{profileData.email}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={copyEmail}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Copy email"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Check className="w-5 h-5 text-green-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Copy className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            <Button
              as="a"
              href={`mailto:${profileData.email}`}
              variant="primary"
              className="w-full justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Email
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-4">
              Or connect with me on
            </p>
            <div className="flex items-center justify-center gap-4">
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
            </div>
          </div>
        </Card>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12 text-gray-600 dark:text-gray-400"
        >
          <p>Built with React, TypeScript, Tailwind CSS, and Framer Motion</p>
          <p className="mt-2">© 2026 {profileData.name}. All rights reserved.</p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
