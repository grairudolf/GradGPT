
# GradGPT - AI-Powered CV Generator for African Students

![GradGPT Logo](https://via.placeholder.com/200x100?text=GradGPT)

## Overview

GradGPT is an AI-powered platform designed specifically for African students and job seekers to create professional, ATS-friendly CVs and cover letters optimized for local job markets. The platform offers country-specific templates, AI-generated content, and professional guidance to help users stand out in competitive job markets across Africa.

## Key Features

- **AI-Powered Resume Generation**: Create professionally written content tailored to your target position with our AI engine
- **Localized Templates**: Country-specific CV formats optimized for job markets in Nigeria, Kenya, South Africa, Ghana, and more
- **ATS-Friendly Designs**: Templates engineered to pass through Applicant Tracking Systems with optimal keyword matching
- **LinkedIn Profile Import**: Seamlessly import your LinkedIn profile to create your CV in seconds
- **Real-Time Collaboration**: Make changes and see your CV update instantly with collaborative editing
- **Employer-Approved Templates**: Templates reviewed and approved by HR professionals from leading African companies

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A Supabase account for backend functionality

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gradgpt
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
- Create a `.env` file in the root directory
- Add your Supabase credentials:
```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

4. Start the development server:
```bash
npm run dev
```

## Usage

1. **Sign Up/Login**: Create an account or log in using email, Google, or LinkedIn
2. **Browse Templates**: Explore templates optimized for different African countries and industries
3. **AI Resume Generator**: Use the AI-powered resume generator with 3 free trials
4. **Customize**: Edit and customize your resume with our intuitive editor
5. **Download**: Download your resume in various formats

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Supabase (Authentication, Database, Storage)
- **AI Integration**: OpenAI API for resume generation
- **Deployment**: Vite for bundling and building

## Project Structure

```
gradgpt/
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable UI components
│   ├── contexts/      # React contexts (Auth, etc.)
│   ├── hooks/         # Custom React hooks
│   ├── integrations/  # Third-party service integrations
│   ├── lib/           # Utility functions
│   ├── pages/         # Application pages
│   └── App.tsx        # Main application component
├── supabase/          # Supabase configuration and functions
└── README.md          # This file
```

## Authentication

GradGPT supports multiple authentication methods:
- Email/Password
- Google OAuth
- LinkedIn OAuth

Users need to configure OAuth providers in their Supabase dashboard for social login functionality.

## AI Resume Generator

The platform includes an AI-powered resume generator that helps users create professional content. Each user gets 3 free trials before requiring an upgrade.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please contact [support@gradgpt.com](mailto:support@gradgpt.com) or open an issue on our GitHub repository.

## Roadmap

- Mobile app version
- Additional African countries support
- Interview preparation tools
- Job application tracking
- Employer dashboard for recruiters
