import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from './Button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught React error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 dark:bg-dark-900 flex flex-col items-center justify-center p-4">
          <div className="max-w-md w-full bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700 text-center">
            <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/30 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle size={32} />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Something went wrong</h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              We encountered an unexpected error while loading this page. 
            </p>
            <Button onClick={() => window.location.reload()} className="w-full flex items-center justify-center gap-2">
              <RefreshCw size={18} /> Reload Page
            </Button>
            {import.meta.env.DEV && this.state.error && (
              <pre className="mt-6 p-4 bg-slate-100 dark:bg-dark-900 rounded-lg text-left text-xs text-rose-500 overflow-auto">
                {this.state.error.toString()}
              </pre>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
