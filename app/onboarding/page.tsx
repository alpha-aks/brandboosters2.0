'use client';

import { motion } from 'framer-motion';
import { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface FormData {
  interests: string[];
  name: string;
  email: string;
  businessType: string;
}

const businessTypes = [
  'Startup', 'Small Business', 'Agency', 'Enterprise', 'Freelancer'
];

const services = [
  { id: 'web-dev', name: 'Web Development', icon: '🌐', color: '#FFD700' },
  { id: 'marketing', name: 'Digital Marketing', icon: '📈', color: '#FFA500' },
  { id: 'branding', name: 'Branding', icon: '🎨', color: '#FFD700' },
  { id: 'content', name: 'Content Creation', icon: '✍️', color: '#FFA500' },
  { id: 'social', name: 'Social Media', icon: '📱', color: '#FFD700' },
  { id: 'seo', name: 'SEO', icon: '🔍', color: '#FFA500' },
];

const serviceSteps = {
  'Web Development': [
    'Initial consultation call',
    'Project requirements gathering',
    'Design mockup approval',
    'Development phase',
    'Testing and revisions',
    'Launch and deployment'
  ],
  'Digital Marketing': [
    'Marketing strategy session',
    'Audience research',
    'Campaign planning',
    'Content creation',
    'Campaign launch',
    'Performance analysis'
  ],
  'Branding': [
    'Brand discovery workshop',
    'Market research',
    'Brand identity development',
    'Design system creation',
    'Brand guidelines',
    'Final delivery'
  ],
  'Content Creation': [
    'Content strategy session',
    'Content calendar planning',
    'Content creation',
    'Review and revisions',
    'Content publishing',
    'Performance tracking'
  ],
  'Social Media': [
    'Platform analysis',
    'Content strategy',
    'Content calendar setup',
    'Community management plan',
    'Campaign execution',
    'Analytics review'
  ],
  'SEO': [
    'Website audit',
    'Keyword research',
    'On-page optimization',
    'Technical SEO fixes',
    'Content optimization',
    'Monthly reporting'
  ]
};

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    interests: [] as string[],
    name: '',
    email: '',
    businessType: ''
  });

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      router.back();
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter((item: string) => item !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const nextStep = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      try {
        setIsLoading(true);
        // Submit the form data to the API
        const response = await fetch('/api/onboarding', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (response.ok) {
          // Redirect to the home page after successful submission
          router.push('/');
        }
      } catch (error) {
        console.error('Error submitting onboarding data:', error);
        // Handle error (e.g., show error message to user)
      } finally {
        setIsLoading(false);
      }
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  if (step === 3) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 py-12 px-4">
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={handleBack}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Go back"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-yellow-900 mb-3 font-display">Your Onboarding Journey</h1>
            <p className="text-xl text-yellow-800 font-medium">Here&apos;s what to expect next for your selected services</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-black">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-yellow-900 mb-6 text-center md:text-left">Your Onboarding Journey</h2>
              
              <div className="space-y-8">
                {formData.interests.map((service, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-yellow-100 pb-6 last:border-0 last:pb-0"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex items-center md:items-start space-x-3 md:space-x-4">
                        <div className="w-12 h-12 rounded-full bg-yellow-400 flex-shrink-0 flex items-center justify-center border-2 border-black">
                          <span className="text-xl">
                            {services.find(s => s.name === service)?.icon || '✨'}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-yellow-900">{service}</h3>
                      </div>
                      
                      <div className="ml-0 md:ml-4 mt-2 md:mt-0 flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {(serviceSteps[service as keyof typeof serviceSteps] || []).map((step, i) => (
                            <div key={i} className="flex items-start group">
                              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center mr-3 mt-0.5 border border-black">
                                <span className="text-xs font-bold text-yellow-900">{i + 1}</span>
                              </div>
                              <p className="text-sm text-yellow-900 group-hover:text-black transition-colors">{step}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 bg-yellow-100 rounded-lg p-4 border border-yellow-200">
                <p className="text-center text-yellow-900 font-medium">
                  Your dedicated account manager will contact you within 24 hours to schedule your first step.
                </p>
              </div>
            </div>
          </div>
        </div>
          
          <div className="mt-10 text-center">
            <p className="text-yellow-900 mb-6">
              Need help? <a href="mailto:support@brandboosters.com" className="font-bold text-yellow-700 hover:underline">Contact our support team</a>
            </p>
            <button
              onClick={() => router.push('/')}
              className="inline-flex items-center px-6 py-3 border-2 border-black text-base font-bold rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-yellow-400 hover:bg-yellow-300 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5 active:shadow-none active:translate-y-1 transition-all"
            >
              Back to Home
              <svg className="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 flex items-center justify-center p-4">
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={handleBack}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Go back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
      <div className="max-w-2xl w-full bg-yellow-50 border-2 border-black rounded-2xl shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-900 mb-2 font-display">Welcome to BrandBoosters</h1>
          <p className="text-yellow-800 font-medium">Let&apos;s get you set up in just a few steps</p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-yellow-200 rounded-full h-3 mb-8 border-2 border-black overflow-hidden">
          <div 
            className="bg-yellow-500 h-full rounded-full transition-all duration-300" 
            style={{ width: `${(step / 3) * 100}%`, boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)' }}
          ></div>
        </div>

        {/* Step Content */}
        <div className="mb-8 min-h-[200px]">
          {step === 1 && (
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Step 1: Welcome</h2>
              <p className="text-gray-600 mb-6">
                Thank you for choosing BrandBoosters. We&apos;re excited to help you grow your brand!
              </p>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Step 2: Your Preferences</h2>
              <p className="text-gray-600 mb-6">
                Let us know what kind of services you&apos;re interested in.
              </p>
              <div className="space-y-4">
                {services.map((service) => (
                  <label key={service.name} className="flex items-center justify-center group">
                    <div className="relative flex items-center">
                      <input 
                        type="checkbox" 
                        name="interests"
                        value={service.name}
                        checked={formData.interests.includes(service.name)}
                        onChange={handleInputChange}
                        className="sr-only peer" 
                      />
                      <div className={`w-5 h-5 rounded-sm border-2 border-black mr-3 flex items-center justify-center ${formData.interests.includes(service.name) ? 'bg-yellow-400' : 'bg-yellow-100'} group-hover:bg-yellow-300 transition-colors`}>
                        {formData.interests.includes(service.name) && (
                          <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="font-medium text-yellow-900 group-hover:text-black transition-colors">{service.name}</span>
                    </div>
                  </label>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Step 3: Complete Setup</h2>
              <p className="text-gray-600 mb-6">
                You&apos;re all set! Welcome to BrandBoosters.
              </p>
            </motion.div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className={`px-6 py-2 rounded-lg font-medium border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all ${
              step === 1 
                ? 'bg-yellow-200 text-yellow-500 cursor-not-allowed border-yellow-300' 
                : 'bg-yellow-400 text-black hover:bg-yellow-300 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5 active:shadow-none active:translate-y-1'
            }`}
          >
            Back
          </button>
          
          <button
            onClick={nextStep}
            disabled={isLoading}
            className={`bg-yellow-400 text-black px-6 py-2 rounded-lg font-medium border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:bg-yellow-300 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5 active:shadow-none active:translate-y-1 transition-all ${
              isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {step === 3 ? 'Finishing...' : 'Loading...'}
              </span>
            ) : step === 3 ? 'Get Started' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}