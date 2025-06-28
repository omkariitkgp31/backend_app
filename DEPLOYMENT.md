# Deployment Guide

## Prerequisites
1. Install Firebase CLI globally:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase project (if not already done):
   ```bash
   firebase init hosting
   ```

## Environment Setup
1. Copy `env.template` to `.env.local`:
   ```bash
   cp env.template .env.local
   ```

2. Fill in your Firebase configuration values in `.env.local`

## Deployment Steps

### Option 1: Using the deployment script (Windows)
```bash
deploy.bat
```

### Option 2: Manual deployment
```bash
# Install dependencies
npm install

# Build the app
npm run build

# Deploy to Firebase
firebase deploy
```

## Troubleshooting White Screen Issues

If you still see a white screen after deployment:

1. **Check browser console** for JavaScript errors
2. **Verify Firebase configuration** - ensure all environment variables are set correctly
3. **Check network tab** for failed requests
4. **Verify build output** - ensure the build directory contains your app files

## Common Issues

1. **Missing environment variables**: Make sure all Firebase config variables are set
2. **Wrong public directory**: The firebase.json should point to "build", not "public"
3. **Missing routing**: The rewrite rule ensures React Router works properly
4. **Build errors**: Check the build output for any compilation errors

## Testing Locally

Before deploying, test your build locally:
```bash
npm run build
npx serve -s build
```

This will serve your built app locally to verify it works correctly. 