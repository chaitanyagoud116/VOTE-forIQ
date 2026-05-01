import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { ErrorBoundary } from './components/common/ErrorBoundary';

// Lazy load pages for performance
const Landing = React.lazy(() => import('./pages/Landing'));
const DecisionLab = React.lazy(() => import('./pages/DecisionLab'));
const ManifestoDecoder = React.lazy(() => import('./pages/ManifestoDecoder'));
const DataDashboard = React.lazy(() => import('./pages/DataDashboard'));
const Simulator = React.lazy(() => import('./pages/Simulator'));
const PropagandaDetector = React.lazy(() => import('./pages/PropagandaDetector'));
const QuizCenter = React.lazy(() => import('./pages/QuizCenter'));
const About = React.lazy(() => import('./pages/About'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/Signup'));

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <Layout>
            <React.Suspense fallback={
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          }>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Landing />} />
              <Route path="/manifesto" element={<ManifestoDecoder />} />
              <Route path="/dashboard" element={<DataDashboard />} />
              <Route path="/simulator" element={<Simulator />} />
              <Route path="/propaganda" element={<PropagandaDetector />} />
              <Route path="/quiz" element={<QuizCenter />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/* Protected Routes */}
              <Route path="/lab" element={
                <ProtectedRoute>
                  <DecisionLab />
                </ProtectedRoute>
              } />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />
            </Routes>
          </React.Suspense>
        </Layout>
      </Router>
    </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
