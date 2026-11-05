import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, Lock, Mail, User, Phone, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !password.trim()) {
      setError('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    try {
      await register(fullName, email, phone);
      navigate('/portal');
    } catch {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-nodal-bg pt-28 pb-20 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-nodal-surface border border-nodal-border rounded-3xl p-6 sm:p-8 shadow-2xl text-left space-y-6">
        
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-nodal-blue to-nodal-violet flex items-center justify-center text-white mx-auto shadow-lg shadow-nodal-blue/30">
            <GraduationCap className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-black text-nodal-text tracking-tight">Create Student Account</h1>
          <p className="text-xs text-nodal-muted">Join NodalBot Academy & start your guided journey</p>
        </div>

        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-xs text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-nodal-muted mb-1">Full Name *</label>
            <div className="relative">
              <User className="w-4 h-4 text-nodal-muted absolute left-3.5 top-3" />
              <input
                type="text"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                placeholder="e.g. Maya Deshmukh"
                required
                className="w-full pl-10 pr-3.5 py-2.5 bg-nodal-card border border-nodal-border rounded-xl text-white text-xs focus:outline-none focus:border-nodal-blue transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-nodal-muted mb-1">Email Address *</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-nodal-muted absolute left-3.5 top-3" />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="maya@example.com"
                required
                className="w-full pl-10 pr-3.5 py-2.5 bg-nodal-card border border-nodal-border rounded-xl text-white text-xs focus:outline-none focus:border-nodal-blue transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-nodal-muted mb-1">Phone Number (Optional)</label>
            <div className="relative">
              <Phone className="w-4 h-4 text-nodal-muted absolute left-3.5 top-3" />
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full pl-10 pr-3.5 py-2.5 bg-nodal-card border border-nodal-border rounded-xl text-white text-xs focus:outline-none focus:border-nodal-blue transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-nodal-muted mb-1">Password *</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-nodal-muted absolute left-3.5 top-3" />
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="At least 8 characters"
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
            <span>{isLoading ? 'Creating Account...' : 'Register & Enter Portal'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-2 text-center text-xs text-nodal-muted border-t border-nodal-border">
          <span>Already registered? </span>
          <Link to="/login" className="text-nodal-cyan font-semibold hover:underline">
            Sign In Here
          </Link>
        </div>

      </div>
    </div>
  );
};
