import Layout from '@/components/Layout';
import SkillCloud from '@/components/SkillCloud';
import { Link } from 'react-router-dom';

const Skills = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center px-8 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-start w-full">
          <div className="animate-fade-in-up">
            <h1 className="section-title mb-8">Skills & Experience</h1>
            
            <div className="space-y-4 text-foreground/90 leading-relaxed max-w-xl">
              <p>
                Main area of my expertise is around Full Stack Web Development. While I strongly believe in the{' '}
                <strong className="text-foreground bg-secondary/50 px-1">YAGNI</strong> principle, I build small to medium-sized Web Apps as well as Mobile Apps using Java, JavaScript/TypeScript, Spring, Jakarta EE, React & Vue.js...
              </p>
              
              <p>
                I have experience building games and web customized features. Additionally, I have a professional approach and experience towards technologies with the goal to build high quality enterprise products.
              </p>
              
              <p>Would you like to know more?</p>
              
              <p>
                Check my{' '}
                <a href="#" className="text-primary hover:underline">LinkedIn</a>{' '}
                profile and my{' '}
                <Link to="/projects" className="text-primary hover:underline">Projects</Link>{' '}
                or just{' '}
                <Link to="/contact" className="text-primary hover:underline">contact</Link>{' '}
                me.
              </p>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <SkillCloud />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
