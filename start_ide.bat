@echo off
echo Stopping any previous server on port 8081...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":8081 "') do taskkill /F /PID %%a 2>nul
timeout /t 1 /nobreak > nul

start "" "http://localhost:8081/dsa_ide.html"

:loop
echo Starting DSA Server...
node "%~dp0server.js"
echo Server stopped. Restarting in 2 seconds...
timeout /t 2 /nobreak > nul
goto loop
