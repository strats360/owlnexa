import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  Cpu,
  Bird,
  Database,
  ChevronRight,
  Layers,
  Zap,
  ShieldCheck,
  Globe,
  Mail,
  MessageSquare,
  Twitter,
  Linkedin,
  Github,
  Menu,
  X,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Toaster, toast } from '@/components/ui/sonner';
const services = [
  {
    title: "NLP Solutions",
    description: "State-of-the-art Natural Language Processing for sentiment analysis, chatbots, and semantic search.",
    icon: Sparkles,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Computer Vision",
    description: "Advanced image recognition and video analytics systems tailored for retail, healthcare, and security.",
    icon: Cpu,
    color: "from-purple-500 to-indigo-400"
  },
  {
    title: "Predictive Analytics",
    description: "Leverage historical data to forecast trends and optimize business operations with precision.",
    icon: Database,
    color: "from-emerald-500 to-teal-400"
  }
];
const benefits = [
  {
    title: "High Performance",
    description: "Our models are optimized for sub-millisecond latency and massive throughput.",
    icon: Zap
  },
  {
    title: "Security First",
    description: "Enterprise-grade encryption and privacy-preserving AI architectures.",
    icon: ShieldCheck
  },
  {
    title: "Global Scalability",
    description: "Deploy your solutions globally with our multi-region cloud-native infrastructure.",
    icon: Globe
  }
];
const testimonials = [
  {
    name: "Arjun Mehta",
    role: "CTO, FinStream India",
    content: "Owlnexa's predictive engine transformed our risk assessment process. Their team is world-class and deeply understands our specific market needs.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    name: "Sarah Jenkins",
    role: "VP Engineering, HealthLogic",
    content: "The NLP implementation by Owlnexa was seamless and outperformed our previous vendor by 40% in accuracy. Truly impressive tech.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    name: "Vikram Singh",
    role: "Founder, RetailFlow",
    content: "We integrated Owlnexa's computer vision system across 500 stores. The real-time insights have been a game-changer for our inventory management.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  }
];
export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message received! The Owlnexa team will contact you within 24 hours.");
  };
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 origin-left z-[60]"
        style={{ scaleX }}
      />
      <Toaster richColors position="top-center" />
      {/* Header */}
      <header className="nav-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center shadow-glow shadow-indigo-500/40">
                <Bird className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Owl<span className="text-indigo-400">nexa</span></span>
            </div>
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Services</a>
              <a href="#about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">About</a>
              <a href="#testimonials" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Testimonials</a>
              <ThemeToggle className="relative top-0 right-0" />
              <Button size="sm" className="bg-white text-slate-950 hover:bg-slate-200 font-semibold px-6">
                Get Started
              </Button>
            </nav>
            {/* Mobile Nav Toggle */}
            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle className="relative top-0 right-0" />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-slate-900 border-b border-white/10 p-6 space-y-4 shadow-2xl z-50"
          >
            <a href="#services" className="block text-lg font-medium py-2 text-slate-200" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#about" className="block text-lg font-medium py-2 text-slate-200" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#testimonials" className="block text-lg font-medium py-2 text-slate-200" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <Button className="w-full bg-indigo-600 text-white mt-4">Contact Us</Button>
          </motion.div>
        )}
      </header>
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-40 overflow-hidden">
          {/* Background Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 mb-8 backdrop-blur-sm">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Introducing Owlnexa AI
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
                Architecting <span className="text-gradient">Intelligence</span> for Global Scale
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Owlnexa builds sophisticated AI infrastructure that learns, adapts, and evolves.
                We bridge the gap between raw data and autonomous business action.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="h-14 px-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-lg shadow-glow">
                  Request a Demo <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-10 border-white/10 text-white rounded-full text-lg hover:bg-white/5 transition-all">
                  Our Solutions
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Services Section */}
        <section id="services" className="py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core AI Capabilities</h2>
              <p className="text-slate-400 max-w-xl mx-auto">Specialized AI systems designed to solve the most complex technical challenges in modern industry.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="glass-card h-full border-none group hover:translate-y-[-8px] transition-all duration-300 cursor-default">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-white group-hover:text-indigo-400 transition-colors">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-400 text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section id="about" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Why Global Leaders <br />
                  <span className="text-indigo-400 underline decoration-indigo-500/30 underline-offset-8">Choose Owlnexa</span>
                </h2>
                <div className="space-y-8">
                  {benefits.map((benefit) => (
                    <div key={benefit.title} className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-colors">
                        <benefit.icon className="w-5 h-5 text-indigo-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{benefit.title}</h4>
                        <p className="text-slate-400">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                className="lg:w-1/2 relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50 backdrop-blur-xl">
                  <div className="aspect-video bg-slate-800 flex items-center justify-center p-8">
                     <div className="p-8 text-center space-y-6">
                        <div className="relative flex justify-center">
                          <Bird className="w-20 h-20 text-indigo-500 animate-pulse" />
                          <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full" />
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm font-mono text-indigo-300">OWLNEXA_CORE_INITIALIZING... 100%</div>
                          <div className="h-1 w-64 bg-slate-700 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-indigo-500" 
                              initial={{ width: 0 }}
                              whileInView={{ width: '100%' }}
                              transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                          </div>
                        </div>
                     </div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl" />
              </motion.div>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section id="testimonials" className="py-24 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
              <p className="text-slate-400">Trusted by industry-defining companies across the globe.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-8 rounded-2xl relative flex flex-col justify-between"
                >
                  <MessageSquare className="absolute top-8 right-8 w-8 h-8 text-indigo-500/10" />
                  <div>
                    <p className="text-slate-300 italic mb-8 leading-relaxed text-sm">"{t.content}"</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-indigo-500/30 object-cover" />
                    <div>
                      <h5 className="font-semibold text-white text-sm">{t.name}</h5>
                      <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Contact CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="glass-card p-10 md:p-16 rounded-3xl border-indigo-500/20 shadow-glow">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Start Your AI Journey</h2>
                <p className="text-slate-400">Transform your business intelligence with Owlnexa's custom deployments.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Full Name</label>
                    <Input placeholder="John Doe" className="bg-slate-950 border-white/10 text-white h-12 focus:border-indigo-500" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Work Email</label>
                    <Input type="email" placeholder="john@company.com" className="bg-slate-950 border-white/10 text-white h-12 focus:border-indigo-500" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Project Goal</label>
                  <Textarea placeholder="Tell us how we can help you scale..." className="bg-slate-950 border-white/10 text-white min-h-[120px] focus:border-indigo-500" required />
                </div>
                <Button type="submit" className="w-full h-14 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white rounded-xl text-lg font-semibold group shadow-lg">
                  Send Message <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(79,70,229,0.15),transparent_50%)]" />
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded bg-indigo-600 flex items-center justify-center">
                  <Bird className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white tracking-tight">Owlnexa</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Headquartered in Bangalore, India.
                Pioneering intelligence for the next generation of global digital infrastructure.
              </p>
              <div className="flex gap-4">
                <Twitter className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
                <Github className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h6 className="text-white font-semibold mb-6">Solutions</h6>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Enterprise Platform</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">API & SDKs</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Infrastructure</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">AI Security</a></li>
              </ul>
            </div>
            <div>
              <h6 className="text-white font-semibold mb-6">Company</h6>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Tech Stack</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h6 className="text-white font-semibold mb-6">Stay Informed</h6>
              <p className="text-sm text-slate-400 mb-4">Get the latest AI breakthroughs from Owlnexa.</p>
              <div className="flex gap-2">
                <Input placeholder="Email Address" className="bg-white/5 border-white/10 h-10" />
                <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">Join</Button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center">
            <p className="text-slate-500 text-xs">
              © {new Date().getFullYear()} Owlnexa Intelligence Pvt. Ltd. All rights reserved.
              Built for high-performance AI deployment across Indian and global markets.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}