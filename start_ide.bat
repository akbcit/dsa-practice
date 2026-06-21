@echo off
echo Starting DSA IDE...
start "DSA Server" node "%~dp0server.js"
timeout /t 4 /nobreak > nul
start "" "http://localhost:8080/dsa_ide.html"
