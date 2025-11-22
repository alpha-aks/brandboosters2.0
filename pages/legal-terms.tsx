import { motion } from "framer-motion";
import Head from "next/head";

export default function LegalTerms() {
  return (
    <>
      <Head>
        <title>Legal Terms - BrandBoosters</title>
        <meta name="description" content="BrandBoosters Legal Terms and Conditions" />
      </Head>
      
      <main className="min-h-screen bg-white pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Legal Terms & Conditions
          </motion.h1>
          
          <motion.div 
            className="prose prose-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="text-gray-600 mb-6">Last updated: November 22, 2025</p>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using the BrandBoosters website and services, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Services</h2>
              <p className="mb-4">
                BrandBoosters provides digital marketing, branding, and related services as described on our website. 
                We reserve the right to modify or discontinue any service at any time without notice.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Intellectual Property</h2>
              <p className="mb-4">
                All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, 
                data compilations, and software, is the property of BrandBoosters or its content suppliers and protected by 
                international copyright laws.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. User Conduct</h2>
              <p className="mb-4">You agree not to use the services to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Upload, post, email, or otherwise transmit any content that is unlawful, harmful, or offensive</li>
                <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity</li>
                <li>Interfere with or disrupt the service or servers or networks connected to the service</li>
                <li>Violate any applicable local, state, national, or international law</li>
              </ul>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Limitation of Liability</h2>
              <p className="mb-4">
                BrandBoosters shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, 
                goodwill, or other intangible losses resulting from:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Your access to or use of or inability to access or use the services</li>
                <li>Any conduct or content of any third party on the services</li>
                <li>Any content obtained from the services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Indemnification</h2>
              <p className="mb-4">
                You agree to indemnify and hold harmless BrandBoosters and its officers, directors, employees, and agents 
                from and against any claims, liabilities, damages, losses, and expenses, including without limitation, 
                reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the services 
                or your violation of these terms.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Governing Law</h2>
              <p className="mb-4">
                These terms shall be governed by and construed in accordance with the laws of India. 
                Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Mumbai.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these terms at any time. We will provide notice of any changes by posting the updated terms on our website. 
                Your continued use of our services after such changes constitutes your acceptance of the new terms.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about these Legal Terms, please contact us at:
              </p>
              <p className="mb-2">Email: legal@brandboosters.marketing</p>
              <p>Website: www.brandboosters.marketing</p>
            </section>
          </motion.div>
        </div>
      </main>
    </>
  );
}
