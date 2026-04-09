# 🧠 Mental Health Tracker App

A full-stack web application that allows patients to log their daily mental health status and visualize trends over time.

---

## Tech Stack

**Frontend**

- Next.js 15 (App Router)
- React with custom hooks and Context API
- Styled Components
- Recharts for data visualization
- Socket.io client for real-time updates
- Sonner for toast notifications

**Backend**

- NestJS with TypeScript
- Prisma ORM
- PostgreSQL (Docker)
- Socket.io (WebSockets)
- JWT authentication
- Google OAuth 2.0 (manual implementation)

---

## Architecture

```
client/          → Next.js frontend (port 3001)
server/          → NestJS backend (port 3000)
docker-compose   → PostgreSQL database
```

---

## Prerequisites

- Node.js 20+
- Docker
- Google Cloud Console project with OAuth 2.0 credentials

---

## Setup

### 1. Clone the repo

```bash
git clone https://github.com/your-username/mental-health-tracker-app
cd mental-health-tracker-app
```

### 2. Start the database

```bash
docker-compose up -d
```

### 3. Configure environment variables

`/server/.env`:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/mental_health_tracker?schema=public
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:3000/api/v1/auth/google/callback
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:3001
NODE_ENV=development
PORT=3000
```

`/client/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_WS_URL=http://localhost:3000
```

### 4. Install dependencies

```bash
# Backend
cd server
npm install
npx prisma migrate dev

# Frontend
cd ../client
npm install
```

### 5. Run the app

```bash
# Terminal 1 — backend
cd server && npm run start:dev

# Terminal 2 — frontend
cd client && npm run dev -- -p 3001
```

Open [http://localhost:3001](http://localhost:3001)

---

## API Endpoints

| Method | Endpoint                | Description           | Auth |
| ------ | ----------------------- | --------------------- | ---- |
| GET    | `/auth/google`          | Initiate Google OAuth | No   |
| GET    | `/auth/google/callback` | OAuth callback        | No   |
| GET    | `/auth/me`              | Get current user      | Yes  |
| GET    | `/auth/logout`          | Logout                | No   |
| POST   | `/log`                  | Create daily log      | Yes  |
| GET    | `/logs`                 | Get all logs          | Yes  |
| GET    | `/logs?range=week`      | Get last 7 days       | Yes  |
| GET    | `/logs?range=month`     | Get last 30 days      | Yes  |

---

## Features

- Google OAuth login — no passwords
- Daily mental health log with 8 metrics across 4 steps
- Interactive line chart with selectable metrics (up to 3)
- Weekly and monthly trend views
- Real-time chart updates via WebSockets
- Average statistics per period
- Expandable log history
- Protected routes via Next.js middleware

## License

© 2026 Germán Ruiz. All rights reserved. This repository was created as a technical assessment.
