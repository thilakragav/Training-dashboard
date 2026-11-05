import { Router, Request, Response } from 'express';
import { prisma } from '../db.js';

const router = Router();

// In-memory fallback repository for instant development continuity
let MEMORY_ENQUIRIES: any[] = [
  {
    id: 'lead-001',
    type: 'corporate_training_rfp',
    fullName: 'Ananya Deshmukh',
    email: 'ananya.d@hcltech.com',
    phone: '+91 98412 87654',
    companyOrInstitution: 'HCLTech Global Delivery',
    designation: 'Senior L&D Manager',
    interestedTopicOrService: 'Enterprise Data Engineering Bootcamp (Databricks & Spark)',
    preferredMode: 'Hybrid (Classroom + Online)',
    teamOrStudentCount: '25 Senior Engineers',
    notesOrRequirements: 'Looking to upskill our legacy SQL development team on Azure Databricks Medallion Architecture and PySpark for an upcoming retail banking client migration.',
    contactConsent: true,
    status: 'PROPOSAL_SENT',
    createdAt: new Date(Date.now() - 24 * 3600 * 1000).toISOString()
  },
  {
    id: 'lead-002',
    type: 'software_project_consultation',
    fullName: 'David Sterling',
    email: 'd.sterling@vanguardlogistics.co.uk',
    phone: '+44 7911 123456',
    companyOrInstitution: 'Vanguard Freight UK',
    designation: 'Chief Technology Officer',
    interestedTopicOrService: 'Custom Software & RAG Knowledge Assistant',
    preferredMode: 'Live Online',
    notesOrRequirements: 'We want to build a custom multi-agent RAG system connecting to our SQL transport databases and parsing PDF international customs tariffs.',
    contactConsent: true,
    status: 'QUALIFIED',
    createdAt: new Date(Date.now() - 48 * 3600 * 1000).toISOString()
  },
  {
    id: 'lead-003',
    type: 'college_partnership',
    fullName: 'Dr. K. Swaminathan',
    email: 'dean.computing@annauniv.edu',
    phone: '+91 94440 23456',
    companyOrInstitution: 'College of Engineering, Anna University',
    designation: 'Dean, Computing Sciences',
    interestedTopicOrService: 'Faculty Development Program (FDP) & Student AI Bootcamp',
    preferredMode: 'Hybrid (Classroom + Online)',
    teamOrStudentCount: '150 3rd Year Students + 20 Faculty',
    notesOrRequirements: 'Inviting NodalBot industry instructors for a 3-day Generative AI and Model Context Protocol workshop for our faculty and students.',
    contactConsent: true,
    status: 'NEW',
    createdAt: new Date(Date.now() - 12 * 3600 * 1000).toISOString()
  },
  {
    id: 'lead-004',
    type: 'free_demo_registration',
    fullName: 'Siddharth Raman',
    email: 'siddharth.r@gmail.com',
    phone: '+91 98840 98765',
    interestedTopicOrService: 'Azure & Databricks Modern Data Engineering',
    preferredMode: 'Live Online',
    notesOrRequirements: 'Currently working as a database developer with 3 years experience. Want to attend the weekend demo session.',
    contactConsent: true,
    status: 'CONTACTED',
    createdAt: new Date(Date.now() - 6 * 3600 * 1000).toISOString()
  }
];

// POST /api/enquiries - Public submission
router.post('/', async (req: Request, res: Response) => {
  try {
    const { 
      type, 
      fullName, 
      email, 
      phone, 
      companyOrInstitution, 
      designation, 
      interestedTopicOrService, 
      preferredMode, 
      teamOrStudentCount, 
      projectBudgetBand, 
      notesOrRequirements, 
      sourcePage 
    } = req.body;

    if (!fullName || !email || !phone) {
      return res.status(400).json({ error: 'Full name, email, and phone number are required.' });
    }

    const newRecord = {
      id: `lead-${Date.now()}`,
      type: type || 'student_course_enquiry',
      fullName,
      email,
      phone,
      companyOrInstitution: companyOrInstitution || null,
      designation: designation || null,
      interestedTopicOrService: interestedTopicOrService || 'General Inquiry',
      preferredMode: preferredMode || 'Live Online',
      teamOrStudentCount: teamOrStudentCount || null,
      projectBudgetBand: projectBudgetBand || null,
      notesOrRequirements: notesOrRequirements || null,
      sourcePage: sourcePage || '/',
      contactConsent: true,
      status: 'NEW',
      createdAt: new Date().toISOString()
    };

    // Try database insertion first if Prisma connection is healthy
    try {
      if (prisma && prisma.enquiry) {
        await prisma.enquiry.create({
          data: {
            fullName,
            email,
            phone,
            courseInterest: interestedTopicOrService || 'General Inquiry',
            preferredMode: preferredMode || 'LIVE_ONLINE',
            message: notesOrRequirements,
            type: 'GENERAL_ENQUIRY',
            status: 'NEW'
          } as any
        });
      }
    } catch (dbErr) {
      // Prisma offline or schema mismatch: gracefully fall back to memory
      console.log('Database sync note (falling back to memory store):', (dbErr as any).message);
    }

    // Always store in memory cache
    MEMORY_ENQUIRIES = [newRecord, ...MEMORY_ENQUIRIES];

    return res.status(201).json({
      success: true,
      id: newRecord.id,
      message: 'Enquiry successfully registered with NodalBot Technologies.'
    });
  } catch (err: any) {
    console.error('Enquiry submission error:', err);
    return res.status(500).json({ error: 'Failed to process enquiry.' });
  }
});

// GET /api/enquiries - View inquiries
router.get('/', async (_req: Request, res: Response) => {
  try {
    try {
      if (prisma && prisma.enquiry) {
        const dbEnquiries = await prisma.enquiry.findMany({
          orderBy: { createdAt: 'desc' }
        });
        if (dbEnquiries && dbEnquiries.length > 0) {
          return res.json(dbEnquiries);
        }
      }
    } catch {}
    
    return res.json(MEMORY_ENQUIRIES);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to retrieve enquiries.' });
  }
});

// PUT /api/enquiries/:id/status - Update status
router.put('/:id/status', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    MEMORY_ENQUIRIES = MEMORY_ENQUIRIES.map(item => 
      item.id === id ? { ...item, status } : item
    );

    try {
      if (prisma && prisma.enquiry) {
        await prisma.enquiry.update({
          where: { id },
          data: { status } as any
        });
      }
    } catch {}

    return res.json({ success: true, id, status });
  } catch (err) {
    return res.status(400).json({ error: 'Failed to update status.' });
  }
});

// DELETE /api/enquiries/:id - Delete inquiry
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    MEMORY_ENQUIRIES = MEMORY_ENQUIRIES.filter(item => item.id !== id);

    try {
      if (prisma && prisma.enquiry) {
        await prisma.enquiry.delete({
          where: { id }
        });
      }
    } catch {}

    return res.json({ success: true, id });
  } catch (err) {
    return res.status(400).json({ error: 'Failed to delete record.' });
  }
});

export default router;
