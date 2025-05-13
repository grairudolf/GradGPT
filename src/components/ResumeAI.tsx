
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import { supabase } from '@/integrations/supabase/client';

const ResumeAI = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [education, setEducation] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [trialCount, setTrialCount] = useState(3);
  
  const generateResume = async () => {
    if (!jobTitle || !experience || !skills || !education) {
      toast.error('Please fill in all fields');
      return;
    }
    
    if (trialCount <= 0) {
      toast.error('You have no free trials remaining. Please upgrade your plan.');
      return;
    }
    
    setIsGenerating(true);
    
    try {
      // This would call a Supabase Edge Function in a real implementation
      // For now, we'll simulate an API response
      setTimeout(() => {
        const mockGeneratedResume = `
# ${jobTitle.toUpperCase()} | Professional Resume

## PROFESSIONAL SUMMARY
Dedicated and results-driven ${jobTitle} with extensive experience in ${experience.split('.')[0].toLowerCase()}. Proven track record of ${skills.split(',')[0].toLowerCase()} and ${skills.split(',')[1]?.toLowerCase() || 'problem-solving'}. Seeking to leverage my skills and experience in a challenging role.

## SKILLS
${skills.split(',').map(skill => '- ' + skill.trim()).join('\n')}

## WORK EXPERIENCE

### ${jobTitle} | XYZ Company
*January 2020 - Present*

- Spearheaded initiatives that resulted in 30% increase in operational efficiency
- Collaborated with cross-functional teams to implement new processes
- Managed projects from conception to completion, ensuring timely delivery

### Junior ${jobTitle} | ABC Corporation
*June 2017 - December 2019*

- Assisted in the development and implementation of company strategies
- Contributed to team projects, resulting in successful outcomes
- Acquired and applied industry best practices

## EDUCATION
${education}

## CERTIFICATIONS
- Professional ${jobTitle} Certification
- Advanced Skills in ${skills.split(',')[0].trim()}

## REFERENCES
Available upon request
        `;
        
        setGeneratedContent(mockGeneratedResume);
        setTrialCount(prevCount => prevCount - 1);
        toast.success('Resume generated successfully!');
        setIsGenerating(false);
      }, 3000);
    } catch (error) {
      toast.error('Failed to generate resume. Please try again.');
      setIsGenerating(false);
    }
  };
  
  const downloadResume = () => {
    if (!generatedContent) {
      toast.error('No resume to download');
      return;
    }
    
    const element = document.createElement('a');
    const file = new Blob([generatedContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${jobTitle.replace(/\s+/g, '_')}_Resume.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast.success('Resume downloaded successfully!');
  };
  
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">AI Resume Generator</h2>
      <p className="text-gray-600 mb-8">
        Fill in the details below and our AI will create a professional resume tailored to your profile and target job.
        <span className="block mt-2 text-brand-blue font-medium">Free Trials Remaining: {trialCount}</span>
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Resume Information</CardTitle>
              <CardDescription>
                Provide details about your professional background
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Target Job Title</Label>
                <Input 
                  id="jobTitle" 
                  placeholder="e.g. Software Engineer" 
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="experience">Work Experience</Label>
                <Textarea 
                  id="experience" 
                  placeholder="Briefly describe your relevant work experience"
                  className="min-h-[100px]"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="skills">Key Skills</Label>
                <Textarea 
                  id="skills" 
                  placeholder="List your skills, separated by commas"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="education">Education</Label>
                <Textarea 
                  id="education" 
                  placeholder="e.g. BSc in Computer Science, University of Lagos, 2020"
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                onClick={generateResume} 
                disabled={isGenerating}
                className="bg-brand-blue hover:bg-brand-blue-dark"
              >
                {isGenerating ? (
                  <>
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : 'Generate Resume'}
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Generated Resume</CardTitle>
              <CardDescription>
                Your AI-generated resume will appear here
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isGenerating ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <Loader className="h-8 w-8 animate-spin text-brand-blue mb-4" />
                  <p className="text-gray-600">Our AI is crafting your professional resume...</p>
                </div>
              ) : generatedContent ? (
                <div className="bg-gray-50 rounded-md p-4 whitespace-pre-line font-mono text-sm h-[400px] overflow-y-auto">
                  {generatedContent}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 max-w-xs">
                    Fill in your details on the left and click "Generate Resume" to create your professional document
                  </p>
                </div>
              )}
            </CardContent>
            {generatedContent && (
              <CardFooter>
                <Button 
                  onClick={downloadResume}
                  className="w-full bg-brand-blue hover:bg-brand-blue-dark"
                >
                  Download Resume
                </Button>
              </CardFooter>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResumeAI;
