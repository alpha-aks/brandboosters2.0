'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const onboardingSteps = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'We start with a discovery call to understand your business goals, challenges, and vision for the project.',
    icon: '💬',
  },
  {
    step: 2,
    title: 'Strategy Development',
    description: 'Our team creates a customized strategy tailored to your specific needs and business objectives.',
    icon: '🎯',
  },
  {
    step: 3,
    title: 'Implementation',
    description: 'We bring your project to life with our expert team handling all aspects of development and design.',
    icon: '🚀',
  },
  {
    step: 4,
    title: 'Review & Refinement',
    description: 'We review the work with you, gather feedback, and make necessary adjustments to ensure perfection.',
    icon: '✨',
  },
  {
    step: 5,
    title: 'Launch & Support',
    description: 'We ensure a smooth launch and provide ongoing support to help your business grow.',
    icon: '🚀',
  },
];

const WaveDivider = () => (
  <div className="relative h-24 w-full overflow-hidden">
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="absolute top-0 left-0 w-full h-full"
    >
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        className="fill-current text-gray-100"
      ></path>
    </svg>
  </div>
);

const YellowDot = ({ delay = 0 }) => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ 
      delay,
      type: 'spring',
      stiffness: 100,
      damping: 10 
    }}
    className="w-3 h-3 rounded-full bg-yellow-400 absolute"
  />
);

export default function OnboardingProcess() {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const waveY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;
  
  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="fixed top-4 left-4 z-50"
      >
        <Link 
          href="/" 
          className="flex items-center text-gray-700 hover:text-yellow-600 transition-colors group"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 mr-1 group-hover:-translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-medium">Back to Home</span>
        </Link>
      </motion.div>
      
      {/* Hero Section with Wave */}
      <div className="relative bg-gradient-to-br from-blue-50 to-white">
        <div className="pt-40 pb-32 px-4">
          <div className="container mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
            >
              Our Onboarding Journey
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              A seamless 5-step process to transform your vision into reality
            </motion.p>
          </div>
        </div>
        <WaveDivider />
      </div>

      {/* Onboarding Process with Animated Wave */}
      <div className="relative py-20 bg-white" ref={targetRef}>
        <motion.div 
          className="absolute top-0 left-0 w-full h-full overflow-hidden z-0"
          style={{ y: waveY }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50 to-transparent opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {onboardingSteps.map((step, index) => (
            <div key={step.step} className="relative">
              {index !== 0 && (
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 -z-10"></div>
              )}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20% 0px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 100,
                  damping: 10
                }}
                className="flex items-start mb-16 group relative"
              >
                {/* Animated yellow dot */}
                <motion.div 
                  className="absolute -left-8 top-6 w-3 h-3 bg-yellow-400 rounded-full"
                  initial={{ scale: 0 }}
                  whileInView={{ 
                    scale: 1,
                    transition: { 
                      delay: index * 0.15 + 0.2,
                      type: 'spring',
                      stiffness: 500,
                      damping: 15
                    }
                  }}
                  viewport={{ once: true }}
                />
                
                <motion.div 
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 text-white flex items-center justify-center text-xl font-bold mr-6 relative overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <span className="relative z-10">{step.step}</span>
                  <motion.div 
                    className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                </motion.div>
                
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex-1 relative overflow-hidden group-hover:shadow-yellow-100 group-hover:border-yellow-200 transition-all duration-300"
                  whileHover={{ 
                    y: -5,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <motion.span 
                        className="text-2xl mr-3"
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        {step.icon}
                      </motion.span>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section with Wave */}
      <div className="relative bg-gray-900 text-white overflow-hidden">
        <WaveDivider />
        <div className="py-20 px-4">
          <div className="container mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Ready to Begin Your Journey?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Let&apos;s work together to bring your vision to life
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-200"
            >
              Start Your Project →
            </motion.button>
          </div>
        </div>
        <div className="w-full h-16 bg-gray-900 -mt-1"></div>
      </div>
    </div>
  );
}
