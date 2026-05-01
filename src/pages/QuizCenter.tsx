import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Award, ChevronRight, Check, X, Globe, ChevronDown } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { INDIAN_LANGUAGES } from '../utils/languages';
import { TRANSLATED_QUIZ } from '../utils/quizTranslations';
import { cn } from '../utils/cn';

const QuizCenter = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  /** Resolve quiz questions — fall back to English if translation unavailable */
  const quizQuestions = useMemo(() => {
    return TRANSLATED_QUIZ[selectedLanguage] || TRANSLATED_QUIZ['en'];
  }, [selectedLanguage]);

  const currentLang = INDIAN_LANGUAGES.find(l => l.code === selectedLanguage);
  const hasTranslation = Boolean(TRANSLATED_QUIZ[selectedLanguage]);

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
    setQuizStarted(false);
  };

  return (
    <PageWrapper className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Democratic IQ Test</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Test your ability to spot misinformation, evaluate policy, and think critically.
        </p>
      </div>

      {/* Language Selector */}
      {!quizStarted && (
        <Card className="p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="text-primary-500" size={24} />
            <h2 className="text-2xl font-bold">Select Your Language</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            India speaks many languages. Choose your preferred language to take the quiz.
          </p>

          {/* Language Dropdown */}
          <div className="relative mb-8">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="w-full flex items-center justify-between p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-dark-900 hover:border-primary-500 transition-all"
            >
              <span className="flex items-center gap-3">
                <span className="text-2xl">{currentLang?.nativeName}</span>
                <span className="text-slate-500">({currentLang?.name})</span>
              </span>
              <ChevronDown size={20} className={cn("text-slate-400 transition-transform", isLanguageOpen && "rotate-180")} />
            </button>

            {isLanguageOpen && (
              <div className="absolute z-50 mt-2 w-full max-h-80 overflow-y-auto bg-white dark:bg-dark-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xl">
                {INDIAN_LANGUAGES.map((lang) => {
                  const isAvailable = Boolean(TRANSLATED_QUIZ[lang.code]);
                  return (
                    <button
                      key={lang.code}
                      onClick={() => { setSelectedLanguage(lang.code); setIsLanguageOpen(false); }}
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-3 text-left hover:bg-slate-50 dark:hover:bg-dark-700 transition-colors border-b border-slate-100 dark:border-slate-700 last:border-0",
                        selectedLanguage === lang.code && "bg-primary-50 dark:bg-primary-900/20"
                      )}
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-medium">{lang.nativeName}</span>
                        <span className="text-sm text-slate-500">{lang.name}</span>
                        <span className="text-xs text-slate-400">({lang.states.slice(0, 2).join(', ')})</span>
                      </span>
                      {isAvailable ? (
                        <span className="text-xs bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 px-2 py-0.5 rounded-full font-bold">Available</span>
                      ) : (
                        <span className="text-xs bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400 px-2 py-0.5 rounded-full">English fallback</span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {!hasTranslation && selectedLanguage !== 'en' && (
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl mb-6 text-amber-700 dark:text-amber-300 text-sm border border-amber-200 dark:border-amber-800">
              Translation for <strong>{currentLang?.name}</strong> is coming soon. The quiz will be shown in English for now.
            </div>
          )}

          <Button onClick={() => setQuizStarted(true)} size="lg" className="w-full">
            Start Quiz in {currentLang?.nativeName || 'English'}
          </Button>
        </Card>
      )}

      {/* Quiz Active */}
      {quizStarted && !quizComplete && (
        <Card className="p-8">
          <div className="mb-8 flex justify-between items-center text-sm font-medium text-slate-500">
            <span className="flex items-center gap-2">
              <Globe size={16} /> {currentLang?.nativeName}
            </span>
            <span>Question {currentQuestion + 1} / {quizQuestions.length} — Score: {score}</span>
          </div>

          <h2 className="text-2xl font-bold mb-8">{quizQuestions[currentQuestion].question}</h2>

          <div className="space-y-4 mb-8">
            {quizQuestions[currentQuestion].options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === quizQuestions[currentQuestion].correctAnswer;

              let btnClass = "border-slate-200 dark:border-slate-700 hover:border-primary-500 hover:bg-slate-50 dark:hover:bg-dark-800";
              if (showResult) {
                if (isCorrect) btnClass = "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400";
                else if (isSelected && !isCorrect) btnClass = "border-rose-500 bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400";
                else btnClass = "border-slate-200 dark:border-slate-800 opacity-50";
              }

              return (
                <button
                  key={index}
                  disabled={showResult}
                  onClick={() => handleAnswer(index)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between ${btnClass}`}
                >
                  <span>{option}</span>
                  {showResult && isCorrect && <Check size={20} className="text-emerald-500 shrink-0" />}
                  {showResult && isSelected && !isCorrect && <X size={20} className="text-rose-500 shrink-0" />}
                </button>
              );
            })}
          </div>

          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl mb-8 border border-primary-100 dark:border-primary-800"
            >
              <h4 className="font-bold text-primary-700 dark:text-primary-300 mb-2">Why this matters:</h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                {quizQuestions[currentQuestion].explanation}
              </p>
            </motion.div>
          )}

          {showResult && (
            <div className="flex justify-end border-t border-slate-100 dark:border-slate-800 pt-6">
              <Button onClick={nextQuestion}>
                {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'See Results'} <ChevronRight size={20} />
              </Button>
            </div>
          )}
        </Card>
      )}

      {/* Quiz Complete */}
      {quizComplete && (
        <Card className="p-12 text-center">
          <div className="w-24 h-24 bg-amber-100 dark:bg-amber-900/30 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award size={48} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            You scored {score} out of {quizQuestions.length}.
          </p>
          <Button onClick={resetQuiz}>
            Retake Quiz
          </Button>
        </Card>
      )}
    </PageWrapper>
  );
};

export default QuizCenter;
