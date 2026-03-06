import React, { useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
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
import { cn } from '@/lib/utils';
const services = [
  {
    title: "NLP Solutions",
    description: "State-of-the-art Natural Language Processing for sentiment analysis, chatbots, and semantic search.",
    icon: Sparkles,
    color: "from-blue-500 to-cyan-400",
    glowColor: "hover:shadow-blue-500/20"
  },
  {
    title: "Computer Vision",
    description: "Advanced image recognition and video analytics systems tailored for retail, healthcare, and security.",
    icon: Cpu,
    color: "from-purple-500 to-indigo-400",
    glowColor: "hover:shadow-indigo-500/20"
  },
  {
    title: "Predictive Analytics",
    description: "Leverage historical data to forecast trends and optimize business operations with precision.",
    icon: Database,
    color: "from-emerald-500 to-teal-400",
    glowColor: "hover:shadow-emerald-500/20"
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
    <div className="flex flex-col min-h-screen bg-slate-950 selection:bg-indigo-500/30">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 origin-left z-[70]"
        style={{ scaleX }}
      />
      <Toaster richColors position="top-center" />
      {/* Header */}
      <header className="nav-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center shadow-glow transition-transform group-hover:scale-110">
                <Bird className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Owl<span className="text-indigo-400">nexa</span>
              </span>
            </div>
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {['Services', 'About', 'Testimonials'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full" />
                </a>
              ))}
              <div className="h-6 w-px bg-white/10 mx-2" />
              <ThemeToggle className="relative top-0 right-0" />
              <Button
                size="sm"
                className="bg-white text-slate-950 hover:bg-slate-200 hover:scale-105 active:scale-95 transition-all font-semibold px-6 rounded-full"
              >
                Get Started
              </Button>
            </nav>
            {/* Mobile Nav Toggle */}
            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle className="relative top-0 right-0" />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white transition-colors p-2"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-20 left-0 w-full bg-slate-900 border-b border-white/10 overflow-hidden shadow-2xl z-50"
            >
              <div className="p-6 space-y-4">
                {['Services', 'About', 'Testimonials'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-lg font-medium py-2 text-slate-200 border-b border-white/5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <Button className="w-full bg-indigo-600 text-white mt-4 h-12 text-lg rounded-xl">
                  Contact Us
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center pt-20 pb-20 overflow-hidden bg-mesh">
          {/* Animated Background Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"
          />
          <motion.div
             animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 mb-8 backdrop-blur-sm animate-pulse-subtle">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Introducing Owlnexa AI v4.0
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 max-w-5xl mx-auto leading-[1.1]">
                Architecting <span className="text-gradient">Intelligence</span> for the Future
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                Owlnexa builds high-performance AI infrastructure that learns, adapts, and evolves in real-time.
                Empower your enterprise with autonomous decision systems.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button
                  size="lg"
                  className="h-14 px-10 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-lg shadow-glow hover:scale-105 active:scale-95 transition-all group"
                >
                  Request a Demo
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-10 border-white/10 text-white rounded-full text-lg hover:bg-white/5 hover:border-white/20 transition-all"
                >
                  Our Solutions
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Services Section */}
        <section id="services" className="py-24 md:py-32 bg-slate-900/40 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Core AI Capabilities</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Specialized AI systems designed to solve the most complex technical challenges in modern industry.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.15 }}
                >
                  <Card className={cn(
                    "glass-card h-full border-none group cursor-default p-2",
                    "hover:translate-y-[-12px] hover:bg-white/[0.08] hover:shadow-glow",
                    service.glowColor
                  )}>
                    <CardHeader className="pb-4">
                      <div className={cn(
                        "w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3",
                        service.color
                      )}>
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-white group-hover:text-indigo-300 transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-400 text-lg leading-relaxed group-hover:text-slate-300 transition-colors">
                        {service.description}
                      </CardDescription>
                      <div className="mt-8 flex items-center text-indigo-400 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section id="about" className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-[1.2] tracking-tight">
                  Why Global Leaders <br />
                  <span className="text-indigo-400 underline decoration-indigo-500/30 underline-offset-[12px]">Choose Owlnexa</span>
                </h2>
                <div className="space-y-10">
                  {benefits.map((benefit) => (
                    <div key={benefit.title} className="flex gap-6 group">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 group-hover:scale-110 transition-all">
                        <benefit.icon className="w-6 h-6 text-indigo-400" />
                      </div>
                      <div className="pt-1">
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{benefit.title}</h4>
                        <p className="text-slate-400 text-lg leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                className="lg:w-1/2 relative w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50 backdrop-blur-2xl">
                  <div className="aspect-video bg-slate-900/80 flex items-center justify-center p-8">
                     <div className="w-full text-center space-y-8">
                        <div className="relative flex justify-center">
                          <Bird className="w-24 h-24 text-indigo-500 animate-pulse" />
                          <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full" />
                        </div>
                        <div className="space-y-4 max-w-xs mx-auto">
                          <div className="text-xs font-mono text-indigo-300/80 tracking-widest uppercase">Initializing Core...</div>
                          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-white/5">
                            <motion.div
                              className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                              initial={{ width: 0 }}
                              whileInView={{ width: '100%' }}
                              transition={{ duration: 2, ease: "easeInOut" }}
                            />
                          </div>
                          <div className="text-[10px] font-mono text-slate-500">SYSTEM_STATUS: OPTIMAL</div>
                        </div>
                     </div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-indigo-500/10 rounded-full blur-[80px]" />
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-[80px]" />
              </motion.div>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section id="testimonials" className="py-24 md:py-32 bg-slate-900/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Client Success Stories</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Trusted by industry-defining companies across the globe.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {testimonials.map((t, idx) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-10 rounded-[2rem] relative flex flex-col justify-between hover:border-indigo-500/30"
                >
                  <MessageSquare className="absolute top-10 right-10 w-10 h-10 text-indigo-500/10" />
                  <div className="mb-10">
                    <p className="text-slate-300 italic leading-relaxed text-lg">"{t.content}"</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-indigo-500/30 object-cover shadow-lg" />
                    <div>
                      <h5 className="font-bold text-white text-base">{t.name}</h5>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-indigo-400 font-black mt-1">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Contact CTA */}
        <section className="py-24 md:py-40 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-10 md:p-20 rounded-[3rem] border-indigo-500/20 shadow-glow overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 p-12 opacity-10">
                <Bird className="w-64 h-64 -rotate-12" />
              </div>
              <div className="text-center mb-16 relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Start Your AI Journey</h2>
                <p className="text-slate-400 text-xl max-w-xl mx-auto">Transform your business intelligence with Owlnexa's custom deployments.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-8 max-w-xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300 ml-1">Full Name</label>
                    <Input placeholder="John Doe" className="bg-slate-950/50 border-white/10 text-white h-14 rounded-xl focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300 ml-1">Work Email</label>
                    <Input type="email" placeholder="john@company.com" className="bg-slate-950/50 border-white/10 text-white h-14 rounded-xl focus:ring-indigo-500/50 focus:border-indigo-500 transition-all" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300 ml-1">Project Goal</label>
                  <Textarea placeholder="Tell us how we can help you scale..." className="bg-slate-950/50 border-white/10 text-white min-h-[140px] rounded-xl focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none" required />
                </div>
                <Button
                  type="submit"
                  className="w-full h-16 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white rounded-2xl text-xl font-bold group shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Send Message
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(79,70,229,0.2),transparent_60%)] pointer-events-none" />
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/5 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
            <div className="space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg">
                  <Bird className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white tracking-tight">Owlnexa</span>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
                Headquartered in Ahmedabad, India.
                Pioneering intelligence for the next generation of global digital infrastructure.
              </p>
              <div className="flex gap-6">
                {[Twitter, Linkedin, Github].map((Icon, i) => (
                  <Icon key={i} className="w-6 h-6 text-slate-500 hover:text-indigo-400 cursor-pointer transition-all hover:scale-110" />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h6 className="text-white font-bold text-lg mb-8">Solutions</h6>
              <ul className="space-y-4 text-slate-400 text-base">
                {['Enterprise Platform', 'API & SDKs', 'Infrastructure', 'AI Security'].map(item => (
                  <li key={item}><a href="#" className="hover:text-indigo-400 transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h6 className="text-white font-bold text-lg mb-8">Company</h6>
              <ul className="space-y-4 text-slate-400 text-base">
                {['About Us', 'Careers', 'Tech Stack', 'Contact'].map(item => (
                  <li key={item}><a href="#" className="hover:text-indigo-400 transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
              <h6 className="text-white font-bold text-lg mb-8">Stay Informed</h6>
              <p className="text-slate-400 text-base max-w-xs">Get the latest AI breakthroughs directly from the Owlnexa labs.</p>
              <div className="flex gap-2 w-full max-w-sm">
                <Input placeholder="Email Address" className="bg-white/5 border-white/10 h-12 rounded-xl flex-grow" />
                <Button size="icon" className="h-12 w-12 bg-indigo-600 hover:bg-indigo-500 rounded-xl flex-shrink-0">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 text-center">
            <p className="text-slate-500 text-sm tracking-wide">
              © {new Date().getFullYear()} Owlnexa Intelligence Pvt. Ltd. <span className="mx-2 hidden sm:inline">|</span>
              <br className="sm:hidden" />
              Built with precision for the global AI landscape.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}