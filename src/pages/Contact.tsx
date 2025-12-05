import { useState } from 'react';
import Layout from '@/components/Layout';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center px-8 py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 w-full">
          <div className="animate-fade-in-up">
            <h1 className="section-title mb-6">Contact me</h1>
            
            <p className="text-foreground/80 mb-8 leading-relaxed">
              If you have a project in mind, let's discuss it together and possibly collaborate on bringing it to life. Feel free to reach out with any questions or ideas using the form below.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                required
              />
              
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="form-input resize-none"
                required
              />
              
              <button
                type="submit"
                className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors tracking-widest text-sm font-medium"
              >
                SEND
              </button>
            </form>
          </div>
          
          <div className="hidden lg:flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary rounded-lg flex items-center justify-center border border-border">
              <div className="text-center">
                <div className="text-6xl mb-4">📍</div>
                <p className="text-muted-foreground">Your Location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
