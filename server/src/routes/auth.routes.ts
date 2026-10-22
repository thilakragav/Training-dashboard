import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../db.js';
import { requireAuth, AuthRequest } from '../middleware/auth.middleware.js';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'nexora-secret-key-change-in-production-2026';

// POST /api/auth/login
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() },
      include: { role: true, profile: true }
    });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password credentials.' });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password credentials.' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role.name },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role.name,
        avatarUrl: user.avatarUrl,
        streakDays: user.profile?.streakDays || 1
      }
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ error: 'Internal server error during login.' });
  }
});

// POST /api/auth/register
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { fullName, email, password, phone } = req.body;
    if (!fullName || !email || !password) {
      return res.status(400).json({ error: 'Full name, email, and password are required.' });
    }

    const existing = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() }
    });
    if (existing) {
      return res.status(409).json({ error: 'An account with this email already exists.' });
    }

    // Default to student role
    let studentRole = await prisma.role.findUnique({ where: { name: 'STUDENT' } });
    if (!studentRole) {
      studentRole = await prisma.role.create({ data: { name: 'STUDENT', description: 'Student' } });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        fullName,
        email: email.toLowerCase().trim(),
        phone,
        passwordHash,
        roleId: studentRole.id,
        profile: {
          create: {
            streakDays: 1
          }
        }
      },
      include: { role: true, profile: true }
    });

    const token = jwt.sign(
      { id: newUser.id, email: newUser.email, role: newUser.role.name },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.status(201).json({
      token,
      user: {
        id: newUser.id,
        email: newUser.email,
        fullName: newUser.fullName,
        role: newUser.role.name,
        streakDays: 1
      }
    });
  } catch (err) {
    console.error('Registration error:', err);
    return res.status(500).json({ error: 'Internal server error during registration.' });
  }
});

// GET /api/auth/me
router.get('/me', requireAuth, async (req: AuthRequest, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user!.id },
      include: { role: true, profile: true }
    });
    if (!user) return res.status(404).json({ error: 'User not found.' });

    return res.json({
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role.name,
        avatarUrl: user.avatarUrl,
        streakDays: user.profile?.streakDays || 1
      }
    });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch current user profile.' });
  }
});

export default router;
