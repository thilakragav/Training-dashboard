import { Router, Response } from 'express';
import { prisma } from '../db.js';
import { requireAuth, AuthRequest } from '../middleware/auth.middleware.js';

const router = Router();

// GET /api/student/enrollments
router.get('/enrollments', requireAuth, async (req: AuthRequest, res: Response) => {
  try {
    const enrollments = await prisma.enrollment.findMany({
      where: { userId: req.user!.id },
      include: {
        course: {
          select: {
            title: true,
            slug: true,
            category: true,
            durationWeeks: true,
            modules: {
              select: {
                id: true,
                moduleNumber: true,
                title: true,
                lessons: {
                  select: { id: true, title: true, durationMinutes: true, type: true }
                }
              }
            }
          }
        }
      }
    });
    return res.json(enrollments);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch student enrollments.' });
  }
});

// POST /api/student/enroll
router.post('/enroll', requireAuth, async (req: AuthRequest, res: Response) => {
  try {
    const { courseId } = req.body;
    if (!courseId) return res.status(400).json({ error: 'courseId is required.' });

    const existing = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId: req.user!.id,
          courseId
        }
      }
    });

    if (existing) return res.json(existing);

    const newEnrollment = await prisma.enrollment.create({
      data: {
        userId: req.user!.id,
        courseId,
        completionPercentage: 0,
        status: 'IN_PROGRESS'
      }
    });

    await prisma.course.update({
      where: { id: courseId },
      data: { enrolledCount: { increment: 1 } }
    });

    return res.status(201).json(newEnrollment);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to enroll student.' });
  }
});

// POST /api/student/progress
router.post('/progress', requireAuth, async (req: AuthRequest, res: Response) => {
  try {
    const { courseId, lessonId, isCompleted } = req.body;
    if (!courseId || !lessonId) {
      return res.status(400).json({ error: 'courseId and lessonId are required.' });
    }

    const progress = await prisma.lessonProgress.upsert({
      where: {
        userId_lessonId: {
          userId: req.user!.id,
          lessonId
        }
      },
      update: {
        isCompleted,
        completedAt: isCompleted ? new Date() : null
      },
      create: {
        userId: req.user!.id,
        lessonId,
        isCompleted,
        completedAt: isCompleted ? new Date() : null
      }
    });

    return res.json(progress);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to update lesson progress.' });
  }
});

// GET /api/student/certificates
router.get('/certificates', requireAuth, async (req: AuthRequest, res: Response) => {
  try {
    const certificates = await prisma.certificate.findMany({
      where: { userId: req.user!.id },
      include: { course: true }
    });
    return res.json(certificates);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch certificates.' });
  }
});

export default router;
