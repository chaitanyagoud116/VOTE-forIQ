import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import { Card } from '../components/common/Card';

const About = () => {
  return (
    <PageWrapper className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">About VoteWise IQ</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          A neutral, data-driven platform designed to upgrade democracy.
        </p>
      </div>

      <div className="space-y-12 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h2>
          <p>
            Democracy relies on the assumption of an informed electorate. However, modern political campaigns often rely on emotional manipulation, vague promises, and identity politics rather than concrete policy discussions. VoteWise IQ exists to bridge this gap. We provide the tools necessary for citizens to evaluate candidates purely on logic, data, and policy viability.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Strict Neutrality Policy</h2>
          <Card className="p-6 bg-slate-50 dark:bg-dark-800 border-l-4 border-l-primary-500">
            <p className="mb-0">
              VoteWise IQ is fiercely non-partisan. We do not endorse candidates, parties, or specific ideologies. Our algorithms and educational materials are designed strictly to analyze the structural viability of claims and the logical consistency of arguments, regardless of who makes them.
            </p>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">How We Use AI</h2>
          <p>
            Our "Manifesto Decoder" utilizes advanced language models (Google Gemini) to perform semantic analysis on political texts. The AI is prompted specifically to isolate metrics, timelines, and budget references from rhetoric. It is a tool for extraction and classification, not for taking political stances.
          </p>
        </section>
      </div>
    </PageWrapper>
  );
};

export default About;
