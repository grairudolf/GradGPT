
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-brand-blue">GradGPT</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Empowering Africa's next generation of professionals with AI-powered career tools
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                GradGPT was founded with a clear mission: to bridge the gap between education and employment for African graduates through technology. We believe that every talented individual deserves the opportunity to showcase their skills and potential to employers, regardless of their background or resources.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our AI-powered platform is designed specifically for the African context, taking into account the unique challenges and opportunities faced by job seekers across the continent. By providing localized CV and cover letter templates, AI-assisted content generation, and career guidance, we aim to level the playing field and help talented individuals secure the opportunities they deserve.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                GradGPT was born out of a personal frustration experienced by our founder, who witnessed firsthand the challenges faced by talented graduates from African universities when applying for jobs. Despite having excellent qualifications, many were overlooked simply because their applications didn't meet the expectations of modern Applicant Tracking Systems (ATS) or follow country-specific best practices.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                In 2023, we assembled a team of AI specialists, career advisors, and HR professionals with deep knowledge of hiring practices across different African regions. Together, we built GradGPT - a platform that combines the power of artificial intelligence with human expertise to create truly effective career documents.
              </p>
              <p className="text-lg text-gray-700">
                Today, we're proud to have helped thousands of graduates from Nigeria, Kenya, South Africa, Ghana, Cameroon and beyond to secure interviews and job offers at leading companies both locally and internationally.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose GradGPT?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-brand-blue">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Localized Expertise</h3>
                <p className="text-gray-600">
                  Our templates and AI models are specifically designed for African job markets, with country-specific formats that employers recognize and respect.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-brand-orange">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">ATS-Optimized</h3>
                <p className="text-gray-600">
                  Our documents are engineered to pass through Applicant Tracking Systems with flying colors, ensuring your application actually reaches human recruiters.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Advanced AI</h3>
                <p className="text-gray-600">
                  We leverage cutting-edge language models to help you articulate your skills and experiences in a compelling, professional manner.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-brand-blue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Professional Profile?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of African graduates who have transformed their job search with GradGPT
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-6 text-lg">
                  Get Started For Free
                </Button>
              </Link>
              <Link to="/templates">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  Browse Templates
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
