import React from 'react';
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend 
} from 'recharts';
import PageWrapper from '../components/layout/PageWrapper';
import { Card } from '../components/common/Card';
import { Users, TrendingUp, AlertCircle } from 'lucide-react';

const turnoutData = [
  { year: '2004', turnout: 58.07, youth: 45 },
  { year: '2009', turnout: 58.21, youth: 48 },
  { year: '2014', turnout: 66.44, youth: 55 },
  { year: '2019', turnout: 67.40, youth: 62 },
  { year: '2024', turnout: 66.30, youth: 60 } // Projected/Latest
];

const budgetData = [
  { sector: 'Health', promised: 120, actual: 45 },
  { sector: 'Education', promised: 150, actual: 60 },
  { sector: 'Infrastructure', promised: 200, actual: 180 },
  { sector: 'Defense', promised: 300, actual: 290 },
  { sector: 'Agriculture', promised: 180, actual: 55 },
];

const propagandaData = [
  { day: 'Day -30', factChecks: 12, fakeNews: 45 },
  { day: 'Day -20', factChecks: 15, fakeNews: 68 },
  { day: 'Day -10', factChecks: 25, fakeNews: 140 },
  { day: 'Election Day', factChecks: 40, fakeNews: 280 },
  { day: 'Day +5', factChecks: 10, fakeNews: 35 },
];

const demographicData = [
  { group: '18-25', registered: 45, voted: 28 },
  { group: '26-35', registered: 65, voted: 45 },
  { group: '36-50', registered: 80, voted: 65 },
  { group: '50+', registered: 60, voted: 52 },
];

const DataDashboard = () => {
  return (
    <PageWrapper className="pb-20">
      <div className="bg-slate-900 pt-16 pb-32 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-bold mb-6 uppercase tracking-widest">
            <TrendingUp size={14} /> Real-time Decision Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Civic Data Dashboard</h1>
          <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
            Data doesn't lie. Explore the deep metrics of democratic participation and the economic reality of political promises.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card glass className="p-6 border-none shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Voter Turnout</p>
                <h3 className="text-4xl font-black mt-2">66.3%</h3>
              </div>
              <div className="p-3 bg-primary-500/10 text-primary-500 rounded-2xl">
                <Users size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-rose-500 text-sm font-bold">
              <TrendingUp size={16} className="rotate-180" /> -1.1% vs 2019
            </div>
          </Card>
          
          <Card glass className="p-6 border-none shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Youth Force</p>
                <h3 className="text-4xl font-black mt-2">60.0%</h3>
              </div>
              <div className="p-3 bg-purple-500/10 text-purple-500 rounded-2xl">
                <TrendingUp size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-rose-500 text-sm font-bold">
              <TrendingUp size={16} className="rotate-180" /> -2.0% vs 2019
            </div>
          </Card>
          
          <Card glass className="p-6 border-none shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">High Risk Seats</p>
                <h3 className="text-4xl font-black mt-2">142</h3>
              </div>
              <div className="p-3 bg-rose-500/10 text-rose-500 rounded-2xl">
                <AlertCircle size={24} />
              </div>
            </div>
            <div className="mt-4 text-slate-500 dark:text-slate-400 text-xs font-medium">
              Margins &lt; 5% of total votes
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Main Turnout Area Chart */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 uppercase tracking-tighter">
              <span className="w-2 h-6 bg-primary-500 rounded-full"></span> Historical Turnout Profile
            </h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={turnoutData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorTurnout" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" opacity={0.1} vertical={false} />
                  <XAxis dataKey="year" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis domain={[40, 80]} stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                    itemStyle={{ color: '#fff', fontSize: '12px' }}
                  />
                  <Area type="monotone" dataKey="turnout" stroke="#14b8a6" strokeWidth={4} fillOpacity={1} fill="url(#colorTurnout)" />
                  <Area type="monotone" dataKey="youth" stroke="#8b5cf6" strokeWidth={2} strokeDasharray="5 5" fill="none" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
               <span className="flex items-center gap-1"><span className="w-3 h-3 bg-primary-500 rounded-full"></span> Overall</span>
               <span className="flex items-center gap-1"><span className="w-3 h-3 bg-purple-500 rounded-full"></span> Youth (18-25)</span>
            </div>
          </Card>

          {/* Budget vs Reality Bar Chart */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 uppercase tracking-tighter">
              <span className="w-2 h-6 bg-rose-500 rounded-full"></span> Budget Promises vs Reality
            </h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={budgetData} layout="vertical" margin={{ left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} horizontal={false} />
                  <XAxis type="number" hide />
                  <YAxis dataKey="sector" type="category" stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  />
                  <Bar dataKey="promised" fill="#334155" radius={[0, 4, 4, 0]} barSize={8} name="Promised Allocation" />
                  <Bar dataKey="actual" fill="#f43f5e" radius={[0, 4, 4, 0]} barSize={20} name="Actual Spending" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Demographic Comparison */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 uppercase tracking-tighter">
              <span className="w-2 h-6 bg-purple-500 rounded-full"></span> Registration vs Participation
            </h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={demographicData}>
                  <XAxis dataKey="group" stroke="#94a3b8" fontSize={12} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
                  <Bar dataKey="registered" fill="#1e293b" radius={[10, 10, 10, 10]} barSize={40} />
                  <Bar dataKey="voted" fill="#a855f7" radius={[10, 10, 10, 10]} barSize={20} style={{ transform: 'translateX(-30px)' }} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Misinformation Spike Timeline */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 uppercase tracking-tighter">
              <span className="w-2 h-6 bg-amber-500 rounded-full"></span> Propaganda Velocity Index
            </h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={propagandaData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis dataKey="day" stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Line type="stepAfter" dataKey="fakeNews" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4, fill: '#f59e0b' }} />
                  <Line type="monotone" dataKey="factChecks" stroke="#10b981" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-4 text-[10px] text-slate-500 uppercase font-bold tracking-widest text-center">
              Orange = AI-Detected Misinformation Volume | Green = Fact-Check Response Rate
            </p>
          </Card>
        </div>
      </div>
    </PageWrapper>
  );
};

export default DataDashboard;
