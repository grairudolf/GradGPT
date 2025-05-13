
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Dashboard = () => {
  const { user } = useAuth();
  
  // Default tabs
  const [activeTab, setActiveTab] = useState('resumes');
  
  // Mock documents data (would be fetched from backend in production)
  const resumeDocuments = [
    { id: 'resume-1', name: 'Software Engineer Resume', lastEdited: '2023-05-10', template: 'Modern Professional' }
  ];
  
  const coverLetterDocuments = [
    { id: 'cover-1', name: 'Application for Data Analyst', lastEdited: '2023-05-08', template: 'Corporate Classic' }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold">Welcome, {user?.user_metadata?.first_name || 'User'}</h1>
              <p className="text-gray-600 mt-1">Manage your career documents and create new ones</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link to="/templates">
                <Button className="bg-brand-blue hover:bg-brand-blue-dark">
                  Create New Document
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Dashboard tabs */}
          <div className="border-b border-gray-200 mb-8">
            <div className="flex overflow-x-auto">
              <button
                className={`px-4 py-2 font-medium text-sm border-b-2 ${activeTab === 'resumes' ? 'border-brand-blue text-brand-blue' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('resumes')}
              >
                Resumes & CVs
              </button>
              <button
                className={`px-4 py-2 font-medium text-sm border-b-2 ${activeTab === 'coverLetters' ? 'border-brand-blue text-brand-blue' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('coverLetters')}
              >
                Cover Letters
              </button>
              <button
                className={`px-4 py-2 font-medium text-sm border-b-2 ${activeTab === 'trials' ? 'border-brand-blue text-brand-blue' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('trials')}
              >
                Free Trials
              </button>
            </div>
          </div>
          
          {/* Resumes & CVs Tab */}
          {activeTab === 'resumes' && (
            <>
              {resumeDocuments.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resumeDocuments.map(doc => (
                    <Card key={doc.id} className="overflow-hidden">
                      <CardHeader className="p-4">
                        <CardTitle className="text-lg">{doc.name}</CardTitle>
                        <CardDescription>Using {doc.template} template</CardDescription>
                      </CardHeader>
                      <AspectRatio ratio={4/3} className="bg-gray-100">
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          Resume Preview
                        </div>
                      </AspectRatio>
                      <CardFooter className="flex justify-between p-4">
                        <p className="text-sm text-gray-500">Last edited: {doc.lastEdited}</p>
                        <Link to={`/editor/${doc.id}`}>
                          <Button variant="outline" size="sm">Edit</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                  
                  {/* Create new resume card */}
                  <Link to="/templates" className="block">
                    <Card className="h-full border-dashed border-2 hover:border-brand-blue hover:bg-brand-blue/5 transition-colors">
                      <div className="flex flex-col items-center justify-center h-full p-6">
                        <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-brand-blue">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                        <h3 className="font-medium text-lg text-brand-blue">Create New Resume</h3>
                        <p className="text-sm text-gray-500 text-center mt-2">
                          Choose from our professional templates
                        </p>
                      </div>
                    </Card>
                  </Link>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-brand-blue">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">No Resumes Yet</h3>
                  <p className="text-gray-600 mb-6">Create your first resume to get started</p>
                  <Link to="/templates">
                    <Button className="bg-brand-blue hover:bg-brand-blue-dark">
                      Create Resume
                    </Button>
                  </Link>
                </div>
              )}
            </>
          )}
          
          {/* Cover Letters Tab */}
          {activeTab === 'coverLetters' && (
            <>
              {coverLetterDocuments.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {coverLetterDocuments.map(doc => (
                    <Card key={doc.id} className="overflow-hidden">
                      <CardHeader className="p-4">
                        <CardTitle className="text-lg">{doc.name}</CardTitle>
                        <CardDescription>Using {doc.template} template</CardDescription>
                      </CardHeader>
                      <AspectRatio ratio={4/3} className="bg-gray-100">
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          Cover Letter Preview
                        </div>
                      </AspectRatio>
                      <CardFooter className="flex justify-between p-4">
                        <p className="text-sm text-gray-500">Last edited: {doc.lastEdited}</p>
                        <Link to={`/editor/${doc.id}`}>
                          <Button variant="outline" size="sm">Edit</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                  
                  {/* Create new cover letter card */}
                  <Link to="/templates" className="block">
                    <Card className="h-full border-dashed border-2 hover:border-brand-blue hover:bg-brand-blue/5 transition-colors">
                      <div className="flex flex-col items-center justify-center h-full p-6">
                        <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-brand-blue">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                        <h3 className="font-medium text-lg text-brand-blue">Create New Cover Letter</h3>
                        <p className="text-sm text-gray-500 text-center mt-2">
                          Choose from our professional templates
                        </p>
                      </div>
                    </Card>
                  </Link>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-brand-blue">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">No Cover Letters Yet</h3>
                  <p className="text-gray-600 mb-6">Create your first cover letter to get started</p>
                  <Link to="/templates">
                    <Button className="bg-brand-blue hover:bg-brand-blue-dark">
                      Create Cover Letter
                    </Button>
                  </Link>
                </div>
              )}
            </>
          )}
          
          {/* Free Trials Tab */}
          {activeTab === 'trials' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4">Free Trial Status</h3>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <div>
                  <p className="text-lg font-medium">Free Trials Remaining</p>
                  <p className="text-gray-600">Use them to generate and download documents</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/templates">
                  <Button className="bg-brand-blue hover:bg-brand-blue-dark">
                    Use a Free Trial
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                    Upgrade Plan
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
