import { useState } from 'react';
import Layout from '@/components/Layout';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace these with your actual EmailJS credentials
    // Get them at https://www.emailjs.com/
    const serviceID = 'service_wsrb6gd';
    const templateID = 'template_7ce02i5';
    const publicKey = 'T3lSiA2DT30F-9uTB';

    const templateParams = {
      // Must match variables in your EmailJS template: {{name}}, {{email}}, {{subject}}, {{message}}
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        toast.error('Failed to send message. Please check your EmailJS configuration.');

        // Fallback to mailto if EmailJS fails (optional, but good for now while they set it up)
        const { name, email, subject, message } = formData;
        const mailto = `mailto:mohamedhassenbenadel@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\n\n${message}`
        )}`;
        window.location.href = mailto;
        toast.info('Opening email client as fallback...');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center px-8 py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 w-full items-start">
          <div className="animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>Contact me</h2>
            <p className="text-foreground/80 mb-8 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
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
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                required
              />

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="form-input resize-none"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                required
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors tracking-widest text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {isSubmitting ? 'SENDING...' : 'SEND'}
              </button>
            </form>
          </div>

          <div className="hidden lg:flex items-start justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full h-[30rem] md:h-[32rem] rounded-[36px] md:rounded-[48px] overflow-hidden border border-border shadow-lg bg-background">
              <iframe
                title="Map - Tunisia"
                src="https://www.google.com/maps?q=36.704013352027424,10.215932635213521&z=13&output=embed"
                style={{
                  zIndex: 3,
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  padding: 0,
                  borderWidth: 0,
                  margin: 0,
                  left: 0,
                  top: 0,
                  touchAction: 'pan-x pan-y',
                  backgroundColor: '#0b1624',
                  filter: 'none',
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
