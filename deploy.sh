#!/bin/bash

echo "Starting deployment process..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the React app
echo "Building the React app..."
npm run build

# Check if build was successful
if [ -d "build" ]; then
    echo "Build successful! Deploying to Firebase..."
    firebase deploy
else
    echo "Build failed! Please check for errors."
    exit 1
fi

echo "Deployment complete!" 