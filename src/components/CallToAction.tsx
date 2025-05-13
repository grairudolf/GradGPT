
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-blue-light text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to build your professional future?</h2>
          <p className="text-xl mb-8">
            Join thousands of African graduates who are landing interviews with GradGPT-powered CVs and cover letters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
                Get Started Free
              </Button>
            </Link>
            <Link to="/templates">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Explore Templates
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-100">
            No credit card required. Free plan includes 1 CV and 1 cover letter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
