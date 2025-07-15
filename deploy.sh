#!/bin/bash

# Deployment script for Vercel
echo "🚀 Starting Vercel deployment preparation..."

# 1. Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/
rm -rf .vercel/

# 2. Install dependencies
echo "📦 Installing dependencies..."
npm install

# 3. Build the project
echo "🏗️ Building the project..."
npm run build

# 4. Check build output
echo "✅ Checking build output..."
ls -la dist/public/

echo "🎉 Build preparation complete!"
echo ""
echo "📝 Next steps:"
echo "1. Push your changes to GitHub"
echo "2. Connect your GitHub repo to Vercel"
echo "3. Deploy automatically or manually trigger deployment"
echo "4. Set up environment variables in Vercel dashboard"
echo ""
echo "🔧 Available API endpoints after deployment:"
echo "- GET /api/health"
echo "- GET /api/services"
echo "- POST /api/appointments"
echo "- GET /api/appointments"
