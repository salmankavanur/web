import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, Users, ArrowRight, Heart, Sparkles, CheckCircle2, MapPin, Phone, Send } from 'lucide-react';

const Navbar = () => (
  <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-brand-dark/80 backdrop-blur-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-accent to-brand-blue flex items-center justify-center">
            <Heart className="text-white w-6 h-6" />
          </div>
          <span className="font-bold text-2xl tracking-tight text-white">Habiba <span className="text-brand-accent">v4.0</span></span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#schedule" className="text-gray-300 hover:text-white transition-colors">Schedule</a>
          <a href="#apply" className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10">Apply Now</a>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    {/* Background elements */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/20 rounded-full blur-[120px] mix-blend-screen" />
    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-blue/30 rounded-full blur-[150px] mix-blend-screen" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="px-4 py-1.5 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-light text-sm font-medium flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> 6th Batch
          </span>
          <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium">Girls Only</span>
          <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium">Online Course</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight glow-text">
          Becoming the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand-accent">Best Version</span> of You
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
          Habiba v4.0 is a transformational 11-day online course designed exclusively for girls aged 14–25. Learn Islamic values, develop life skills, and grow through task-based learning experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#apply" className="px-8 py-4 rounded-full bg-brand-accent hover:bg-blue-500 text-white font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-brand-accent/30">
            Apply Now <ArrowRight className="w-5 h-5" />
          </a>
          <button className="px-8 py-4 rounded-full glass-card hover:bg-white/10 text-white font-semibold transition-all">
            Download Brochure
          </button>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
          <div>
            <p className="text-3xl font-bold text-white mb-1">11</p>
            <p className="text-sm text-gray-400">Days</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white mb-1">14-25</p>
            <p className="text-sm text-gray-400">Age Group</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white mb-1">₹249</p>
            <p className="text-sm text-gray-400">Only</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-brand-accent mb-1">Task</p>
            <p className="text-sm text-gray-400">Based Learning</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-accent rounded-[3rem] blur-2xl opacity-20 transform rotate-6"></div>
        <div className="glass-card p-8 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"></div>
          
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-red-500/20 text-red-300 font-semibold rounded-lg text-sm mb-4 border border-red-500/30">Last Date to Apply</span>
            <h3 className="text-5xl font-bold text-white mb-2">May 14</h3>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
              <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-brand-accent" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Duration</p>
                <p className="font-semibold text-white">11 Days (Online)</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
              <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-brand-accent" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Batch</p>
                <p className="font-semibold text-white">6th Batch</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Registration Fee</p>
              <p className="text-3xl font-bold text-white">₹249</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-brand-blue flex items-center justify-center animate-bounce">
              <ArrowRight className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      title: "Islamic Values",
      desc: "Practical guidance to apply Islamic teachings in everyday life.",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Task-Based Learning",
      desc: "Interactive assignments and activities to ensure real growth.",
      icon: <CheckCircle2 className="w-6 h-6" />
    },
    {
      title: "Skill Development",
      desc: "Build communication, productivity, and self-confidence.",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Supportive Community",
      desc: "Connect with like-minded girls focused on self-improvement.",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Join <span className="text-brand-accent glow-text">Habiba?</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">A carefully crafted experience designed to nurture your spiritual and personal growth.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 hover:bg-white/10 transition-all cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-accent/20 flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Schedule = () => {
  const items = [
    "Daily live interactive sessions",
    "Practical assignments & reflections",
    "Confidence and communication training",
    "Islamic lifestyle & mindset development"
  ];

  return (
    <section id="schedule" className="py-24 relative z-10 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-brand-blue/10 blur-[100px] -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">11 Days of Purposeful <span className="text-brand-accent">Transformation</span></h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Each day includes engaging sessions, reflective tasks, mentorship, and skill-building workshops designed to help participants grow spiritually and personally.
            </p>
            
            <div className="space-y-6">
              {items.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                  </div>
                  <p className="text-white font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="glass-card p-8 lg:p-12 border-brand-blue/30 relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-accent/30 rounded-full blur-xl" />
            
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Clock className="text-brand-accent" /> Course Details
            </h3>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-6 border-b border-white/10">
                <span className="text-gray-400">Course Starts</span>
                <span className="font-bold text-white">May 14</span>
              </div>
              <div className="flex justify-between items-center pb-6 border-b border-white/10">
                <span className="text-gray-400">Duration</span>
                <span className="font-bold text-white">11 Days</span>
              </div>
              <div className="flex justify-between items-center pb-6 border-b border-white/10">
                <span className="text-gray-400">Mode</span>
                <span className="font-bold text-white">Online</span>
              </div>
              <div className="flex justify-between items-center pb-6 border-b border-white/10">
                <span className="text-gray-400">Language</span>
                <span className="font-bold text-white">Malayalam</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-gray-400">Registration Fee</span>
                <span className="text-2xl font-bold text-brand-accent">₹249 Only</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Application = () => {
  return (
    <section id="apply" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-brand-accent/20 blur-[100px] -z-10" />
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Never Miss the <span className="text-brand-accent">Chance</span></h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            Join hundreds of girls in a journey of self-development, spiritual growth, and meaningful transformation.
          </p>
          
          <form className="max-w-xl mx-auto space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Full Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Phone Number</label>
                <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="+91 00000 00000" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Email Address</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="your@email.com" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Age Group</label>
              <select className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors appearance-none">
                <option value="">Select Age</option>
                <option value="14-17">14 - 17 Years</option>
                <option value="18-21">18 - 21 Years</option>
                <option value="22-25">22 - 25 Years</option>
              </select>
            </div>
            
            <button className="w-full bg-brand-accent hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all mt-4 flex items-center justify-center gap-2 shadow-lg shadow-brand-accent/30">
              Submit Application <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="border-t border-white/10 bg-brand-dark pt-16 pb-8 relative z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="font-bold text-2xl tracking-tight text-white">Surayya</span>
          </div>
          <p className="text-gray-400 max-w-xs">
            Daiya Islamic Academy for Women | Alumnae
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-white mb-6">Contact Us</h4>
          <div className="space-y-4">
            <a href="tel:+918714407772" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
              <Phone className="w-5 h-5" /> +91 8714407772
            </a>
            <div className="flex items-center gap-3 text-gray-400">
              <MapPin className="w-5 h-5" /> Kerala, India
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-white mb-6">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#25D366] transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0088cc] transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">© 2026 Surayya. All rights reserved.</p>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-brand-dark font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Schedule />
        <Application />
      </main>
      <Footer />
    </div>
  );
}

export default App;
