
import React from 'react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    content: "GradGPT helped me create a CV that perfectly fit Cameroon's job market requirements. I got called for 3 interviews within a week!",
    author: "Emile N.",
    role: "Software Engineer",
    university: "University of Yaoundé",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    content: "The localized templates for Nigeria were exactly what I needed. The AI suggestions for my cover letter were incredibly professional.",
    author: "Chioma O.",
    role: "Marketing Graduate",
    university: "University of Lagos",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    content: "As a Kenyan graduate, I struggled with international CV formats. GradGPT's country-specific templates made all the difference in my job search.",
    author: "David M.",
    role: "Finance Analyst",
    university: "University of Nairobi",
    image: "https://i.pravatar.cc/150?img=8"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-brand-blue-dark text-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Success Stories from <span className="text-brand-orange">African Graduates</span>
          </h2>
          <p className="text-gray-200 text-lg">
            Join thousands of students who have used GradGPT to land their dream jobs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <p className="text-gray-100 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-4 border-2 border-white">
                  <AvatarImage src={testimonial.image} alt={testimonial.author} />
                </Avatar>
                <div>
                  <p className="font-medium text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-300">{testimonial.role}, {testimonial.university}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
