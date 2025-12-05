import Layout from '@/components/Layout';
import ParticlesBackground from '@/components/ParticlesBackground';

const Index = () => {
  return (
    <Layout>
      <ParticlesBackground />
      <div className="relative min-h-screen flex flex-col items-center justify-center px-8">
        <div className="text-center z-10 animate-fade-in-up">
          <h1 className="hero-title mb-4">
            Hello, I'm <span className="text-foreground">Your Name</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground tracking-wide">
            Software Engineer & Full Stack Developer
          </p>
          
          <div className="mt-12">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center border-2 border-border">
              <span className="text-4xl font-display text-primary">YN</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
