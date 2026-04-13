import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Smartphone, Globe, Shield, Cpu, BarChart3, X, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Custom web applications built with cutting-edge frameworks. From SPAs to complex enterprise platforms, we deliver scalable solutions.',
    modalDescription:
      'We specialize in building high-performance web applications using React, Next.js, Vue, and more. Our team delivers everything from landing pages to full-scale enterprise platforms — optimized for speed, SEO, and user experience.',
    features: ['React / Next.js / Vue', 'REST & GraphQL APIs', 'Performance Optimization', 'SEO & Accessibility'],
    color: 'from-blue-500 to-cyan-400',
    bgGlow: 'bg-blue-500/20',
    borderColor: 'border-blue-500/30',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'Native and cross-platform mobile experiences for iOS and Android that users love, with seamless performance and stunning UI.',
    modalDescription:
      'From concept to App Store, we build native iOS/Android and cross-platform apps using React Native and Flutter. We focus on smooth animations, offline support, and intuitive UX that keeps users coming back.',
    features: ['React Native & Flutter', 'iOS & Android', 'Push Notifications', 'Offline Support'],
    color: 'from-violet-500 to-purple-400',
    bgGlow: 'bg-violet-500/20',
    borderColor: 'border-violet-500/30',
  },
  {
    icon: Globe,
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure and migration strategies. We architect solutions on AWS, Azure, and GCP for maximum reliability.',
    modalDescription:
      'We design and manage cloud infrastructure that scales with your business. Whether you\'re migrating legacy systems or building cloud-native apps, we ensure high availability, cost efficiency, and security.',
    features: ['AWS / Azure / GCP', 'CI/CD Pipelines', 'Auto Scaling', 'Cost Optimization'],
    color: 'from-cyan-500 to-teal-400',
    bgGlow: 'bg-cyan-500/20',
    borderColor: 'border-cyan-500/30',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description:
      'Comprehensive security audits, penetration testing, and secure development practices to protect your digital assets.',
    modalDescription:
      'Our security experts conduct thorough audits, vulnerability assessments, and penetration tests. We implement industry best practices to safeguard your applications, data, and infrastructure from modern threats.',
    features: ['Penetration Testing', 'Security Audits', 'OWASP Compliance', 'Incident Response'],
    color: 'from-emerald-500 to-green-400',
    bgGlow: 'bg-emerald-500/20',
    borderColor: 'border-emerald-500/30',
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    description:
      'Intelligent systems powered by ML and AI. From predictive analytics to natural language processing, we unlock data insights.',
    modalDescription:
      'We build custom AI/ML solutions tailored to your business — from recommendation engines and NLP chatbots to computer vision and predictive analytics. Turn your data into a competitive advantage.',
    features: ['Custom ML Models', 'NLP & Chatbots', 'Computer Vision', 'Predictive Analytics'],
    color: 'from-orange-500 to-amber-400',
    bgGlow: 'bg-orange-500/20',
    borderColor: 'border-orange-500/30',
  },
  {
    icon: BarChart3,
    title: 'Digital Strategy',
    description:
      'Data-driven digital transformation consulting. We align technology with your business goals for measurable outcomes.',
    modalDescription:
      'We partner with you to craft a digital roadmap that aligns technology investments with business objectives. From market analysis to KPI tracking, we ensure every decision is backed by data.',
    features: ['Digital Roadmapping', 'KPI & Analytics', 'Market Research', 'Tech Stack Consulting'],
    color: 'from-pink-500 to-rose-400',
    bgGlow: 'bg-pink-500/20',
    borderColor: 'border-pink-500/30',
  },
];

type Service = typeof services[0];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
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

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const Icon = service.icon;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal */}
        <motion.div
          className={`relative z-10 w-full max-w-lg glass-card rounded-2xl p-8 border ${service.borderColor}`}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          {/* Icon */}
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
            <Icon className="w-7 h-7 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-4 font-[Space_Grotesk]">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 leading-relaxed mb-6">
            {service.modalDescription}
          </p>

          {/* Features */}
          <ul className="space-y-2 mb-8">
            {service.features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-slate-300">
                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.color} flex-shrink-0`} />
                {f}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            onClick={onClose}
            className="btn-gradient w-full py-3 rounded-full text-sm font-semibold text-white inline-flex items-center justify-center gap-2 group"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
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

                {/* Learn more button */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="mt-6 flex items-center gap-2 text-sm font-medium text-blue-400 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:text-blue-300"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </>
  );
}
