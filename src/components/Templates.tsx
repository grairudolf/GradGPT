
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/components/ui/sonner';

const templateData = [
  {
    id: 'template-1',
    title: 'Modern Professional',
    category: 'CV',
    preview: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTg2OTExNg&ixlib=rb-4.0.3&q=80&w=1080',
    country: 'Nigeria',
    color: 'blue'
  },
  {
    id: 'template-2',
    title: 'Corporate Classic',
    category: 'CV',
    preview: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjgyMzU0ODg0&ixlib=rb-4.0.3&q=80&w=1080',
    country: 'Kenya',
    color: 'teal'
  },
  {
    id: 'template-3',
    title: 'Academic Excellence',
    category: 'CV',
    preview: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTg2OTA4Ng&ixlib=rb-4.0.3&q=80&w=1080',
    country: 'South Africa',
    color: 'purple'
  },
  {
    id: 'template-4',
    title: 'Creative Portfolio',
    category: 'CV',
    preview: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTg2OTEzMA&ixlib=rb-4.0.3&q=80&w=1080',
    country: 'Ghana',
    color: 'orange'
  },
  {
    id: 'template-5',
    title: 'Minimal Design',
    category: 'Cover Letter',
    preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTg2OTE1MA&ixlib=rb-4.0.3&q=80&w=1080',
    country: 'Cameroon',
    color: 'green'
  },
];

const Templates = () => {
  const { user } = useAuth();
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'CV', 'Cover Letter', 'Professional'];
  const countries = ['All', 'Nigeria', 'Kenya', 'South Africa', 'Ghana', 'Cameroon'];
  
  const [selectedCountry, setSelectedCountry] = useState('All');
  
  const filteredTemplates = templateData.filter(template => {
    const categoryMatch = activeFilter === 'All' || template.category === activeFilter;
    const countryMatch = selectedCountry === 'All' || template.country === selectedCountry;
    return categoryMatch && countryMatch;
  });

  const handleUseTemplate = () => {
    if (!user) {
      toast.error("Please sign in to use this template");
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Professional <span className="text-brand-blue">Templates</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Choose from dozens of professionally designed templates optimized for different African countries and industries.
          </p>
        </div>
        
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button 
                key={category} 
                variant={activeFilter === category ? "default" : "outline"} 
                className={activeFilter === category ? "bg-brand-blue hover:bg-brand-blue-dark" : ""}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Country filter */}
          <div>
            <select
              className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
        </div>
        
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
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-900">{template.title}</h3>
                  <span className="text-sm text-brand-blue">{template.country}</span>
                </div>
                <p className="text-sm text-gray-500">{template.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/templates">
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
              View All Templates
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Templates;
