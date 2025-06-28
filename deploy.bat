@echo off
echo Starting deployment process...

REM Install dependencies
echo Installing dependencies...
npm install

REM Build the React app
echo Building the React app...
npm run build

REM Check if build was successful
if exist "build" (
    echo Build successful! Deploying to Firebase...
    firebase deploy
) else (
    echo Build failed! Please check for errors.
    pause
    exit /b 1
)

echo Deployment complete!
pause 