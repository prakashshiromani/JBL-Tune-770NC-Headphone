@echo off
echo Clearing TypeScript cache and restarting...
echo.

REM Delete TypeScript cache
if exist .next rmdir /s /q .next
if exist node_modules\.cache rmdir /s /q node_modules\.cache

echo Cache cleared!
echo.
echo Please do the following in VS Code:
echo 1. Press Ctrl+Shift+P
echo 2. Type: "TypeScript: Restart TS Server"  
echo 3. Press Enter
echo.
echo OR just reload VS Code window:
echo 1. Press Ctrl+Shift+P
echo 2. Type: "Developer: Reload Window"
echo 3. Press Enter
echo.
pause
