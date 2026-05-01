import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Brain size={24} className="text-primary-500" />
              <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                VoteWise<span className="text-primary-500">IQ</span>
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 max-w-md mb-6 leading-relaxed">
              The world's first AI-powered Election Decision Intelligence Platform. 
              Teaching citizens how to think critically before voting.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-dark-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-50 hover:text-primary-600 transition-colors text-sm font-bold">
                𝕏
              </a>
              <a href="#" aria-label="GitHub" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-dark-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-50 hover:text-primary-600 transition-colors text-sm font-bold">
                GH
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-dark-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-50 hover:text-primary-600 transition-colors text-sm font-bold">
                in
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-slate-900 dark:text-white mb-4">Features</h4>
            <ul className="space-y-3">
              <li><Link to="/lab" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">Decision Lab</Link></li>
              <li><Link to="/manifesto" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">Manifesto AI</Link></li>
              <li><Link to="/dashboard" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">Data Dashboard</Link></li>
              <li><Link to="/simulator" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">Impact Simulator</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-slate-900 dark:text-white mb-4">Learn</h4>
            <ul className="space-y-3">
              <li><Link to="/propaganda" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">Propaganda Detector</Link></li>
              <li><Link to="/quiz" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">Voter IQ Test</Link></li>
              <li><Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">About Democracy</Link></li>
              <li><Link to="/privacy" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
            MADE BY THE RAMCHAITANYAGOUD BIBIPET
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500" /> for PromptWars
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
