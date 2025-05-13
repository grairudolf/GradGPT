
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/components/ui/sonner';

const templateData = [
  {
    id: 'template-1',
    title: 'Modern Professional',
    category: 'CV',
    preview: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTg2OTExNg&ixlib=rb-4.0.3&q=80&w=1080',
    country: 'Nigeria',
    color: 'blue',
    description: 'A clean and modern template ideal for corporate roles. Features a sidebar for quick info scanning.'
  },
  {
    id: 'template-2',
    title: 'Corporate Classic',
    category: 'CV',
    preview: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjgyMzU0ODg0&ixlib=rb-4.0.3&q=80&w=1080',
    country: 'Kenya',
    color: 'teal',
    description: 'A traditional template with a conservative layout, perfect for banking, finance, and government applications.'
  },
  {
    id: 'template-3',
    title: 'Academic Excellence',
    category: 'CV',
    preview: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTg2OTA4Ng&ixlib=rb-4.0.3&q=80&w=1080',
    country: 'South Africa',
    color: 'purple',
    description: 'Designed for researchers, professors, and doctoral candidates. Features sections for publications and conferences.'
  },
  {
    id: 'template-4',
    title: 'Creative Portfolio',
    category: 'CV',
    preview: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTg2OTEzMA&ixlib=rb-4.0.3&q=80&w=1080',
    country: 'Ghana',
    color: 'orange',
    description: 'A vibrant template for creative professionals, with space for portfolio highlights and visual elements.'
  },
  {
    id: 'template-5',
    title: 'Minimal Design',
    category: 'Cover Letter',
    preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTg2OTE1MA&ixlib=rb-4.0.3&q=80&w=1080',
    country: 'Cameroon',
    color: 'green',
    description: 'An elegant, minimal design with plenty of whitespace. Perfect for all industries and positions.'
  },
  {
    id: 'template-6',
    title: 'Executive Pro',
    category: 'CV',
    preview: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjgyMzU0ODg0&ixlib=rb-4.0.3&q=80&w=1080',
    country: 'Nigeria',
    color: 'blue',
    description: 'A premium template for senior executives and directors, with emphasis on leadership and achievements.'
  },
  {
    id: 'template-7',
    title: 'Tech Innovator',
    category: 'CV',
    preview: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTg2OTExNg&ixlib=rb-4.0.3&q=80&w=1080',
    country: 'Kenya',
    color: 'teal',
    description: 'Designed for IT professionals, with sections for technical skills, projects, and certifications.'
  },
  {
    id: 'template-8',
    title: 'Graduate Entry',
    category: 'CV',
    preview: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTg2OTA4Ng&ixlib=rb-4.0.3&q=80&w=1080',
    country: 'Ghana',
    color: 'orange',
    description: 'Perfect for recent graduates with limited work experience. Highlights education and transferable skills.'
  }
];

const TemplatesPage = () => {
  const { user } = useAuth();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Categories and countries from data
  const categories = ['All', 'CV', 'Cover Letter', 'Both'];
  const countries = ['All', 'Nigeria', 'Kenya', 'South Africa', 'Ghana', 'Cameroon'];
  
  // Filter templates based on selections
  const filteredTemplates = templateData.filter(template => {
    const categoryMatch = activeCategory === 'All' || template.category === activeCategory;
    const countryMatch = selectedCountry === 'All' || template.country === selectedCountry;
    const searchMatch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                       template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && countryMatch && searchMatch;
  });
  
  const handleUseTemplate = () => {
    if (!user) {
      toast.error("Please sign in to use this template");
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Resume & CV <span className="text-brand-blue">Templates</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Choose from our collection of professional templates designed specifically for African job markets
            </p>
          </div>
          
          {/* Filters and Search */}
          <div className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Category Filter */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Template Type</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <Button 
                      key={category} 
                      variant={activeCategory === category ? "default" : "outline"}
                      size="sm" 
                      className={activeCategory === category ? "bg-brand-blue hover:bg-brand-blue-dark" : ""}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Country Filter */}
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <select
                  id="country"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              
              {/* Search */}
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search templates..."
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          {/* Templates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTemplates.map((template) => (
              <div 
                key={template.id} 
                className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden transition-all hover:shadow-lg"
              >
                <div className="relative">
                  <AspectRatio ratio={3/4} className="bg-gray-100 overflow-hidden">
                    <img 
                      src={template.preview} 
                      alt={template.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </AspectRatio>
                  <div className="absolute top-2 right-2">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-${template.color}-100 text-${template.color}-800`}>
                      {template.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 w-full">
                      {user ? (
                        <Link to={`/editor/${template.id}`}>
                          <Button className="w-full bg-white text-gray-900 hover:bg-white/90">
                            Use Template
                          </Button>
                        </Link>
                      ) : (
                        <Link to="/login" onClick={handleUseTemplate}>
                          <Button className="w-full bg-white text-gray-900 hover:bg-white/90">
                            Sign in to Use
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-medium text-gray-900">{template.title}</h3>
                    <span className="text-sm text-brand-blue">{template.country}</span>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-2">{template.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {filteredTemplates.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">No templates found</h3>
              <p className="text-gray-600">Try adjusting your filters or search query</p>
            </div>
          )}
          
          {/* AI Resume Builder CTA */}
          <div className="mt-16 bg-brand-blue text-white rounded-lg p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Need help creating your content?</h2>
              <p className="text-lg mb-6">
                Use our AI-powered Resume Generator to create professional content tailored to your experience and target job.
              </p>
              <Link to="/resume-ai">
                <Button className="bg-white text-brand-blue hover:bg-gray-100">
                  Try Our AI Resume Generator
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TemplatesPage;
