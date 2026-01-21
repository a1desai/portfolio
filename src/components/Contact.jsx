import React, { useState } from 'react';
import { Mail, Send, Loader, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (formData.name && formData.email && formData.message) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-transparent via-violet-900/5 to-transparent relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Let's Build Something Amazing</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and projects. Whether you have a question or just want to chat about technology, let's connect!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Feel free to reach out through any of these channels. I'm most responsive via email and typically reply within 24-48 hours.
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:Aryandes20@gmail.com" className="flex items-start gap-4 card group hover:border-violet-400/50 hover:shadow-2xl hover:shadow-violet-500/20 transition-all">
                <div className="p-3 bg-violet-500/20 rounded-lg group-hover:bg-violet-500/30 transition">
                  <Mail className="text-violet-400 group-hover:text-pink-300 transition" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white group-hover:text-violet-300 transition">Email</h3>
                  <p className="text-gray-400 text-sm">Aryandes20@gmail.com</p>
                  <p className="text-gray-500 text-xs mt-1">Preferred contact method</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/aryan-desai-cs/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 card group hover:border-violet-400/50 hover:shadow-2xl hover:shadow-violet-500/20 transition-all">
                <div className="p-3 bg-violet-500/20 rounded-lg group-hover:bg-violet-500/30 transition">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-violet-400 group-hover:text-pink-300 transition">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.842 0-9.769h3.554v1.391c.436-.671 1.217-1.624 2.963-1.624 2.166 0 3.789 1.415 3.789 4.455v5.547zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.954-1.71 1.185 0 1.915.755 1.915 1.71 0 .951-.73 1.71-1.954 1.71zm1.575 10.019H3.762V8.664h3.15v10.788zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white group-hover:text-violet-300 transition">LinkedIn</h3>
                  <p className="text-gray-400 text-sm">aryan-desai-cs</p>
                  <p className="text-gray-500 text-xs mt-1">Connect with me professionally</p>
                </div>
              </a>

              <a href="https://github.com/a1desai" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 card group hover:border-violet-400/50 hover:shadow-2xl hover:shadow-violet-500/20 transition-all">
                <div className="p-3 bg-violet-500/20 rounded-lg group-hover:bg-violet-500/30 transition">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-violet-400 group-hover:text-pink-300 transition">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white group-hover:text-violet-300 transition">GitHub</h3>
                  <p className="text-gray-400 text-sm">a1desai</p>
                  <p className="text-gray-500 text-xs mt-1">Check out my projects</p>
                </div>
              </a>
            </div>

            {/* Quick Response Info */}
            <div className="p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg">
              <p className="text-green-300 text-sm font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Usually responds within 24-48 hours
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card border-l-4 border-l-violet-500 hover:shadow-2xl hover:shadow-violet-500/20 transition-all animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="animate-fade-in">
                <label className="block text-sm font-semibold text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition duration-300 backdrop-blur"
                  placeholder="Your name"
                />
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition duration-300 backdrop-blur"
                  placeholder="your@email.com"
                />
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition duration-300 resize-none backdrop-blur"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed animate-fade-in relative overflow-hidden group"
                style={{ animationDelay: '0.3s' }}
              >
                {isLoading ? (
                  <>
                    <Loader size={20} className="animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 text-green-300 rounded-lg text-sm flex items-center gap-2 animate-fade-in">
                  <span>✓</span>
                  <span>Thanks for reaching out! I'll get back to you soon.</span>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 text-red-300 rounded-lg text-sm flex items-center gap-2 animate-fade-in">
                  <span>✕</span>
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
