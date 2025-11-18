'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your brand online.',
    href: '/services/digital-marketing',
    features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'Analytics & Reporting']
  },
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    href: '/services/web-development',
    features: ['Responsive Design', 'E-commerce Solutions', 'CMS Integration', 'Performance Optimization']
  },
  {
    title: 'Graphic Design',
    description: 'Creative visual solutions that make your brand stand out.',
    href: '/services/graphic-design',
    features: ['Brand Identity', 'Marketing Materials', 'UI/UX Design', 'Print Design']
  },
  {
    title: 'Content Creation',
    description: 'Engaging content that connects with your audience.',
    href: '/services/content-creation',
    features: ['Blog Writing', 'Social Media Content', 'Video Scripts', 'Email Campaigns']
  },
  {
    title: 'Video Editing',
    description: 'Professional video production and editing services.',
    href: '/services/video-editing',
    features: ['Corporate Videos', 'Social Media Content', 'Promotional Videos', 'Post-Production']
  },
  {
    title: 'SEO Services',
    description: 'Improve your search engine rankings and organic traffic.',
    href: '/services/seo',
    features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Technical SEO']
  },
  {
    title: 'Social Media Marketing',
    description: 'Build and engage your community across social platforms.',
    href: '/services/social-media-marketing',
    features: ['Strategy Development', 'Content Planning', 'Community Management', 'Paid Advertising']
  },
  {
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce solutions to boost your online sales.',
    href: '/services/ecommerce',
    features: ['Store Setup', 'Payment Integration', 'Inventory Management', 'Marketing Automation']
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive digital solutions to help your brand grow and succeed in the modern marketplace
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={service.href}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group-hover:border-gray-200 h-full">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-500 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how we can help transform your business with our comprehensive digital solutions.
            </p>
            <Link href="/contact">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Get In Touch
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}