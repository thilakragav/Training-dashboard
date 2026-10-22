import { Router, Response } from 'express';
import { prisma } from '../db.js';
import { requireAuth, requireAdmin, AuthRequest } from '../middleware/auth.middleware.js';

const router = Router();

// GET /api/admin/stats
router.get('/stats', requireAuth, requireAdmin, async (_req: AuthRequest, res: Response) => {
  try {
    const [totalCourses, totalStudents, totalEnquiries, newEnquiries, totalWorkshops] = await Promise.all([
      prisma.course.count(),
      prisma.user.count({ where: { role: { name: 'STUDENT' } } }),
      prisma.enquiry.count(),
      prisma.enquiry.count({ where: { status: 'NEW' } }),
      prisma.workshop.count()
    ]);

    return res.json({
      totalCourses,
      totalStudents,
      totalEnquiries,
      newEnquiries,
      totalWorkshops,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to aggregate administrative metrics.' });
  }
});

// GET /api/admin/students
router.get('/students', requireAuth, requireAdmin, async (_req: AuthRequest, res: Response) => {
  try {
    const students = await prisma.user.findMany({
      where: { role: { name: 'STUDENT' } },
      include: {
        profile: true,
        enrollments: {
          include: { course: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    });
    return res.json(students);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch registered students.' });
  }
});

export default router;
