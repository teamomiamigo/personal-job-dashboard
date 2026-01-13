# Backend - AWS SAM

This is the backend API for the Personal Job Dashboard, built with AWS SAM (Serverless Application Model).

## Prerequisites

- AWS CLI configured
- AWS SAM CLI installed
- Node.js 20.x

## Setup

1. Install dependencies for each Lambda function:
```bash
cd functions/create-job && npm install
cd ../get-jobs && npm install
cd ../get-job && npm install
cd ../update-job && npm install
cd ../delete-job && npm install
```

## Local Development

```bash
# Build the application
sam build

# Run API locally
sam local start-api

# Test a specific function
sam local invoke CreateJobFunction
```

## Deployment

```bash
# Build and deploy
sam build
sam deploy --guided  # First time only
sam deploy           # Subsequent deployments
```

## API Endpoints

- `POST /jobs` - Create a new job
- `GET /jobs` - Get all jobs for user
- `GET /jobs/{id}` - Get specific job
- `PUT /jobs/{id}` - Update job
- `DELETE /jobs/{id}` - Delete job

