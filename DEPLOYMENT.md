# Aarogyam Ayurveda - Vercel Deployment

This project has been configured for deployment on Vercel with serverless functions.

## Deployment Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Deploy to Vercel:**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect the configuration from `vercel.json`
   - The build command is set to `npm run build`
   - The output directory is `dist/public`

## Configuration Changes Made

### 1. Vercel Configuration (`vercel.json`)
- Configured for Vite framework
- Set up serverless functions for API routes
- Proper routing for SPA

### 2. API Structure
- Created `/api` directory for serverless functions
- `api/index.ts` - Main API handler
- `api/[...path].ts` - Catch-all API route handler

### 3. Package.json Updates
- Added Vercel-specific build scripts
- Added `@vercel/node` dependency for TypeScript support

### 4. Environment Variables
Make sure to set up your environment variables in Vercel dashboard:
- Database connection strings
- API keys
- Any other sensitive configuration

## API Endpoints

The following API endpoints are available:

- `GET /api/health` - Health check
- `GET /api/services` - Get available services
- `POST /api/appointments` - Book an appointment
- `GET /api/appointments` - Get appointments

## Local Development

For local development, you can still use:
```bash
npm run dev
```

For testing with Vercel CLI:
```bash
npm install -g vercel
vercel dev
```

## Troubleshooting

1. **Build Errors**: Make sure all dependencies are installed and the build command completes successfully locally.

2. **API Not Working**: Check Vercel function logs in the dashboard.

3. **Static Files**: Ensure the build output is in `dist/public` directory.

4. **Environment Variables**: Set up all required environment variables in Vercel dashboard.
