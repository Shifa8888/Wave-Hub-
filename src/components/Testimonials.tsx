import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, TechNova Inc.',
    avatar: 'SM',
    rating: 5,
    text: 'Wave Hub transformed our entire digital infrastructure. Their team delivered a scalable cloud platform that reduced our operational costs by 40%. Exceptional work and professionalism throughout the project.',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    name: 'Ahmed Al-Rashid',
    role: 'Founder, FinServe Global',
    avatar: 'AR',
    rating: 5,
    text: 'The mobile banking app they built for us is absolutely world-class. Secure, fast, and beautifully designed. Our user engagement increased by 65% within the first quarter of launch.',
    gradient: 'from-violet-500 to-purple-400',
  },
  {
    name: 'Emily Zhang',
    role: 'CTO, HealthBridge Solutions',
    avatar: 'EZ',
    rating: 5,
    text: 'Working with Wave Hub was a game-changer for our healthcare platform. Their AI integration for patient diagnostics is incredibly accurate and has saved countless hours for our medical staff.',
    gradient: 'from-emerald-500 to-teal-400',
  },
  {
    name: 'Marcus Johnson',
    role: 'VP Product, ShopSphere',
    avatar: 'MJ',
    rating: 5,
    text: 'The e-commerce platform Wave Hub built for us handles millions of transactions seamlessly. Their attention to UX details and performance optimization is truly impressive. Highly recommended!',
    gradient: 'from-orange-500 to-amber-400',
  },
  {
    name: 'Lisa Fernandez',
    role: 'Director, CloudPeak Labs',
    avatar: 'LF',
    rating: 5,
    text: 'Wave Hub delivered our cloud migration project ahead of schedule with zero downtime. Their expertise in Kubernetes and DevOps pipelines is unmatched. A truly reliable technology partner.',
    gradient: 'from-pink-500 to-rose-400',
  },
  {
    name: 'David Park',
    role: 'Co-Founder, LogiTech AI',
    avatar: 'DP',
    rating: 5,
    text: 'The AI-powered logistics platform they developed exceeded all expectations. Real-time route optimization reduced delivery times by 30%. Their team is innovative, responsive, and deeply skilled.',
    gradient: 'from-sky-500 to-blue-400',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-cyan-400 border border-cyan-400/20 bg-cyan-400/5 mb-6">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[Space_Grotesk] text-white mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Don't just take our word for it — hear from the businesses and leaders who've
            trusted us to bring their visions to life.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Big Quote Card */}
            <div className="glass-card rounded-3xl p-8 sm:p-12 relative min-h-[340px] flex flex-col justify-between">
              {/* Quote icon */}
              <div className="absolute top-6 right-8 opacity-10">
                <Quote className="w-24 h-24 text-violet-400" />
              </div>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: 'easeInOut' }}
                  className="relative z-10"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.08 }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 italic">
                    "{t.text}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg font-[Space_Grotesk]">
                        {t.name}
                      </h4>
                      <p className="text-slate-400 text-sm">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => { prev(); }}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-violet-400/40 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>

                {/* Dots */}
                <div className="flex items-center gap-2 px-4">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setDirection(i > current ? 1 : -1);
                        setCurrent(i);
                      }}
                      className="relative"
                    >
                      {i === current ? (
                        <motion.div
                          layoutId="activeTestimonial"
                          className="w-8 h-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors" />
                      )}
                    </button>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => { next(); }}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-violet-400/40 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row - Small Preview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16 max-w-5xl mx-auto"
        >
          {testimonials.map((item, i) => (
            <motion.button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              whileHover={{ y: -4, scale: 1.03 }}
              className={`glass-card rounded-xl p-4 text-center transition-all duration-300 cursor-pointer ${
                i === current
                  ? 'border-violet-400/40 bg-violet-400/5 shadow-lg shadow-violet-500/10'
                  : 'hover:border-white/20'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-xs mx-auto mb-2`}
              >
                {item.avatar}
              </div>
              <p className="text-white text-xs font-semibold truncate">{item.name.split(' ')[0]}</p>
              <p className="text-slate-500 text-[10px] truncate">{item.role.split(', ')[0]}</p>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
