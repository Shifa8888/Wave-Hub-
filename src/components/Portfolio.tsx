import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Code2 } from 'lucide-react';

const categories = ['All', 'Web', 'Mobile', 'Cloud', 'AI'];

const projects = [
  {
    title: 'NeoBank Pro',
    category: 'Web',
    description: 'A next-gen digital banking platform with real-time transactions and AI-driven insights.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    gradient: 'from-blue-600 to-cyan-500',
    pattern: 'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.08) 0%, transparent 50%)',
    liveUrl: 'https://neobankpro.demo.wavehub.dev',
    githubUrl: 'https://github.com/wavehub/neobank-pro',
    image: '🏦',
  },
  {
    title: 'HealthSync',
    category: 'Mobile',
    description: 'Healthcare management app connecting patients with providers through telehealth solutions.',
    tags: ['React Native', 'Firebase', 'AI'],
    gradient: 'from-emerald-600 to-teal-500',
    pattern: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.08) 0%, transparent 50%)',
    liveUrl: 'https://healthsync.app.wavehub.dev',
    githubUrl: 'https://github.com/wavehub/healthsync',
    image: '🏥',
  },
  {
    title: 'CloudForge',
    category: 'Cloud',
    description: 'Enterprise cloud orchestration platform enabling seamless multi-cloud deployment strategies.',
    tags: ['Go', 'Kubernetes', 'Terraform'],
    gradient: 'from-violet-600 to-purple-500',
    pattern: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 50%)',
    liveUrl: 'https://cloudforge.wavehub.dev',
    githubUrl: 'https://github.com/wavehub/cloudforge',
    image: '☁️',
  },
  {
    title: 'DataMind AI',
    category: 'AI',
    description: 'Predictive analytics engine using deep learning to forecast market trends and consumer behavior.',
    tags: ['Python', 'TensorFlow', 'AWS'],
    gradient: 'from-orange-600 to-amber-500',
    pattern: 'radial-gradient(circle at 40% 60%, rgba(255,255,255,0.08) 0%, transparent 50%)',
    liveUrl: 'https://datamind-ai.wavehub.dev',
    githubUrl: 'https://github.com/wavehub/datamind-ai',
    image: '🧠',
  },
  {
    title: 'ShopVerse',
    category: 'Web',
    description: 'Full-stack e-commerce ecosystem with AR product visualization and smart recommendation engine.',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    gradient: 'from-pink-600 to-rose-500',
    pattern: 'radial-gradient(circle at 60% 40%, rgba(255,255,255,0.08) 0%, transparent 50%)',
    liveUrl: 'https://shopverse.demo.wavehub.dev',
    githubUrl: 'https://github.com/wavehub/shopverse',
    image: '🛒',
  },
  {
    title: 'FleetPilot',
    category: 'Mobile',
    description: 'Logistics and fleet management app with real-time GPS tracking and route optimization.',
    tags: ['Flutter', 'MapBox', 'Node.js'],
    gradient: 'from-sky-600 to-blue-500',
    pattern: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.08) 0%, transparent 50%)',
    liveUrl: 'https://fleetpilot.app.wavehub.dev',
    githubUrl: 'https://github.com/wavehub/fleetpilot',
    image: '🚛',
  },
];

export default function Portfolio() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
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
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-violet-400 border border-violet-400/20 bg-violet-400/5 mb-6">
            Our Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[Space_Grotesk] text-white mb-6">
            Featured <span className="gradient-text-alt">Projects</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A showcase of our finest work — each project reflects our commitment to quality,
            innovation, and client success.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                active === cat ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {active === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-violet-500/20 border border-blue-500/30"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="group glass-card rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Project Visual */}
                <div
                  className={`relative h-52 bg-gradient-to-br ${project.gradient} overflow-hidden`}
                  style={{ backgroundImage: project.pattern }}
                >
                  {/* Decorative elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <span className="text-4xl">{project.image}</span>
                    </div>
                  </div>

                  {/* Floating shapes */}
                  <div className="absolute top-6 right-6 w-12 h-12 border border-white/10 rounded-lg rotate-12 group-hover:rotate-45 transition-transform duration-700" />
                  <div className="absolute bottom-6 left-6 w-8 h-8 border border-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4">
                    <div className="flex items-center gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="group/btn relative"
                      >
                        <motion.div
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-blue-500/40 hover:border-blue-400/50 transition-all duration-300"
                        >
                          <Eye className="w-5 h-5 text-white" />
                        </motion.div>
                        <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-white/80 whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200 uppercase tracking-wider">
                          Live Demo
                        </span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="group/btn relative"
                      >
                        <motion.div
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-violet-500/40 hover:border-violet-400/50 transition-all duration-300"
                        >
                          <Code2 className="w-5 h-5 text-white" />
                        </motion.div>
                        <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-white/80 whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200 uppercase tracking-wider">
                          Source Code
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white font-[Space_Grotesk]">
                      {project.title}
                    </h3>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-slate-400 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
