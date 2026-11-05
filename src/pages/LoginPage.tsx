import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, Lock, Mail, ArrowRight, UserCheck, ShieldAlert, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login, switchToDemoStudent, switchToDemoAdmin } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Please provide your email and password');
      return;
    }

    setIsLoading(true);
    try {
      await login(email);
      if (email.toLowerCase().includes('admin')) {
        navigate('/admin');
      } else {
        navigate('/portal');
      }
    } catch {
      setError('Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInstantStudent = () => {
    switchToDemoStudent();
    navigate('/portal');
  };

  const handleInstantAdmin = () => {
    switchToDemoAdmin();
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-nodal-bg pt-28 pb-20 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-nodal-surface border border-nodal-border rounded-3xl p-6 sm:p-8 shadow-2xl text-left space-y-6">
        
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-nodal-blue to-nodal-violet flex items-center justify-center text-white mx-auto shadow-lg shadow-nodal-blue/30">
            <GraduationCap className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-black text-nodal-text tracking-tight">NodalBot Student Portal</h1>
          <p className="text-xs text-nodal-muted">Access your modules, code labs, and progress dashboard</p>
        </div>

        {/* 1-Click Evaluation Shortcuts */}
        <div className="p-4 bg-nodal-card border border-nodal-border rounded-2xl space-y-2.5">
          <span className="text-[10px] font-mono uppercase font-bold text-nodal-cyan tracking-wider block">
            Instant 1-Click Demo Evaluation
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={handleInstantStudent}
              className="px-3 py-2.5 bg-nodal-blue/15 hover:bg-nodal-blue/25 text-nodal-cyan border border-nodal-blue/30 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-1.5"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Demo Student</span>
            </button>
            <button
              type="button"
              onClick={handleInstantAdmin}
              className="px-3 py-2.5 bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-1.5"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Demo Admin</span>
            </button>
          </div>
        </div>

        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-xs text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-nodal-muted mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-nodal-muted absolute left-3.5 top-3" />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="student@nodalbot.com"
                required
                className="w-full pl-10 pr-3.5 py-2.5 bg-nodal-card border border-nodal-border rounded-xl text-white text-xs focus:outline-none focus:border-nodal-blue transition"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-medium text-nodal-muted">Password</label>
              <span className="text-[11px] text-nodal-cyan hover:underline cursor-pointer">Forgot?</span>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-nodal-muted absolute left-3.5 top-3" />
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full pl-10 pr-3.5 py-2.5 bg-nodal-card border border-nodal-border rounded-xl text-white text-xs focus:outline-none focus:border-nodal-blue transition"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn-primary py-3 flex items-center justify-center gap-2 text-xs"
          >
            <span>{isLoading ? 'Signing In...' : 'Sign In to Portal'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-2 text-center text-xs text-nodal-muted border-t border-nodal-border">
          <span>New student? </span>
          <Link to="/register" className="text-nodal-cyan font-semibold hover:underline">
            Create an Account
          </Link>
        </div>

      </div>
    </div>
  );
};
