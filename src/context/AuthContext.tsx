import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';
import { DEMO_STUDENT, DEMO_ADMIN } from '../services/api';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isStudent: boolean;
  login: (email: string, role?: 'STUDENT' | 'ADMIN') => Promise<void>;
  register: (fullName: string, email: string, phone?: string) => Promise<void>;
  logout: () => void;
  switchToDemoStudent: () => void;
  switchToDemoAdmin: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_USER_KEY = 'nexora_auth_current_user';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window === 'undefined') return null;
    const saved = localStorage.getItem(AUTH_USER_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Error reading auth state', e);
      }
    }
    // Default to demo student for friendly instantaneous preview
    return DEMO_STUDENT;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(AUTH_USER_KEY);
    }
  }, [user]);

  const login = async (email: string, role: 'STUDENT' | 'ADMIN' = 'STUDENT') => {
    if (email.toLowerCase().includes('admin') || role === 'ADMIN') {
      setUser(DEMO_ADMIN);
    } else {
      setUser({
        ...DEMO_STUDENT,
        email,
        fullName: email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
      });
    }
  };

  const register = async (fullName: string, email: string, phone?: string) => {
    const newUser: User = {
      id: `usr-${Date.now()}`,
      fullName,
      email,
      phone,
      role: 'STUDENT',
      streakDays: 1,
      createdAt: new Date().toISOString()
    };
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  const switchToDemoStudent = () => {
    setUser(DEMO_STUDENT);
  };

  const switchToDemoAdmin = () => {
    setUser(DEMO_ADMIN);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isAdmin: user?.role === 'ADMIN',
        isStudent: user?.role === 'STUDENT',
        login,
        register,
        logout,
        switchToDemoStudent,
        switchToDemoAdmin
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
