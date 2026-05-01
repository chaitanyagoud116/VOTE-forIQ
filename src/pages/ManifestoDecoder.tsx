import React, { useState } from 'react';
import { Search, AlertTriangle, CheckCircle, HelpCircle, Loader2 } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { analyzeManifesto, type ManifestoAnalysis } from '../services/ai/gemini';
import { cn } from '../utils/cn';

const ManifestoDecoder = () => {
  const [text, setText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<ManifestoAnalysis | null>(null);

  const handleAnalyze = async () => {
    if (!text.trim()) return;
    setIsAnalyzing(true);
    try {
      const data = await analyzeManifesto(text);
      setResult(data);
    } catch (error) {
      console.error(error);
      alert('Analysis failed. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <PageWrapper className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Manifesto AI Decoder</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Paste politician's promises. Let AI separate the vague fluff from concrete commitments.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card className="p-6 flex flex-col h-full">
          <label htmlFor="manifesto-input" className="text-xl font-bold mb-4 flex items-center gap-2">
            <Search className="text-primary-500" /> Input Manifesto Text
          </label>
          <textarea
            id="manifesto-input"
            aria-label="Political manifesto text input"
            className="input-field flex-grow resize-none min-h-[300px] mb-6 font-mono text-sm leading-relaxed"
            placeholder="Paste text from a political speech, tweet, or official manifesto here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button 
            className="w-full" 
            onClick={handleAnalyze} 
            disabled={isAnalyzing || text.length < 20}
            isLoading={isAnalyzing}
          >
            {isAnalyzing ? 'Analyzing with Gemini...' : 'Analyze Promises'}
          </Button>
        </Card>

        {/* Results Section */}
        <Card className="p-6 bg-slate-50 dark:bg-dark-900/50">
          {!result && !isAnalyzing && (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 text-center">
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-dark-800 flex items-center justify-center mb-4">
                <Search size={32} />
              </div>
              <p>Analysis results will appear here.</p>
            </div>
          )}

          {isAnalyzing && (
            <div className="h-full flex flex-col items-center justify-center text-primary-500">
              <Loader2 size={48} className="animate-spin mb-4" />
              <p className="font-medium animate-pulse">Running AI linguistic analysis...</p>
            </div>
          )}

          {result && !isAnalyzing && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Top Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-center p-6 bg-white dark:bg-dark-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Economic Feasibility</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className={cn(
                      "text-5xl font-black",
                      result.feasibility >= 70 ? "text-emerald-500" : result.feasibility >= 40 ? "text-amber-500" : "text-rose-500"
                    )}>
                      {result.feasibility}
                    </span>
                    <span className="text-2xl text-slate-400 font-bold">/100</span>
                  </div>
                </div>

                <div className="text-center p-6 bg-white dark:bg-dark-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Manipulation Index</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className={cn(
                      "text-5xl font-black",
                      result.manipulationIndex <= 30 ? "text-emerald-500" : result.manipulationIndex <= 60 ? "text-amber-500" : "text-rose-500"
                    )}>
                      {result.manipulationIndex}
                    </span>
                    <span className="text-2xl text-slate-400 font-bold">/100</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">Higher = More rhetorical manipulation detected</p>
                </div>
              </div>

              {/* Sentiment & Hidden Costs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-primary-50 dark:bg-primary-900/10 rounded-xl border border-primary-100 dark:border-primary-900/30">
                  <h4 className="text-sm font-bold text-primary-700 dark:text-primary-300 uppercase mb-2">Rhetorical Style</h4>
                  <p className="text-slate-700 dark:text-slate-300">{result.sentiment}</p>
                </div>
                <div className="p-4 bg-rose-50 dark:bg-rose-900/10 rounded-xl border border-rose-100 dark:border-rose-900/30">
                  <h4 className="text-sm font-bold text-rose-700 dark:text-rose-300 uppercase mb-2">Hidden Costs / Risks</h4>
                  <p className="text-slate-700 dark:text-slate-300">{result.hiddenCosts}</p>
                </div>
              </div>

              {/* Promises Breakdown */}
              <div>
                <h3 className="text-lg font-bold mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">Scrutinized Promises</h3>
                <div className="space-y-3">
                  {result.promises?.map((p, i) => (
                    <div key={i} className="flex gap-3 p-4 bg-white dark:bg-dark-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                      {p.type === 'concrete' ? (
                        <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                      ) : (
                        <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={20} />
                      )}
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-1">
                          <p className="text-slate-900 dark:text-white font-medium">{p.text}</p>
                          <span className="text-xs font-bold text-slate-400">Score: {p.score}</span>
                        </div>
                        <span className={cn(
                          "text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter",
                          p.type === 'concrete' ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                        )}>
                          {p.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Questions to Ask */}
              <div className="p-6 bg-slate-900 text-white rounded-2xl">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <HelpCircle className="text-primary-400" size={20} /> Skeptical Citizen's Checklist
                </h3>
                <ul className="space-y-3">
                  {result.questions?.map((q: string, i: number) => (
                    <li key={i} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                      <span className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-xs font-bold">{i+1}</span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          )}
        </Card>
      </div>
    </PageWrapper>
  );
};

export default ManifestoDecoder;
