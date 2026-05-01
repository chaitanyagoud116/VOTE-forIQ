import React from 'react';
import { Shield, AlertTriangle, MessageSquareWarning, BarChartBig } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import { Card } from '../components/common/Card';

const PROPAGANDA_TYPES = [
  {
    id: 1,
    title: "Fear Mongering",
    icon: <AlertTriangle className="text-rose-500" size={24} />,
    description: "Using exaggerated threats to elicit an emotional response rather than a logical one.",
    example: '"If they win, our entire culture and way of life will be destroyed instantly!"',
    antidote: "Ask: What specific policy threatens this, and what is the actual statistical probability?"
  },
  {
    id: 2,
    title: "The 'Us vs Them' Fallacy",
    icon: <MessageSquareWarning className="text-amber-500" size={24} />,
    description: "Creating a false dichotomy that divides the world into pure good and absolute evil.",
    example: '"You are either a patriot who votes for us, or a traitor who supports them."',
    antidote: "Recognize that political issues are complex spectrums, rarely binary choices."
  },
  {
    id: 3,
    title: "Cherry-Picked Statistics",
    icon: <BarChartBig className="text-blue-500" size={24} />,
    description: "Presenting real data out of context to tell a misleading story.",
    example: '"Crime is up 200% in this specific neighborhood!" (Failing to mention overall crime is down 20%).',
    antidote: "Always look for the baseline, the broader trend, and the original data source."
  }
];

const PropagandaDetector = () => {
  return (
    <PageWrapper className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 mb-6">
          <Shield size={32} />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Propaganda Defense Training</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Learn the psychological tricks used to manipulate your vote, and how to defend your mind against them.
        </p>
      </div>

      <div className="space-y-8">
        {PROPAGANDA_TYPES.map((type) => (
          <Card key={type.id} className="p-0 overflow-hidden flex flex-col md:flex-row">
            <div className="bg-slate-50 dark:bg-dark-900 p-8 md:w-1/3 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800">
              <div className="mb-4">{type.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{type.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {type.description}
              </p>
            </div>
            <div className="p-8 md:w-2/3 flex flex-col justify-center space-y-6 bg-white dark:bg-dark-800">
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Real World Example</h4>
                <div className="p-4 bg-rose-50 dark:bg-rose-900/10 text-rose-800 dark:text-rose-200 rounded-xl italic font-serif text-lg border-l-4 border-rose-500">
                  {type.example}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">The Antidote</h4>
                <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 text-emerald-800 dark:text-emerald-200 rounded-xl font-medium border-l-4 border-emerald-500">
                  {type.antidote}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </PageWrapper>
  );
};

export default PropagandaDetector;
