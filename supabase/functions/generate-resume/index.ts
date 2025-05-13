
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { jobTitle, experience, skills, education, country } = await req.json();

    // Construct the prompt for the AI
    const prompt = `
Create a professional resume for a ${jobTitle} in ${country || 'Africa'} with the following details:

Experience: ${experience}
Skills: ${skills}
Education: ${education}

Please format the resume with these sections:
1. Professional Summary (compelling and concise)
2. Professional Experience (with achievements and responsibilities)
3. Skills (organized by relevance)
4. Education
5. Optional certifications or additional sections

Make sure the content is ATS-friendly, uses strong action verbs, and quantifies achievements where possible.
`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You are a professional resume writer specializing in African job markets. Create concise, professional content optimized for ATS systems.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    const generatedResume = data.choices[0].message.content;

    return new Response(JSON.stringify({ generatedResume }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error generating resume:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
