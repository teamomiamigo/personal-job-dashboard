# Personal Job Dashboard

A personal job tracking dashboard to manage job applications, follow-ups, and interviews. Built with React + Vite frontend and AWS serverless backend.

## Project Structure

```
personal-job-dashboard/
├── frontend/          # React + Vite + Tailwind frontend
├── backend/           # AWS SAM backend (Lambda + API Gateway + DynamoDB)
└── docs/              # Project documentation
```

## Quick Start

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
# Install dependencies for each Lambda function
cd functions/create-job && npm install && cd ../..
cd functions/get-jobs && npm install && cd ../..
cd functions/get-job && npm install && cd ../..
cd functions/update-job && npm install && cd ../..
cd functions/delete-job && npm install && cd ../..

# Build and run locally
sam build
sam local start-api
```

## Documentation

See the [docs/](docs/) directory for:
- [Tech Stack](docs/TECH_STACK.md) - Technology decisions and architecture
- Project plan and timeline (coming soon)
- Daily tasks tracker (coming soon)

## Features

- Job application tracking
- Follow-up reminders
- Dashboard view with statistics
- Filtering and search
- AWS serverless architecture

## Tech Stack

**Frontend:**
- React 18
- Vite
- Tailwind CSS

**Backend:**
- AWS Lambda (Node.js 20)
- API Gateway
- DynamoDB
- AWS Cognito (for authentication)
- AWS SAM (Infrastructure as Code)
