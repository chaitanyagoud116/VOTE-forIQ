import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, BrainCircuit, Activity, Briefcase, GraduationCap, ShieldAlert, Trees } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { cn } from '../utils/cn';

const PRIORITIES = [
  { id: 'jobs', label: 'Employment & Economy', icon: <Briefcase size={20} /> },
  { id: 'health', label: 'Healthcare', icon: <Activity size={20} /> },
  { id: 'education', label: 'Education', icon: <GraduationCap size={20} /> },
  { id: 'safety', label: 'Law & Order', icon: <ShieldAlert size={20} /> },
  { id: 'environment', label: 'Environment', icon: <Trees size={20} /> },
];

const DecisionLab = () => {
  const [selectedPriorities, setSelectedPriorities] = useState<string[]>([]);
  const [step, setStep] = useState(1);

  const togglePriority = (id: string) => {
    if (selectedPriorities.includes(id)) {
      setSelectedPriorities(selectedPriorities.filter(p => p !== id));
    } else {
      if (selectedPriorities.length < 3) {
        setSelectedPriorities([...selectedPriorities, id]);
      }
    }
  };

  return (
    <PageWrapper className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-6">
          <BrainCircuit size={32} />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Decision Lab</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Remove emotions. Evaluate logically. Let's build your voting framework.
        </p>
      </div>

      <Card className="p-8 md:p-12">
        {step === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h2 className="text-2xl font-bold mb-2">Step 1: Define Your Priorities</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">Select up to 3 issues that matter most to you.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {PRIORITIES.map(p => {
                const isSelected = selectedPriorities.includes(p.id);
                return (
                  <button
                    key={p.id}
                    onClick={() => togglePriority(p.id)}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left",
                      isSelected 
                        ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300" 
                        : "border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700"
                    )}
                  >
                    <div className={cn("p-2 rounded-lg", isSelected ? "bg-primary-200 dark:bg-primary-800" : "bg-slate-100 dark:bg-dark-800")}>
                      {p.icon}
                    </div>
                    <span className="font-medium flex-grow">{p.label}</span>
                    {isSelected && <Check size={20} className="text-primary-500" />}
                  </button>
                )
              })}
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-slate-200 dark:border-slate-700">
              <span className="text-sm font-medium text-slate-500">
                {selectedPriorities.length}/3 Selected
              </span>
              <Button 
                onClick={() => setStep(2)} 
                disabled={selectedPriorities.length === 0}
              >
                Generate Framework <ArrowRight size={18} />
              </Button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-2xl font-bold mb-6">Your Evaluation Framework</h2>
            <div className="space-y-6">
              {selectedPriorities.map(id => {
                const priority = PRIORITIES.find(p => p.id === id);
                return (
                  <div key={id} className="bg-slate-50 dark:bg-dark-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-primary-500">{priority?.icon}</div>
                      <h3 className="text-lg font-bold">{priority?.label}</h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">What to look for:</h4>
                        <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                          <li>Concrete budget allocations in manifestos</li>
                          <li>Past voting record on this specific issue</li>
                          <li>Clear timelines for implementation</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-rose-500 uppercase tracking-wider mb-2">Red Flags (Avoid):</h4>
                        <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                          <li>Emotional appeals without statistical backing</li>
                          <li>Blaming past governments without providing a new solution</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="mt-8 flex justify-between">
              <Button variant="ghost" onClick={() => setStep(1)}>Back</Button>
              <Button>Save Framework to Profile</Button>
            </div>
          </motion.div>
        )}
      </Card>
    </PageWrapper>
  );
};

export default DecisionLab;
