import Layout from '@/components/Layout';
import { useState, useEffect } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'Cover Letter Generator',
    description: `This MVP uses AI to generate personalized cover letters by analyzing a user’s resume, job description, and company info, matching relevant skills to job requirements.`,
    technologies: [
      'NLP', 'LLM', 'Prompt Engineering',
      'FastAPI', 'Next.js', 'Python', 'RESTful APIs'
    ],
    liveUrl: '#',
    githubUrl: '#',
    image: '/images/projects/cover_letter_generator/1.png',
  },
  {
    title: 'Italian Dream',
    description: `This project involves developing a website and client portal for an agency that assists students with pursuing higher education in Italy. The site provides program details, while the portal offers a dashboard for managing documents and payments.`,
    technologies: [
      'Java', 'Spring Boot','Spring Security', 'Angular', 'Postgres', 'Git'
    ],
    liveUrl: '#',
    githubUrl: '#',
    image: '/images/projects/italian_dream/ItalianDreamPicture.PNG',
  },
  {
    title: 'Smart Agriculture System',
    description: `This project enables users to monitor agricultural parameters in real-time, control actuators, and analyze plant health using computer vision.`,
    technologies: [
      'Angular', 'Spring Boot', 'Spring Security', 'IoT', 'ESP32', 'Raspberry Pi', 'YoloV8'
    ],
    liveUrl: '#',
    githubUrl: '#',
    image: '/images/projects/Smart Agriculture System/Visualisation.PNG',
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const total = projects.length;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  const handlePrev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const handleNext = () => setCurrent((prev) => (prev + 1) % total);

  const project = projects[current];

  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center px-8 py-12 md:py-16 bg-transparent">
        <div className="max-w-5xl w-full mx-auto">
          {/* No header */}
          <div className="flex items-center justify-center gap-4">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-secondary/40 hover:bg-primary/30 text-primary hover:text-primary-foreground transition disabled:opacity-50"
              aria-label="Previous Project"
              disabled={total < 2}
            >
              <ChevronLeft size={40} />
            </button>
            {/* Project Card */}
            <div className="flex-1 relative z-10">
              <div className="bg-card/90 backdrop-blur-sm border border-border rounded-3xl shadow-2xl p-8 md:p-14 flex flex-col items-center animate-fade-in-up transition-all duration-500"
                style={{ minWidth: '640px', maxWidth: '900px', minHeight: '35rem', width: '100%', boxSizing: 'border-box', overflow: 'hidden' }}>
                {/* Title at top center */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground text-center truncate w-full mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>{project.title}</h3>
                {/* Main Content: flex row (image + description) */}
                <div className="flex w-full flex-1 flex-col md:flex-row items-start md:items-center gap-10 md:gap-14 mb-4">
                  {/* Image/Preview Section */}
                  <div className="flex flex-col items-center md:items-start md:justify-center flex-shrink-0 w-full md:w-96">
                    <div className="w-full md:w-96 h-64 md:h-72 rounded-2xl overflow-hidden shadow-xl bg-white flex items-center justify-center border border-border mb-4 md:mb-8">
                      <img
                        src={project.image || '/images/placeholder.svg'}
                        alt={project.title}
                        className="w-full h-full object-contain"
                        style={{ background: '#fff' }}
                      />
                    </div>
                  </div>
                  {/* Description on the right */}
                  <div className="flex-1 w-full flex flex-col justify-center min-w-0 items-start">
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-10 line-clamp-12" style={{ fontFamily: 'Montserrat, sans-serif', maxHeight: '16rem', overflow: 'hidden' }}>{project.description}</p>
                  </div>
                </div>
                {/* Technologies: under image & description (spans full width under both for desktop) */}
                <div className="flex flex-wrap justify-center gap-3 w-full mt-4 md:mt-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 bg-secondary text-primary rounded font-medium"
                      style={{letterSpacing: '0.01em'}}>
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Action buttons removed */}
              </div>
            </div>
            {/* Next Button */}
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-secondary/40 hover:bg-primary/30 text-primary hover:text-primary-foreground transition disabled:opacity-50"
              aria-label="Next Project"
              disabled={total < 2}
            >
              <ChevronRight size={40} />
            </button>
          </div>
          {/* Indicator dots */}
          {total > 1 && (
            <div className="flex mt-8 justify-center gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-4 h-4 rounded-full  transition-all duration-300 ${current === i ? 'bg-primary shadow-lg' : 'bg-border'}`}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
