import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

// Import Routes
import authRoutes from './routes/auth.routes.js';
import courseRoutes from './routes/courses.routes.js';
import enquiryRoutes from './routes/enquiries.routes.js';
import workshopRoutes from './routes/workshops.routes.js';
import studentRoutes from './routes/student.routes.js';
import adminRoutes from './routes/admin.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middleware
app.use(helmet({
  contentSecurityPolicy: false // Allows API serving or embedded previews
}));

app.use(cors({
  origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : '*',
  credentials: true
}));

// Rate Limiting (100 requests per 15 minutes per IP for general endpoints)
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests from this IP, please try again after 15 minutes.' }
});
app.use('/api', apiLimiter);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get('/health', (_req, res) => {
  res.json({
    status: 'HEALTHY',
    service: 'Nexora Tech Academy Backend API',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/enquiries', enquiryRoutes);
app.use('/api/workshops', workshopRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/admin', adminRoutes);

// Centralized 404 Handler
app.use((_req, res) => {
  res.status(404).json({ error: 'Endpoint not found.' });
});

// Centralized Error Handler
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Unhandled server error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'An unexpected internal server error occurred.'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Nexora Tech Academy API server running on port ${PORT}`);
  console.log(`🔗 Healthcheck available at http://localhost:${PORT}/health`);
});
