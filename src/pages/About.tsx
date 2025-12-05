import Layout from '@/components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center px-8 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="section-title mb-8">About me</h1>
            
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                Professionally connected to the web development industry, besides my job as a Software Engineer, I craft apps across various domains including{' '}
                <strong className="text-foreground">Web, Mobile, AI</strong> and more.
              </p>
              
              <p>
                I believe in the power of simplicity.{' '}
                <strong className="text-foreground">Always Keep It Simple.</strong>
              </p>
              
              <p>
                I always love working on innovative projects and trying to learn new stuff everyday. I am very passionate about new technologies, entrepreneurship and the world of tech startups.
              </p>
              
              <p>
                My passion for technology began with C/C++ and Java. I believe in embracing change and constantly pushing myself to try new things; I thrive on variety and find repetitive tasks boring.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 bg-gradient-to-br from-secondary to-muted">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-6xl font-display text-primary">YN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
