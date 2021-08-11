@echo off
set /P commit="Enter commit message? "
echo %commit%
git status
git add .
git status
git commit -m "%commit%"
git push