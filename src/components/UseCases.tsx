import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Building2, Factory, Sprout, Home } from 'lucide-react';

const useCases = [
  {
    id: 'cities',
    icon: Building2,
    title: 'Smart Cities',
    description: 'Transform urban infrastructure with AI-driven sustainability solutions',
    features: [
      'Smart grid optimization for reduced energy waste',
      'Traffic flow management to minimize emissions',
      'Public transportation efficiency analytics',
      'Waste management optimization',
    ],
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'manufacturing',
    icon: Factory,
    title: 'Manufacturing',
    description: 'Optimize industrial processes for maximum efficiency and minimal impact',
    features: [
      'Real-time production line energy monitoring',
      'Predictive maintenance to prevent waste',
      'Supply chain carbon footprint tracking',
      'Resource allocation optimization',
    ],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'agriculture',
    icon: Sprout,
    title: 'Agriculture',
    description: 'Sustainable farming powered by intelligent automation',
    features: [
      'Precision irrigation based on weather patterns',
      'Soil health monitoring and optimization',
      'Crop yield prediction and planning',
      'Automated pest control systems',
    ],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 'households',
    icon: Home,
    title: 'Households',
    description: 'Make every home a contributor to a sustainable future',
    features: [
      'Personalized energy consumption insights',
      'Smart appliance scheduling for off-peak hours',
      'Solar panel optimization',
      'Water usage monitoring and recommendations',
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
];

export default function UseCases() {
  const [activeTab, setActiveTab] = useState(useCases[0].id);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const activeUseCase = useCases.find((uc) => uc.id === activeTab) || useCases[0];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="use-cases">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Solutions for{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              Every Sector
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored sustainability solutions that adapt to your unique needs
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {useCases.map((useCase, index) => (
              <motion.button
                key={useCase.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveTab(useCase.id)}
                className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === useCase.id
                    ? 'bg-gradient-to-r ' + useCase.gradient + ' text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-3">
                  <useCase.icon className="w-5 h-5" />
                  <span>{useCase.title}</span>
                </div>
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div>
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${activeUseCase.gradient} flex items-center justify-center mb-6`}>
                    <activeUseCase.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {activeUseCase.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8">
                    {activeUseCase.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">Key Features</h4>
                  <ul className="space-y-4">
                    {activeUseCase.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${activeUseCase.gradient} flex items-center justify-center flex-shrink-0 mt-1`}>
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
