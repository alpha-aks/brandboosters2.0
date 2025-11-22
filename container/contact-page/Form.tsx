'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import Link from 'next/link';

interface FormData {
  name: string;
  company: string;
  goal: string;
  email: string;
  budget: string;
  message: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    goal: "",
    email: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({ 
          success: true, 
          message: 'Thank you! Your message has been sent successfully.' 
        });
        // Reset form
        setFormData({
          name: "",
          company: "",
          goal: "",
          email: "",
          budget: "",
          message: ""
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        success: false, 
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full padding-x padding-y">
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-[15px]">
        {/* Row 1: Name + Company */}
        <div className="w-full flex gap-[15px] sm:flex-col xm:flex-col">
          <div className="flex gap-[10px] w-[50%] sm:w-full xm:w-full sm:flex-col xm:flex-col">
            <div className="xl:min-w-max lg:min-w-max md:min-w-max">
              <h2 className="sub-heading font-NeueMontreal font-normal text-secondry">Hi! My name is</h2>
            </div>
            <div className="w-full">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name*" className="paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out sm:w-full xm:w-full" required />
            </div>
          </div>
          <div className="flex gap-[10px] w-[50%] sm:w-full xm:w-full sm:flex-col xm:flex-col">
            <div className="xl:min-w-max lg:min-w-max md:min-w-max">
              <h2 className="sub-heading font-NeueMontreal font-normal text-secondry">and I work with</h2>
            </div>
            <div className="w-full">
              <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company name type here*" className="paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out sm:w-full xm:w-full" />
            </div>
          </div>
        </div>

        {/* Row 2: Goal */}
        <div className="w-full flex gap-[10px]">
          <div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
            <div className="xl:min-w-max lg:min-w-max md:min-w-max">
              <h2 className="sub-heading font-NeueMontreal font-normal text-secondry">I’m looking for a partner to help me with</h2>
            </div>
            <div className="w-full">
              <input type="text" name="goal" value={formData.goal} onChange={handleChange} placeholder="Your goal type here*" className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full sm:w-full xm:w-full" />
            </div>
          </div>
        </div>

        {/* Row 3: Email */}
        <div className="w-full flex gap-[10px]">
          <div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
            <div className="xl:min-w-max lg:min-w-max md:min-w-max">
              <h2 className="sub-heading font-NeueMontreal font-normal text-secondry">With an idea of having that completed</h2>
            </div>
            <div className="w-full">
              <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full sm:w-full xm:w-full" />
            </div>
          </div>
        </div>

        {/* Row 4: Budget */}
        <div className="w-full flex gap-[10px]">
          <div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
            <div className="xl:min-w-max lg:min-w-max md:min-w-max">
              <h2 className="sub-heading font-NeueMontreal font-normal text-secondry">I am hoping to stay around a budget range of</h2>
            </div>
            <div className="w-full">
              <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out">
                <option value="">Select budget range</option>
                <option value="$1k-$5k">$1k-$5k</option>
                <option value="$5k-$10k">$5k-$10k</option>
                <option value="$10k-$20k">$10k-$20k</option>
                <option value="$20k+">$20k+</option>
              </select>
            </div>
          </div>
        </div>

        {/* Row 5: Message */}
        <div className="w-full flex gap-[10px]">
          <div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
            <div className="xl:min-w-max lg:min-w-max md:min-w-max">
              <h2 className="sub-heading font-NeueMontreal font-normal text-secondry">Optionally, i’m sharing more:</h2>
            </div>
            <div className="w-full">
              <input type="text" name="message" value={formData.message} onChange={handleChange} placeholder="Product details type here..." className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full sm:w-full xm:w-full" />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="w-full flex items-center justify-end sm:justify-start xm:justify-start pt-[50px]">
          <div className="flex items-center gap-4">
            <button type="submit" disabled={isSubmitting} className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-secondry bg-secondry px-6 py-3 font-NeueMontreal text-sm font-medium text-background hover:bg-background hover:text-secondry focus:outline-none focus:ring-2 focus:ring-secondry focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ease-in-out">
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
            {submitStatus && (
              <div className={`ml-4 p-3 rounded ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitStatus.message}
              </div>
            )}
            <div className="flex items-center gap-2 ml-4">
              <p className="paragraph text-secondry font-NeueMontreal font-normal">I agree with the</p>
              <Link className="paragraph font-medium font-NeueMontreal text-secondry capitalize hover:underline" href={"/privacy-policy"}>
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
