import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Info, Settings } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import { Card } from '../components/common/Card';

const Simulator = () => {
  const [voterTurnout, setVoterTurnout] = useState(66);
  const [youthShift, setYouthShift] = useState(0);

  // Simulation Logic (simplified for demonstration)
  const baseRedSeats = 280;
  const baseBlueSeats = 240;
  const swingSeats = 142; // Highly competitive seats
  
  // Calculate impact based on turnout and youth shift
  const turnoutImpact = (voterTurnout - 66) * 1.5; // Every 1% turnout shift affects 1.5 seats
  const youthImpact = youthShift * 2.2; // Youth swing has higher impact on specific seats

  const totalImpact = Math.round(turnoutImpact + youthImpact);
  
  const projectedRed = Math.max(0, baseRedSeats - (totalImpact > 0 ? totalImpact * 0.4 : totalImpact * 0.6));
  const projectedBlue = Math.max(0, baseBlueSeats + (totalImpact > 0 ? totalImpact * 0.8 : totalImpact * 0.2));
  const otherSeats = 543 - (projectedRed + projectedBlue); // Total 543 seats

  return (
    <PageWrapper className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">"Does My Vote Matter?" Simulator</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          See how tiny shifts in voter turnout and youth participation can completely flip an election outcome.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Controls */}
        <Card className="p-8 lg:col-span-5 bg-white dark:bg-dark-800 border-none shadow-xl">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Settings className="text-primary-500" /> Adjust Parameters
          </h2>
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <label className="font-bold text-slate-700 dark:text-slate-300">Overall Voter Turnout</label>
                <span className="font-mono text-primary-600 dark:text-primary-400 font-bold">{voterTurnout}%</span>
              </div>
              <input 
                type="range" 
                min="50" 
                max="85" 
                value={voterTurnout} 
                onChange={(e) => setVoterTurnout(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary-500 dark:bg-slate-700"
              />
              <p className="text-xs text-slate-500 mt-2">Historical average is ~66%.</p>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="font-bold text-slate-700 dark:text-slate-300">Youth Vote Shift</label>
                <span className="font-mono text-purple-600 dark:text-purple-400 font-bold">
                  {youthShift > 0 ? '+' : ''}{youthShift}%
                </span>
              </div>
              <input 
                type="range" 
                min="-15" 
                max="15" 
                value={youthShift} 
                onChange={(e) => setYouthShift(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-500 dark:bg-slate-700"
              />
              <p className="text-xs text-slate-500 mt-2">Shift in youth voting preference towards the opposition.</p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex gap-3 text-blue-700 dark:text-blue-300">
            <Info className="shrink-0 mt-0.5" size={20} />
            <p className="text-sm">
              In 2019, 142 seats were won with a margin of less than 5%. A mere 2% increase in youth turnout in these specific constituencies could have flipped 40+ seats.
            </p>
          </div>
        </Card>

        {/* Visualization */}
        <Card className="p-8 lg:col-span-7 bg-slate-900 border-none shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-8">Projected Parliament Composition</h2>
            
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-slate-400 text-sm mb-1">Incumbent Party</p>
                <p className="text-4xl font-black text-rose-500">{Math.round(projectedRed)}</p>
              </div>
              <div className="text-center">
                <p className="text-slate-500 text-sm mb-1">Others</p>
                <p className="text-2xl font-bold text-slate-400">{Math.round(otherSeats)}</p>
              </div>
              <div className="text-right">
                <p className="text-slate-400 text-sm mb-1">Opposition</p>
                <p className="text-4xl font-black text-blue-500">{Math.round(projectedBlue)}</p>
              </div>
            </div>

            {/* Parliament Bar */}
            <div className="h-12 w-full flex rounded-xl overflow-hidden mb-8 shadow-inner bg-slate-800">
              <motion.div 
                className="bg-rose-500 h-full"
                animate={{ width: `${(projectedRed / 543) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
              <motion.div 
                className="bg-slate-600 h-full"
                animate={{ width: `${(otherSeats / 543) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
              <motion.div 
                className="bg-blue-500 h-full"
                animate={{ width: `${(projectedBlue / 543) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            <div className="absolute left-1/2 -translate-x-1/2 top-[120px] bottom-0 w-px border-l-2 border-dashed border-white/30 z-20 pointer-events-none">
              <div className="absolute -top-6 -left-10 bg-slate-800 text-white text-xs px-2 py-1 rounded border border-slate-700">
                Majority: 272
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-12">
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <p className="text-slate-400 text-sm mb-1">Net Seat Change</p>
                <p className="text-2xl font-bold text-white">
                  {totalImpact > 0 ? '+' : ''}{Math.round(totalImpact)}
                </p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <p className="text-slate-400 text-sm mb-1">Margin of Victory</p>
                <p className="text-2xl font-bold text-white">
                  {Math.abs(Math.round(projectedRed - projectedBlue))} seats
                </p>
              </div>
            </div>

          </div>
        </Card>
      </div>
    </PageWrapper>
  );
};

export default Simulator;
