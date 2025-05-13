
import React from 'react';
import { CircleCheck, FileText, Globe, LinkedinIcon, RefreshCw, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const featureItems = [
  {
    icon: <Globe className="h-10 w-10 text-brand-blue" />,
    title: 'Localized Templates',
    description: 'Country-specific CV formats optimized for local job markets across Africa'
  },
  {
    icon: <FileText className="h-10 w-10 text-brand-blue" />,
    title: 'ATS-Friendly',
    description: 'Engineered to pass through Applicant Tracking Systems with optimal keyword matching'
  },
  {
    icon: <LinkedinIcon className="h-10 w-10 text-brand-blue" />,
    title: 'LinkedIn Import',
    description: 'Seamlessly import your LinkedIn profile to create your CV in seconds'
  },
  {
    icon: <Sparkles className="h-10 w-10 text-brand-blue" />,
    title: 'AI-Powered Content',
    description: 'Generate professionally written content tailored to your target position'
  },
  {
    icon: <RefreshCw className="h-10 w-10 text-brand-blue" />,
    title: 'Real-Time Updates',
    description: 'Make changes and see your CV update instantly with collaborative editing'
  },
  {
    icon: <CircleCheck className="h-10 w-10 text-brand-blue" />,
    title: 'Employer Approved',
    description: 'Templates reviewed and approved by HR professionals from leading African companies'
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Built for <span className="text-brand-blue">African</span> Job Markets
          </h2>
          <p className="text-gray-600 text-lg">
            Our platform is designed specifically for the unique needs of job seekers across various African countries, with features that improve your chances of getting hired.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((feature, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-white rounded-lg p-6 shadow-sm border border-gray-100",
                "transform transition duration-300 hover:-translate-y-1 hover:shadow-md"
              )}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
