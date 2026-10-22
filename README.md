# NEXORA TECH ACADEMY — Premium Technology Training Platform

> **Build Skills That Move Your Career Forward.**  
> An elite, code-first training platform engineered for college students, ambitious fresh graduates, and career-transitioning technology professionals.

---

## 🌟 Table of Contents
1. [Overview & Core Value Proposition](#-overview--core-value-proposition)
2. [Technology Stack](#-technology-stack)
3. [Key Architectural Highlights & Modules](#-key-architectural-highlights--modules)
4. [Project Structure](#-project-structure)
5. [Local Development Setup](#-local-development-setup)
6. [Database Schema & Seed Demonstration Data](#-database-schema--seed-demonstration-data)
7. [Testing & Feature Verification Guide](#-testing--feature-verification-guide)
8. [GoDaddy Domain & Production Deployment Guide](#-godaddy-domain--production-deployment-guide)
9. [Security, Performance & SEO](#-security-performance--seo)

---

## 🚀 Overview & Core Value Proposition

**Nexora Tech Academy** is engineered to replace legacy, rote IT tutoring with a production-grade, portfolio-first educational experience.

### Core Capabilities:
- **Interactive "Find Your Tech Career" Discovery Quiz**: 5-step algorithmic assessment matching students to calibrated career paths (Generative AI, AI/ML, Full-Stack, Data Analytics, Data Engineering, Cloud & DevOps).
- **Searchable & Filterable Specialization Catalog**: 8 in-depth programs featuring published fees, EMI calculators, weekly milestones, and expandable module syllabuses.
- **Interactive "Try a Skill Before You Enroll" Learning Lab**:
  1. *Relational SQL Lab*: Multi-table joins, CTEs, and window functions with instant code explanations and execution diagnostics.
  2. *AI Prompt Refiner*: Side-by-side comparison of naive prompts vs. production-engineered prompts with system constraints, schema enforcement, and live diff testing.
  3. *Python Logic Quiz*: Code snippets evaluating list comprehensions, mutable defaults, dictionary unions, and generator memory performance.
- **Portfolio-Grade Capstone Showcase**: Distinct separation between student-completed capstones and industry faculty blueprints with full architectural diagrams.
- **Student Learning Portal**: Personalized streak tracking, continue learning button, lesson completion tracking, downloadable resources, and interactive classroom.
- **Verifiable Certification System**: Cryptographically unique certificate numbers with public verification pages and QR code verification.
- **Protected Admin Control Panel**: Role-based access for managing syllabuses, viewing student enrollments, and an integrated CRM for admissions leads.

---

## 🛠 Technology Stack

### Frontend:
- **React 19 & TypeScript**: Strict types, modular component architecture, and responsive state management.
- **Vite 8**: Sub-second Hot Module Replacement (HMR) and optimized rollup production bundling.
- **Tailwind CSS 3.4**: Custom deep navy surface design system with electric blue and violet accents, soft glowing borders, and accessible high-contrast typography.
- **React Router DOM 7**: Declarative client-side routing with automatic scroll-to-top on route change.
- **Lucide React & Custom Brand SVGs**: Crisp, accessible vector iconography.
- **Canvas Confetti**: Milestone celebration feedback upon completing lessons and enrolling.

### Backend:
- **Node.js (v20+) & Express.js**: RESTful API endpoints with modular controller and routing architecture.
- **TypeScript**: Strict compile-time safety across request payloads and responses.
- **Prisma ORM**: Type-safe database queries, schema migrations, and connection pooling.
- **PostgreSQL**: Robust relational schema with 18 distinct models, foreign key cascades, and performance indexes.
- **Security Suite**:
  - `bcryptjs` password hashing with salt rounds.
  - `jsonwebtoken` (JWT) stateless token authentication.
  - `helmet` security header hardening.
  - `cors` origin restriction.
  - `express-rate-limit` DDoS and brute-force mitigation.

---

## 📁 Project Structure

```
nexora-academy/
├── dist/                      # Minified, production-ready frontend bundle
├── prisma/
│   ├── schema.prisma          # PostgreSQL relational schema (18 models)
│   └── seed.ts                # Demonstration data seed script
├── public/                    # Static assets & favicon
├── server/                    # Node.js + Express backend service
│   ├── src/
│   │   ├── middleware/        # JWT auth & admin role guards
│   │   ├── routes/            # Auth, courses, enquiries, workshops, student, admin
│   │   ├── db.ts              # Prisma singleton instance
│   │   └── index.ts           # Express server entrypoint
│   ├── package.json           # Backend package manifest
│   └── tsconfig.json          # NodeNext TypeScript config
├── src/
│   ├── components/
│   │   ├── home/              # Hero, Quiz, Courses, Lab, Projects, HowItWorks, Mentors
│   │   ├── layout/            # Navbar, Footer, ScrollToTop
│   │   ├── modals/            # EnquiryModal, CounsellingModal, WorkshopRegister, ProjectDetail
│   │   └── ui/                # Brand SVGs and shared controls
│   ├── context/               # AuthContext and LearningContext
│   ├── data/                  # Rich static data (courses, roadmaps, lab, projects)
│   ├── pages/                 # Home, Courses, Details, Roadmaps, Projects, Portal, Admin, Contact
│   ├── services/              # API client with automatic offline/mock fallback
│   ├── types/                 # TypeScript interfaces and enum definitions
│   ├── App.tsx                # Route registry & modal containers
│   ├── index.css              # Tailwind base, utilities, and glassmorphism
│   └── main.tsx               # DOM mounting entrypoint
├── .env.example               # Environment variables template
├── package.json               # Frontend dependencies & scripts
├── tailwind.config.js         # Custom branding theme extension
└── tsconfig.json              # Bundler TypeScript configuration
```

---

## 💻 Local Development Setup

### Prerequisites:
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher
- **PostgreSQL**: (Optional for local backend: can use local Docker, Supabase, Neon, or Railway)

### 1. Clone & Install Dependencies

```bash
# Clone the repository
git clone https://github.com/your-username/nexora-academy.git
cd nexora-academy

# Install frontend dependencies
npm install

# Install backend dependencies (in a separate terminal or inside server/)
cd server
npm install
cd ..
```

### 2. Configure Environment Variables

```bash
# Copy the example environment template
cp .env.example .env
```

Edit `.env` with your values:
```env
PORT=5000
DATABASE_URL="postgresql://postgres:password@localhost:5432/nexora_academy_db?schema=public"
JWT_SECRET="your_secure_random_jwt_secret_key"
CORS_ORIGIN="http://localhost:5173"
VITE_API_URL="http://localhost:5000/api"
```

### 3. Run the Database Migrations & Seed Data (Optional for backend)

```bash
cd server
# Generate Prisma Client
npx prisma generate --schema=../prisma/schema.prisma

# Run migrations (against your PostgreSQL instance)
npx prisma migrate dev --schema=../prisma/schema.prisma --name init

# Seed demonstration data
npm run prisma:seed
cd ..
```

### 4. Start the Development Servers

```bash
# Terminal 1: Start Frontend (Vite)
npm run dev

# Terminal 2: Start Backend API (Express)
cd server
npm run dev
```

The frontend will run at `http://localhost:5173` and the backend API at `http://localhost:5000`.

> **Note on Standalone Preview Mode**: The frontend is built with an **intelligent local storage persistence bridge**. It operates 100% interactively out of the box even before connecting to PostgreSQL!

---

## 🗄 Database Schema & Seed Demonstration Data

The PostgreSQL database contains 18 relational models designed according to enterprise standards:
1. `users` — Primary credentials with bcrypt hash and role bindings.
2. `roles` — Role-Based Access Control (`STUDENT`, `INSTRUCTOR`, `ADMIN`).
3. `student_profiles` — Profile data, education level, streak counter, and links.
4. `courses` — 8 complete technology programs with syllabus, fees, and outcomes.
5. `course_modules` — Numbered modules with durations and learning objectives.
6. `lessons` — Video lessons, code labs, readings, and starter code snippets.
7. `enrollments` — Student enrollment records with completion percentage.
8. `lesson_progress` — Atomic lesson completion timestamps.
9. `quizzes` — Module-level assessment metadata.
10. `quiz_questions` — Multiple-choice questions with explanations.
11. `quiz_attempts` — Scored student submissions.
12. `assignments` — Practical coding assignment specifications.
13. `assignment_submissions` — Student GitHub repos and faculty feedback.
14. `certificates` — Verifiable credentials with unique cryptographic IDs.
15. `workshops` — Masterclasses and live clinic schedules.
16. `workshop_registrations` — Attendee registration records.
17. `enquiries` — Admissions lead submissions and CRM records.
18. `notifications` — Student alert and announcement dispatches.

### Pre-Configured Demo Credentials:
| Account Type | Email | Password | Role |
| :--- | :--- | :--- | :--- |
| **Demo Student** | `student@nexora.academy` | `DemoPassword2026!` | `STUDENT` |
| **Demo Admin** | `admin@nexora.academy` | `DemoPassword2026!` | `ADMIN` |

*(Instant 1-click login buttons are also provided on the `/login` page for fast review!)*

---

## 🧪 Testing & Feature Verification Guide

1. **Homepage Experience**:
   - Visit `http://localhost:5173/`. Verify sticky navigation, responsive mobile drawer, and hero section.
   - Click stage pills (Foundations → Labs → Capstone → Launch) in the Hero progress widget.
2. **Career Discovery Quiz**:
   - Scroll to "Find Your Tech Career" on the homepage. Answer all 5 questions.
   - Verify the algorithm calculates your matched track, sequence, and opens the pre-filled counselling modal.
3. **Course Catalog & Details**:
   - Navigate to `/courses`. Test search filtering (e.g. type `PyTorch` or `Docker`), category pills, and sorting.
   - Open any course (e.g. `/course/generative-ai-and-prompt-engineering`).
   - Click modules in the curriculum to expand/collapse module lessons.
   - Click "Enquire Now" to test the course enquiry modal with instant WhatsApp preview.
4. **Interactive Learning Lab**:
   - Go to `/learning-lab`.
   - Test **Activity 1 (SQL Lab)**: Answer the questions; verify instant explanation and score report.
   - Test **Activity 2 (Prompt Refiner)**: Toggle cases, copy the engineered prompt, and inspect the before/after response diff.
   - Test **Activity 3 (Python Logic Quiz)**: Answer logic questions and receive your score breakdown.
5. **Student Portal & Classroom**:
   - Click "Student Login" in the navbar, then click "Demo Student".
   - In the dashboard, click "Continue Learning" on any enrolled course.
   - Click "Mark as Complete" on lessons. Notice how the course progress bar updates and confetti fires upon hitting 100%!
   - Navigate to `/portal/certificates` to inspect the verifiable certificate with QR code and print layout.
6. **Admin Dashboard CRM**:
   - Click the user avatar in the navbar and select "Switch to Demo Admin" (or visit `/admin`).
   - Switch to the "Enquiries & CRM" tab. Click "Mark Contacted" or "Mark Enrolled" on an enquiry and verify status updates in real-time.

---

## 🌐 GoDaddy Domain & Production Deployment Guide

You can easily link your custom domain registered on **GoDaddy** (e.g., `nexoratech.com` or `academy.yourdomain.com`).

### Architecture Recommendation:
Because standard shared cPanel hosting often lacks native Node.js v20+ daemon management or managed PostgreSQL, the industry best practice is a **Separated Microservice Architecture**:
1. **Frontend**: Deployed to **Vercel** or **Cloudflare Pages** (Free Tier, Global Edge CDN, sub-second LCP).
2. **Backend API**: Deployed to **Render**, **Railway**, or a **VPS (DigitalOcean / AWS EC2)** running Node.js.
3. **Database**: Managed PostgreSQL hosted on **Supabase**, **Neon.tech**, or **Railway**.

---

### Step 1: Deploy Database (PostgreSQL)
1. Create a free PostgreSQL instance on **Supabase** (`https://supabase.com`) or **Neon** (`https://neon.tech`).
2. Copy the Connection Pooling URI (e.g., `postgresql://postgres:[PASSWORD]@db.xxxx.supabase.co:5432/postgres`).
3. Set this as `DATABASE_URL` in your backend environment.

---

### Step 2: Deploy Backend API (Node.js / Express)
1. Push your repository to GitHub.
2. In **Render** or **Railway**, create a new Web Service pointing to the `/server` directory:
   - **Build Command**: `npm install && npx prisma generate --schema=../prisma/schema.prisma && npm run build`
   - **Start Command**: `npm start`
   - **Environment Variables**:
     - `DATABASE_URL`: Your PostgreSQL connection string.
     - `JWT_SECRET`: A secure 64-character secret.
     - `PORT`: `5000` (or leave default assigned by provider).
     - `CORS_ORIGIN`: Your GoDaddy domain (e.g., `https://nexoratech.com,https://www.nexoratech.com`).
3. Copy your deployed backend public URL (e.g., `https://api-nexora.onrender.com`).

---

### Step 3: Deploy Frontend (Vite / React)
1. In **Vercel** (`https://vercel.com`), import the repository:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Environment Variable**: `VITE_API_URL` = `https://api-nexora.onrender.com/api`
2. Click **Deploy**. Vercel will provide an initial deployment URL (e.g., `nexora-academy.vercel.app`).

---

### Step 4: Configure GoDaddy DNS Records

Log in to your **GoDaddy Domain Control Center**:
1. Go to **My Products** → Select your domain → Click **Manage DNS**.
2. Add or modify the following DNS records:

| Record Type | Name / Host | Value / Points To | TTL | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` *(Vercel Anycast IP)* | 1 Hour / Automatic | Directs root domain (`nexoratech.com`) to Frontend |
| **CNAME** | `www` | `cname.vercel-dns.com.` | 1 Hour / Automatic | Directs `www.nexoratech.com` to Frontend |
| **CNAME** | `api` | `api-nexora.onrender.com.` *(or your backend host)* | 1 Hour / Automatic | Directs API subdomain (`api.nexoratech.com`) to Node Server |

3. In **Vercel Project Settings** → **Domains**, add:
   - `nexoratech.com`
   - `www.nexoratech.com`
4. Vercel automatically issues and provisions a **Free SSL / TLS Certificate** (HTTPS) within 15 minutes of DNS propagation!

---

### Alternative: Deploying to GoDaddy cPanel (Single Server)
If your GoDaddy hosting package includes **cPanel with "Setup Node.js App"**:
1. Run `npm run build` locally to produce the static frontend files in `dist/`.
2. Upload `dist/` contents to `public_html/`.
3. In cPanel, navigate to **Software** → **Setup Node.js App**.
4. Create a Node application pointing to `server/` with `dist/index.js` as the startup file.
5. In cPanel **PostgreSQL Databases**, create a database and user, and supply the credentials in `server/.env`.

---

## 🔒 Security, Performance & SEO

- **Semantic HTML & Clean Routing**: Clean URLs for all courses (`/course/ai-and-machine-learning-specialization`).
- **Open Graph & Meta Tags**: Pre-configured in `index.html` with preview images and site description.
- **Accessible Design**: Contrast ratio exceeds WCAG 2.1 AA standards; keyboard navigation and `Escape` listeners on all modals.
- **Strict Data Attributions**: All faculty bios, project scopes, and fees are transparent and verifiable.

---

© 2026 NEXORA TECH ACADEMY. All rights reserved.
