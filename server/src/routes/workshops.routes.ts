import { Router, Request, Response } from 'express';
import { prisma } from '../db.js';

const router = Router();

// GET /api/workshops
router.get('/', async (req: Request, res: Response) => {
  try {
    const workshops = await prisma.workshop.findMany({
      orderBy: { scheduledDate: 'asc' }
    });
    return res.json(workshops);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch upcoming workshops.' });
  }
});

// POST /api/workshops/:id/register
router.post('/:id/register', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { fullName, email, phone, userId } = req.body;

    if (!fullName || !email || !phone) {
      return res.status(400).json({ error: 'Full name, email, and phone are required.' });
    }

    const workshop = await prisma.workshop.findUnique({ where: { id } });
    if (!workshop) {
      return res.status(404).json({ error: 'Workshop not found.' });
    }

    if (workshop.seatsRegistered >= workshop.seatsTotal) {
      return res.status(400).json({ error: 'This masterclass is fully booked.' });
    }

    const registration = await prisma.workshopRegistration.create({
      data: {
        workshopId: id,
        userId: userId || null,
        fullName,
        email,
        phone
      }
    });

    await prisma.workshop.update({
      where: { id },
      data: { seatsRegistered: { increment: 1 } }
    });

    return res.status(201).json({
      success: true,
      registrationId: registration.id,
      message: 'Seat confirmed! Zoom credentials and prep files dispatched to your email.'
    });
  } catch (err) {
    console.error('Workshop register error:', err);
    return res.status(500).json({ error: 'Failed to register for workshop.' });
  }
});

export default router;
