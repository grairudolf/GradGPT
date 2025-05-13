
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/components/ui/sonner';
import { useAuth } from '@/contexts/AuthContext';

const templateData = [
  {
    id: 'template-1',
    title: 'Modern Professional',
    category: 'CV',
    preview: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTg2OTExNg&ixlib=rb-4.0.3&q=80&w=1080',
    country: 'Nigeria',
  },
  {
    id: 'template-2',
    title: 'Corporate Classic',
    category: 'CV',
    preview: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjgyMzU0ODg0&ixlib=rb-4.0.3&q=80&w=1080',
    country: 'Kenya',
  },
];

const Editor = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [template, setTemplate] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('personal');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    jobTitle: '',
    company: '',
    startDate: '',
    endDate: '',
    jobDescription: '',
    university: '',
    degree: '',
    gradYear: '',
    skills: ''
  });
  
  useEffect(() => {
    // Check authentication
    if (!user) {
      toast.error('Please sign in to use the editor');
      navigate('/login');
      return;
    }
    
    // Find template based on templateId
    const selectedTemplate = templateData.find(t => t.id === templateId);
    if (selectedTemplate) {
      setTemplate(selectedTemplate);
    } else {
      toast.error('Template not found');
      navigate('/templates');
    }
  }, [templateId, navigate, user]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSave = () => {
    // In a real implementation, save to Supabase
    toast.success('Document saved successfully!');
  };
  
  const handleGenerateAI = () => {
    toast.success('AI suggestions generated! Check the content below.');
    // In a real implementation, call Supabase Edge Function with OpenAI
    setFormData(prev => ({
      ...prev,
      summary: 'Results-driven professional with 5+ years of experience in web development and digital marketing. Proven track record of delivering high-quality projects on time and within budget.',
      jobDescription: 'Led a team of 5 developers to build and maintain e-commerce platforms. Implemented new features that increased conversion rates by 25%. Collaborated with marketing teams to optimize website performance and user experience.'
    }));
  };
  
  const handleExport = () => {
    toast.success('Document exported successfully!');
  };
  
  if (!template) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <p>Loading editor...</p>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Left sidebar - Template preview */}
            <div className="w-full md:w-1/3 lg:w-1/4">
              <div className="sticky top-6">
                <Card className="overflow-hidden">
                  <AspectRatio ratio={3/4} className="bg-gray-100">
                    <img 
                      src={template.preview} 
                      alt={template.title} 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold">{template.title}</h2>
                    <p className="text-sm text-gray-500">{template.category} - {template.country}</p>
                  </div>
                </Card>
                
                <div className="mt-4 flex flex-col gap-3">
                  <Button 
                    onClick={handleSave}
                    className="w-full bg-brand-blue hover:bg-brand-blue-dark"
                  >
                    Save Document
                  </Button>
                  <Button 
                    onClick={handleExport}
                    variant="outline"
                    className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                  >
                    Export PDF
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Main content - Editor form */}
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-6">Edit Your {template.category}</h1>
              
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-4 mb-8">
                  <TabsTrigger value="personal">Personal Info</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                </TabsList>
                
                {/* Personal Info Tab */}
                <TabsContent value="personal" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input 
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+234 123 456 7890"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Location</Label>
                      <Input 
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Lagos, Nigeria"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="summary">Professional Summary</Label>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={handleGenerateAI}
                        className="text-brand-blue hover:text-brand-blue-dark"
                      >
                        Generate with AI
                      </Button>
                    </div>
                    <Textarea 
                      id="summary"
                      name="summary"
                      value={formData.summary}
                      onChange={handleInputChange}
                      placeholder="A brief summary of your professional background, skills, and career goals..."
                      className="min-h-[120px]"
                    />
                  </div>
                </TabsContent>
                
                {/* Experience Tab */}
                <TabsContent value="experience" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input 
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        placeholder="Software Engineer"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input 
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="ABC Company Ltd"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="startDate">Start Date</Label>
                      <Input 
                        id="startDate"
                        name="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="endDate">End Date</Label>
                      <Input 
                        id="endDate"
                        name="endDate"
                        type="date"
                        value={formData.endDate}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="jobDescription">Job Description</Label>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={handleGenerateAI}
                        className="text-brand-blue hover:text-brand-blue-dark"
                      >
                        Generate with AI
                      </Button>
                    </div>
                    <Textarea 
                      id="jobDescription"
                      name="jobDescription"
                      value={formData.jobDescription}
                      onChange={handleInputChange}
                      placeholder="Describe your responsibilities, achievements, and the impact you made in this role..."
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button className="bg-brand-blue hover:bg-brand-blue-dark">
                    + Add Another Position
                  </Button>
                </TabsContent>
                
                {/* Education Tab */}
                <TabsContent value="education" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="university">University/Institution</Label>
                      <Input 
                        id="university"
                        name="university"
                        value={formData.university}
                        onChange={handleInputChange}
                        placeholder="University of Lagos"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="degree">Degree & Field of Study</Label>
                      <Input 
                        id="degree"
                        name="degree"
                        value={formData.degree}
                        onChange={handleInputChange}
                        placeholder="BSc Computer Science"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gradYear">Graduation Year</Label>
                    <Input 
                      id="gradYear"
                      name="gradYear"
                      value={formData.gradYear}
                      onChange={handleInputChange}
                      placeholder="2022"
                    />
                  </div>
                  <Button className="bg-brand-blue hover:bg-brand-blue-dark">
                    + Add Another Education
                  </Button>
                </TabsContent>
                
                {/* Skills Tab */}
                <TabsContent value="skills" className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="skills">Skills (separated by commas)</Label>
                    <Textarea 
                      id="skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleInputChange}
                      placeholder="JavaScript, React, Node.js, Project Management, Team Leadership, etc."
                      className="min-h-[150px]"
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Editor;
