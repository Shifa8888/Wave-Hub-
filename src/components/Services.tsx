import { motion } from 'framer-motion';
import { Code2, Smartphone, Globe, Shield, Cpu, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Custom web applications built with cutting-edge frameworks. From SPAs to complex enterprise platforms, we deliver scalable solutions.',
    color: 'from-blue-500 to-cyan-400',
    bgGlow: 'bg-blue-500/20',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'Native and cross-platform mobile experiences for iOS and Android that users love, with seamless performance and stunning UI.',
    color: 'from-violet-500 to-purple-400',
    bgGlow: 'bg-violet-500/20',
  },
  {
    icon: Globe,
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure and migration strategies. We architect solutions on AWS, Azure, and GCP for maximum reliability.',
    color: 'from-cyan-500 to-teal-400',
    bgGlow: 'bg-cyan-500/20',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description:
      'Comprehensive security audits, penetration testing, and secure development practices to protect your digital assets.',
    color: 'from-emerald-500 to-green-400',
    bgGlow: 'bg-emerald-500/20',
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    description:
      'Intelligent systems powered by ML and AI. From predictive analytics to natural language processing, we unlock data insights.',
    color: 'from-orange-500 to-amber-400',
    bgGlow: 'bg-orange-500/20',
  },
  {
    icon: BarChart3,
    title: 'Digital Strategy',
    description:
      'Data-driven digital transformation consulting. We align technology with your business goals for measurable outcomes.',
    color: 'from-pink-500 to-rose-400',
    bgGlow: 'bg-pink-500/20',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-violet-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-blue-400 border border-blue-400/20 bg-blue-400/5 mb-6">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[Space_Grotesk] text-white mb-6">
            Solutions That <span className="gradient-text">Drive Growth</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We offer a comprehensive suite of software services designed to transform your business
            and keep you ahead of the competition.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group glass-card rounded-2xl p-8 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="relative w-14 h-14 mb-6">
                <div
                  className={`absolute inset-0 rounded-xl ${service.bgGlow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div
                  className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all font-[Space_Grotesk]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Arrow link */}
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-blue-400 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
