@echo off
title Personal Engineering Portfolio - Taufik
echo ===================================================
echo   Personal Engineering Portfolio - Taufik
echo   GitHub: https://github.com/MTaufikIqball00
echo ===================================================
echo.
echo Menjalankan local development server di http://localhost:3000 ...
echo Membuka browser secara otomatis...
timeout /t 2 >nul
start http://localhost:3000
echo.
npm run dev
pause
