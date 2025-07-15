# Deployment script for Vercel (PowerShell)
Write-Host "Starting Vercel deployment preparation..." -ForegroundColor Green

# 1. Clean previous builds
Write-Host "Cleaning previous builds..." -ForegroundColor Yellow
if (Test-Path "dist") { Remove-Item -Recurse -Force "dist" }
if (Test-Path ".vercel") { Remove-Item -Recurse -Force ".vercel" }

# 2. Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install

# 3. Build the project
Write-Host "Building the project..." -ForegroundColor Yellow
npm run build

# 4. Check build output
Write-Host "Checking build output..." -ForegroundColor Yellow
Get-ChildItem "dist/public" -Force

Write-Host "Build preparation complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Push your changes to GitHub"
Write-Host "2. Connect your GitHub repo to Vercel"
Write-Host "3. Deploy automatically or manually trigger deployment"
Write-Host "4. Set up environment variables in Vercel dashboard"
Write-Host ""
Write-Host "Available API endpoints after deployment:" -ForegroundColor Cyan
Write-Host "- GET /api/health"
Write-Host "- GET /api/services"
Write-Host "- POST /api/appointments"
Write-Host "- GET /api/appointments"
