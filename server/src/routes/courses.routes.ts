import { Router, Request, Response } from 'express';
import { prisma } from '../db.js';
import { requireAuth, requireAdmin } from '../middleware/auth.middleware.js';

const router = Router();

// GET /api/courses
router.get('/', async (req: Request, res: Response) => {
  try {
    const { category, level, search } = req.query;
    const where: any = { isPublished: true };

    if (category && category !== 'All') {
      where.category = String(category);
    }
    if (level && level !== 'All') {
      where.level = String(level).toUpperCase();
    }
    if (search) {
      where.OR = [
        { title: { contains: String(search), mode: 'insensitive' } },
        { shortDescription: { contains: String(search), mode: 'insensitive' } },
        { technologies: { has: String(search) } }
      ];
    }

    const courses = await prisma.course.findMany({
      where,
      include: {
        modules: {
          include: { lessons: true }
        }
      },
      orderBy: { rating: 'desc' }
    });

    return res.json(courses);
  } catch (err) {
    console.error('Fetch courses error:', err);
    return res.status(500).json({ error: 'Failed to retrieve courses.' });
  }
});

// GET /api/courses/:slug
router.get('/:slug', async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const course = await prisma.course.findFirst({
      where: {
        OR: [{ slug }, { id: slug }]
      },
      include: {
        modules: {
          include: { lessons: true }
        }
      }
    });

    if (!course) {
      return res.status(404).json({ error: 'Course not found.' });
    }

    return res.json(course);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to retrieve course details.' });
  }
});

// POST /api/courses (Admin only)
router.post('/', requireAuth, requireAdmin, async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const newCourse = await prisma.course.create({ data });
    return res.status(201).json(newCourse);
  } catch (err) {
    console.error('Course creation error:', err);
    return res.status(400).json({ error: 'Failed to create course.' });
  }
});

export default router;
