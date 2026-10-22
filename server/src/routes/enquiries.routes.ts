import { Router, Request, Response } from 'express';
import { prisma } from '../db.js';
import { requireAuth, requireAdmin } from '../middleware/auth.middleware.js';

const router = Router();

// POST /api/enquiries - Public submission
router.post('/', async (req: Request, res: Response) => {
  try {
    const { fullName, email, phone, courseInterest, preferredMode, qualification, message, preferredDate, preferredTimeSlot, type } = req.body;

    if (!fullName || !email || !phone) {
      return res.status(400).json({ error: 'Full name, email, and phone number are required.' });
    }

    const enquiry = await prisma.enquiry.create({
      data: {
        fullName,
        email,
        phone,
        courseInterest: courseInterest || 'General Inquiry',
        preferredMode,
        qualification,
        message,
        preferredDate,
        preferredTimeSlot,
        type: type || 'GENERAL_ENQUIRY',
        status: 'NEW'
      }
    });

    return res.status(201).json({
      success: true,
      id: enquiry.id,
      message: 'Enquiry received. Our academic counsellor will reach out shortly.'
    });
  } catch (err) {
    console.error('Enquiry submission error:', err);
    return res.status(500).json({ error: 'Failed to record enquiry submission.' });
  }
});

// GET /api/enquiries - Admin only
router.get('/', requireAuth, requireAdmin, async (req: Request, res: Response) => {
  try {
    const enquiries = await prisma.enquiry.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return res.json(enquiries);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to retrieve enquiries list.' });
  }
});

// PATCH /api/enquiries/:id/status - Admin only
router.patch('/:id/status', requireAuth, requireAdmin, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status, internalNotes } = req.body;

    const updated = await prisma.enquiry.update({
      where: { id },
      data: {
        status,
        internalNotes
      }
    });

    return res.json(updated);
  } catch (err) {
    return res.status(400).json({ error: 'Failed to update enquiry status.' });
  }
});

export default router;
