import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Stethoscope, 
  Sparkles, 
  HeartPulse, 
  Menu, 
  X, 
  Phone, 
  Calendar,
  ChevronRight,
  Star,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">D</span>
          </div>
          <span className={`font-bold text-xl tracking-tighter text-navy-900`}>THE DENTIST</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-navy-900/70">
          <a href="#services" className="hover:text-navy-900 transition-colors">Services</a>
          <a href="#about" className="hover:text-navy-900 transition-colors">About</a>
          <a href="#reviews" className="hover:text-navy-900 transition-colors">Reviews</a>
          <a href="https://wa.me/+918384018384" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-navy-900 text-white rounded-full hover:bg-navy-800 transition-all shadow-lg shadow-navy-900/10">Book Appointment</a>
        </div>

        <button className="md:hidden text-navy-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
        >
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-navy-900">Services</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-navy-900">About</a>
          <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-navy-900">Reviews</a>
          <a href="https://wa.me/+918384018384" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-4 bg-navy-900 text-white text-center rounded-xl font-bold">Book Appointment</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#F9F9F9]">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-navy-50/50 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-navy-900 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={14} />
            Premium Dental Care
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-navy-900 leading-[0.9] tracking-tighter mb-8">
            Precision.<br />Care.<br /><span className="text-teal-600">Confidence.</span>
          </h1>
          <p className="text-xl text-navy-900/60 max-w-md mb-10 leading-relaxed">
            Modern, painless dental treatments delivered with unmatched hygiene, precision and patient-first care.
          </p>
          
            <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/+918384018384" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-navy-900 text-white rounded-full font-bold hover:scale-105 transition-transform shadow-xl shadow-navy-900/20 flex items-center justify-center gap-2">
              Book Appointment <ChevronRight size={18} />
            </a>
            <a href="tel:08384018384" className="px-8 py-4 border-2 border-navy-900/10 text-navy-900 rounded-full font-bold hover:bg-navy-50 transition-colors flex items-center justify-center gap-2">
              <Phone size={18} /> Call Now
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6">
            {[
              { icon: <ShieldCheck className="text-teal-600" />, text: "Advanced Sterilization" },
              { icon: <HeartPulse className="text-teal-600" />, text: "Painless Procedures" },
              { icon: <Stethoscope className="text-teal-600" />, text: "Modern Equipment" },
              { icon: <Sparkles className="text-teal-600" />, text: "Patient-Focused Care" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-sm font-semibold text-navy-900/80">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative group">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000" 
              alt="Modern Dental Clinic" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/user${i}/100/100`} 
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-white">4.7</span>
                    <div className="flex text-yellow-500 gap-0.5">
                      {[1, 2, 3, 4].map((s) => <Star key={s} size={12} fill="currentColor" />)}
                      <Star size={12} fill="currentColor" className="opacity-50" />
                    </div>
                  </div>
                  <p className="text-xs text-white font-medium">Trusted by 2,000+ patients</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Painless RCT", desc: "Advanced root canal treatments with zero discomfort.", icon: <HeartPulse /> },
    { title: "Cleaning & Polishing", desc: "Professional scaling for a brighter, healthier smile.", icon: <Sparkles /> },
    { title: "Fillings", desc: "Durable, aesthetic composite restorations.", icon: <ShieldCheck /> },
    { title: "Gum Treatment", desc: "Comprehensive care for periodontal health.", icon: <Stethoscope /> },
    { title: "General Checkups", desc: "Regular screenings to prevent dental issues.", icon: <Calendar /> },
    { title: "Preventive Care", desc: "Long-term guidance for your oral health.", icon: <ShieldCheck /> },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4 tracking-tight">Exceptional Services</h2>
          <p className="text-navy-900/50 max-w-2xl mx-auto">We provide a wide range of dental treatments using the latest technology and a patient-first approach.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-[#F9F9F9] border border-gray-100 transition-all hover:shadow-2xl hover:shadow-navy-900/5 group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-navy-900 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
              <p className="text-navy-900/60 leading-relaxed mb-6">{service.desc}</p>
              <button className="text-sm font-bold text-navy-900 flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ChevronRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#F9F9F9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=1000" 
              alt="Dr. Vishal" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 bg-navy-900 p-8 rounded-[2rem] text-white shadow-2xl max-w-xs">
            <h4 className="text-2xl font-bold mb-1">Dr. Vishal</h4>
            <p className="text-white/60 text-sm mb-4">Lead Dental Surgeon</p>
            <p className="text-sm leading-relaxed">"My mission is to provide precision-driven dental care that prioritizes your comfort and long-term health."</p>
          </div>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8 tracking-tight">Redefining Dental Excellence</h2>
          <div className="space-y-6 text-navy-900/70 leading-relaxed">
            <p>Dr. Vishal is known for precision and attention to detail. Every procedure is explained clearly before starting, ensuring you are comfortable and informed throughout your journey.</p>
            <p>We maintain best-in-class sterilization practices and use modern equipment to deliver painless treatments, from routine checkups to complex root canals.</p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <p className="text-4xl font-bold text-navy-900 mb-1">15+</p>
              <p className="text-sm font-medium text-navy-900/50 uppercase tracking-wider">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-navy-900 mb-1">5k+</p>
              <p className="text-sm font-medium text-navy-900/50 uppercase tracking-wider">Happy Patients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-500/10 blur-[120px]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Where Expertise Meets Care</h2>
            <div className="grid gap-6">
              {[
                "Advanced sterilization protocols",
                "Modern equipment & technology",
                "Precision-driven procedures",
                "Transparent treatment explanation",
                "Patient-first philosophy",
                "Comfortable, anxiety-free experience"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                    <ShieldCheck size={14} className="text-teal-500 group-hover:text-white" />
                  </div>
                  <span className="text-lg font-medium text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[3rem]">
            <h3 className="text-3xl font-bold mb-6">Ready for your transformation?</h3>
            <p className="text-white/60 mb-10 leading-relaxed">Join thousands of satisfied patients who have experienced the premium care at THE DENTIST.</p>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.open('https://wa.me/+918384018384', '_blank'); }}>
              <input type="text" placeholder="Full Name" className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-teal-500 transition-colors" />
              <input type="tel" placeholder="Phone Number" className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-teal-500 transition-colors" />
              <button type="submit" className="w-full py-5 bg-teal-500 text-white rounded-2xl font-bold hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/20">Book My Appointment</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    { text: "Painless RCT with great precision. Dr. Vishal is truly an expert.", author: "Sarabhjeet Singh", role: "Patient" },
    { text: "Explains everything clearly before treatment. Best dental experience I've had.", author: "Bhoomika H.", role: "Patient" },
    { text: "Best sterilization practices. The clinic is incredibly clean and modern.", author: "Gungun K.", role: "Patient" },
    { text: "Professional and welcoming team. They made me feel at ease immediately.", author: "Rajat Lamba", role: "Patient" },
  ];

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4 tracking-tight">Patient Stories</h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-xl font-bold text-navy-900">4.7</span>
            <div className="flex gap-1 text-yellow-500">
              {[1, 2, 3, 4].map((s) => <Star key={s} fill="currentColor" />)}
              <Star fill="currentColor" className="opacity-50" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="p-8 rounded-3xl bg-[#F9F9F9] border border-gray-100 italic text-navy-900/70 leading-relaxed relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-navy-900 font-serif text-2xl">“</div>
              <p className="mb-6">"{review.text}"</p>
              <div className="not-italic">
                <p className="font-bold text-navy-900">{review.author}</p>
                <p className="text-xs text-navy-900/40 uppercase tracking-widest font-bold">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#F9F9F9] pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="font-bold text-xl tracking-tighter text-navy-900">THE DENTIST</span>
            </div>
            <p className="text-navy-900/50 max-w-sm mb-8 leading-relaxed">
              Redefining dental excellence through precision, care, and a commitment to patient comfort. Experience the future of dentistry today.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-navy-900 hover:bg-navy-900 hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-navy-900 hover:bg-navy-900 hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-navy-900 hover:bg-navy-900 hover:text-white transition-all"><Twitter size={18} /></a>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold text-navy-900 mb-6 uppercase tracking-widest text-xs">Contact Us</h5>
            <ul className="space-y-4 text-navy-900/60 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-navy-900 shrink-0" />
                <span>Ground Floor, L-2/100 Upper,<br />New Mahavir Nagar, New Delhi, Delhi 110018</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-navy-900 shrink-0" />
                <a href="tel:08384018384" className="hover:text-navy-900 transition-colors">08384018384</a>
              </li>
              <li className="flex items-center gap-3">
                <Calendar size={18} className="text-navy-900 shrink-0" />
                <span>Mon - Sat: 9:30 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-navy-900 mb-6 uppercase tracking-widest text-xs">Quick Links</h5>
            <ul className="space-y-4 text-navy-900/60 text-sm">
              <li><a href="#services" className="hover:text-navy-900 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-navy-900 transition-colors">About Dr. Vishal</a></li>
              <li><a href="#reviews" className="hover:text-navy-900 transition-colors">Patient Reviews</a></li>
              <li><a href="#" className="hover:text-navy-900 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-gray-200 flex flex-col md:row justify-between items-center gap-4 text-xs text-navy-900/30 font-bold uppercase tracking-widest">
          <p>© 2026 THE DENTIST. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-navy-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-navy-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-navy-900 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const StickyCTA = () => {
  return (
    <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden flex gap-3">
      <a href="https://wa.me/+918384018384" target="_blank" rel="noopener noreferrer" className="flex-1 py-4 bg-navy-900 text-white rounded-2xl font-bold shadow-2xl flex items-center justify-center gap-2">
        <Calendar size={18} /> Book
      </a>
      <a href="tel:08384018384" className="flex-1 py-4 bg-teal-500 text-white rounded-2xl font-bold shadow-2xl flex items-center justify-center gap-2">
        <Phone size={18} /> Call
      </a>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Reviews />
      <Footer />
      <StickyCTA />
    </div>
  );
}
