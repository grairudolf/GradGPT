
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-8 pt-16 sm:pb-20 sm:pt-24 lg:pb-28 lg:pt-32">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
              <h1 className="font-extrabold tracking-tight text-gray-900 animate-fade-in">
                <span className="block text-brand-blue">AI-Powered CVs</span>
                <span className="block">For African Students</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-gray-600 animate-fade-in">
                GradGPT helps students across Africa create ATS-friendly, localized CV and cover letter formats that land interviews. Powered by AI, tailored for your local job market.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in">
                <Link to="/signup">
                  <Button className="bg-brand-blue hover:bg-brand-blue-dark text-white px-6 py-6 text-base font-medium w-full sm:w-auto">
                    Create Your CV
                  </Button>
                </Link>
                <Link to="/templates">
                  <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10 px-6 py-6 text-base font-medium w-full sm:w-auto">
                    View Templates
                  </Button>
                </Link>
              </div>
              <div className="mt-8 text-sm text-gray-500 animate-fade-in">
                <p>Already trusted by students from 20+ African universities</p>
              </div>
            </div>
            <div className="md:w-1/2 relative animate-fade-in">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 transform rotate-1 transition-transform hover:rotate-0 duration-300">
                <div className="p-4 bg-gray-50 border-b">
                  <div className="flex items-center">
                    <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                    <div className="ml-4 text-sm font-medium text-gray-500">Resume Preview</div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between border-b pb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">John Doe</h3>
                      <p className="text-gray-600 text-sm">Software Engineer</p>
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      <p>johndoe@example.com</p>
                      <p>+237 672 333 228</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold text-brand-blue border-b pb-1">Experience</h4>
                    <div className="mt-2">
                      <div className="flex justify-between">
                        <p className="font-medium">Frontend Developer</p>
                        <p className="text-sm text-gray-600">2021 - Present</p>
                      </div>
                      <p className="text-sm text-gray-800">TechAfrica Solutions</p>
                      <ul className="text-xs text-gray-600 mt-1 list-disc list-inside">
                        <li>Developed responsive web applications using React</li>
                        <li>Improved website performance by 40%</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold text-brand-blue border-b pb-1">Education</h4>
                    <div className="mt-2">
                      <div className="flex justify-between">
                        <p className="font-medium">University of Buea</p>
                        <p className="text-sm text-gray-600">2017 - 2021</p>
                      </div>
                      <p className="text-sm text-gray-800">B.Eng Computer Engineering</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
