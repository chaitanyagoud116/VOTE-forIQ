import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Shield, BarChart3, Target } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import { Button } from '../components/common/Button';

const Landing = () => {
  const features = [
    {
      title: "Decision Lab",
      description: "Learn how to evaluate candidates logically based on your top priorities, not emotions.",
      icon: <Brain className="text-primary-500" size={28} />,
      link: "/lab"
    },
    {
      title: "Manifesto Decoder",
      description: "Paste any political manifesto and let AI expose vague promises vs. concrete commitments.",
      icon: <Target className="text-purple-500" size={28} />,
      link: "/manifesto"
    },
    {
      title: "Data Dashboard",
      description: "Explore beautiful, interactive visualizations of historical voter turnout and demographics.",
      icon: <BarChart3 className="text-blue-500" size={28} />,
      link: "/dashboard"
    },
    {
      title: "Propaganda Detector",
      description: "Master the art of spotting emotional manipulation, fear tactics, and fake statistics.",
      icon: <Shield className="text-rose-500" size={28} />,
      link: "/propaganda"
    }
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-dark-800 text-sm font-medium text-slate-600 dark:text-slate-300 mb-8 border border-slate-200 dark:border-slate-700">
              <span className="flex h-2 w-2 rounded-full bg-primary-500"></span>
              The Future of Democracy is Intelligence
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-primary-800 to-slate-900 dark:from-white dark:via-primary-300 dark:to-white">
              Think Before <br className="hidden md:block" /> You Vote.
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              We don't tell you who to vote for. We teach you <span className="font-semibold text-primary-600 dark:text-primary-400">how to think</span>. 
              Use data, logic, and AI to make informed decisions and break free from emotional manipulation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/lab">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Decision Lab <ArrowRight size={20} />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  How it Works
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50 dark:bg-dark-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Intelligent Voting Toolkit</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Everything you need to see past the noise and evaluate candidates on real issues.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link to={feature.link} className="block h-full">
                  <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all h-full group hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-xl bg-slate-50 dark:bg-dark-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors">{feature.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-600 dark:bg-primary-900"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to upgrade your democratic IQ?</h2>
          <p className="text-primary-100 text-xl mb-10">Join millions of informed citizens making logic-driven choices.</p>
          <Link to="/quiz">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-slate-50 hover:text-primary-700 shadow-xl">
              Take the Voter IQ Test
            </Button>
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Landing;
