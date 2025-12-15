import Layout from '@/components/Layout';

const About = () => {
  return (
    <Layout showGradient={true}>
      <div className="min-h-screen flex items-center px-8 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>About me</h2>

            <div className="space-y-6">
              <p className="text-lg text-foreground/85 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.2rem', lineHeight: '1.6' }}>
                I am a <span className="font-semibold text-foreground">Software Engineer</span> proficient in programming languages such as <span className="font-semibold text-foreground">Java</span> and <span className="font-semibold text-foreground">C#</span>, specializing in <span className="font-semibold text-foreground">Full Stack development</span> (<span className="font-semibold text-primary">Spring Boot & Angular</span>).
              </p>

              <p className="text-base text-foreground/90 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.2rem', lineHeight: '1.6' }}>
                I love turning <span className="font-semibold text-primary">complex problems</span> into <span className="font-semibold text-primary">simple, user-friendly solutions</span> and always aim to deliver my best in every project I work on.
              </p>

            </div>
          </div>


          <div className="flex justify-center md:justify-end animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-lg">
              <img
                src="/images/Hassen_Picture.png"
                alt="Hassen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
