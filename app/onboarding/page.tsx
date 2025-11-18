'use client';

import { motion } from 'framer-motion';
import { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
  interests: string[];
}

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    interests: [] as string[]
  });
  const router = useRouter();

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to BrandBoosters</h1>
          <p className="text-gray-600">Let&apos;s get you set up in just a few steps</p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
            style={{ width: `${(step / 3) * 100}%` }}
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
                {['Web Development', 'Digital Marketing', 'Branding', 'Content Creation', 'Social Media'].map((service) => (
                  <label key={service} className="flex items-center justify-center">
                    <input 
                      type="checkbox" 
                      name="interests"
                      value={service}
                      checked={formData.interests.includes(service)}
                      onChange={handleInputChange}
                      className="rounded text-blue-600 mr-2" 
                    />
                    <span>{service}</span>
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
            className={`px-6 py-2 rounded-lg ${
              step === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'
            }`}
          >
            Back
          </button>
          
          <button
            onClick={nextStep}
            disabled={isLoading}
            className={`bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
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