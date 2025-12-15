import Layout from '@/components/Layout';

const Index = () => {
  return (
    <Layout showGradient={true}>
      <div className="relative min-h-screen flex flex-col items-center justify-center px-8">
        <div className="text-center z-10 animate-fade-in-up">
          <img src="/images/hello.png" alt="Hello, I'm Hassen" className="mb-4 max-w-full h-auto mx-auto" style={{ maxWidth: '600px' }} />
          <p className="text-lg md:text-xl text-muted-foreground tracking-wide" style={{ fontFamily: "'Macondo', cursive", color: '#eee', fontSize: '22px' }}>
            Software Engineer & Full Stack Developer
          </p>

          <div className="mt-12">
            <a
              href="/cv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
            >
              Get my CV
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
