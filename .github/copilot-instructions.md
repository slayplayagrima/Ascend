# Ascend - AI Agent Instructions

Ascend is a **learning-first trading simulation platform for Indian markets**—a monorepo combining a React + Vite frontend with an Express + Prisma backend. Agents should understand the architecture, key workflows, and project-specific patterns before making changes.

## Architecture Overview

**Full-stack monorepo structure:**
- `/backend`: Express server with Socket.IO for real-time updates, Prisma ORM with PostgreSQL
- `/frontend`: React + Vite SPA with Tailwind CSS and custom CSS variables for theming

**Key data flow:**
1. User authenticates via `/auth/signup` or `/auth/login` (returns JWT token)
2. Frontend stores JWT and includes it in subsequent API calls (`Authorization: Bearer <token>`)
3. Backend validates tokens via `authMiddleware.js` using JWT verification
4. Real-time market data flows via Socket.IO connections (initialized in `server.js`)

## Backend Patterns

**Database & ORM:**
- Prisma client instantiated as singleton in `src/config/prisma.js`—import and use directly throughout backend
- Schema defined in `prisma/schema.prisma` (currently User model with uuid primary key)
- TypeScript config exists (`prisma.config.ts`) but codebase uses JavaScript

**Authentication:**
- Passwords hashed with `bcrypt` (10 rounds) in `authController.js`
- JWT tokens generated with 7-day expiration in `utils/jwt.js`
- `authMiddleware.js` extracts token from `Authorization: Bearer <token>` header and attaches decoded user to `req.user`
- All protected routes should use the `protect` middleware

**API Structure:**
- Routes organized by domain in `src/routes/` (e.g., `authRoutes.js`)
- Controllers in `src/controllers/` implement route logic
- Express server with CORS enabled for all origins in `app.js`
- Socket.IO configured with wildcard CORS; add event handlers in `server.js` connection block

## Frontend Patterns

**Styling & Theming:**
- **Tailwind CSS** (v4 with Vite plugin integration)—use utility classes for responsive design
- **CSS variables** defined in `src/index.css` (dark theme with green/teal palette):
  - `--bg-primary`: #122b1d (dark jungle green)
  - `--accent-primary`: #9cc97f (pistachio)
  - `--bg-secondary`: #537e72, `--accent-secondary`: #90b7bf
- Use `var(--*)` syntax in className strings: `className="bg-[var(--bg-primary)]"`

**Component Structure:**
- Pages in `pages/` (Auth, Dashboard, Hero, Profile)
- Reusable components in `components/` organized by feature (dashboard/, hero/)
- Dashboard composes sub-components: `DashboardStats`, `MarketWatch`, `RiskAnalysis`, `TradeSection`, `PerformanceInsights`

**Routing:**
- React Router v7 in `App.jsx` with routes: `/` (Hero), `/auth?mode=login|signup` (Auth), `/dashboard` (Dashboard)
- Use `useNavigate()` for programmatic navigation after authentication

**Auth Pattern:**
- `Auth.jsx` handles both login/signup modes via query params (`?mode=signup`)
- Stores JWT token from API response (typically in `localStorage`)
- Post-auth navigation: `navigate("/dashboard")`

**Data Visualization:**
- `recharts` library used for charts (e.g., `LineChart` in `MarketWatch`)
- Mock data patterns: arrays of objects with time/price/symbol fields
- `ResponsiveContainer` for responsive chart sizing

## Critical Developer Workflows

**Backend startup:**
```bash
cd backend && npm run dev  # Runs server.js with nodemon on port 5000
```

**Frontend startup:**
```bash
cd frontend && npm run dev  # Runs Vite dev server (typically port 5173)
```

**Database migrations:**
```bash
cd backend && npx prisma migrate dev  # Apply schema changes
npx prisma studio  # GUI database explorer
```

**Building frontend:**
```bash
npm run build  # Outputs to dist/ for production
```

## Project-Specific Conventions

1. **Export patterns**: Backend uses ES6 modules (`import/export`, `type: "module"` in package.json)
2. **Error handling**: Backend returns structured JSON responses with `message` field and appropriate HTTP status codes
3. **Field naming**: Backend uses camelCase in responses (e.g., `fullName`, `email`, `createdAt`)
4. **Chart mock data**: Typically hard-coded arrays; ready for live data API integration
5. **Tailwind utilities**: Avoid custom CSS classes—extend Tailwind config (`tailwind.config.js`) if new utilities needed
6. **Icon library**: `lucide-react` for icons (e.g., `UserRound`, `Eye`, `EyeOff`)

## Key Files Reference

- **Auth flow**: `backend/src/controllers/authController.js`, `backend/src/middlewares/authMiddleware.js`
- **Database**: `backend/prisma/schema.prisma`, `backend/src/config/prisma.js`
- **Frontend theme**: `frontend/src/index.css`, `frontend/tailwind.config.js`
- **Component examples**: `frontend/components/dashboard/marketWatch.jsx` (Recharts pattern)
- **Pages**: `frontend/pages/Auth.jsx` (form handling, routing logic)

---

**Common tasks for agents:**
- Adding new routes: Create controller in `controllers/`, add route in `routes/`, import in `app.js`
- Adding new models: Update `prisma/schema.prisma`, run `npx prisma migrate dev`, regenerate Prisma client
- Adding frontend features: Create component in `components/` (or subdirectory), compose in page, use CSS variables for styling
- Real-time updates: Add Socket.IO event listeners in `server.js` and corresponding listeners in frontend (not yet implemented—use as pattern)
