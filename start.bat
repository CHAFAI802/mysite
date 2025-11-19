@echo off
echo ===== DEMARRAGE BACKEND DJANGO =====
start cmd /k "cd C:\Users\Mabrouk\Desktop\react\backend && ..\.venv\Scripts\activate && python manage.py runserver"

echo ===== DEMARRAGE FRONTEND REACT =====
start cmd /k "cd C:\Users\Mabrouk\Desktop\react\mysite && npm run dev"

echo ===== SERVEURS LANCES =====
pause
