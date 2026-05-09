@echo off
setlocal

if "%~1"=="" (
    echo Usage: create_update_package.bat ^<directory_to_zip^>
    echo - ^<directory_to_zip^> is the path to the directory containing splash.html and other Y2JB files.
    exit /b 1
)

python "%~dp0create_update_package.py" "%~1"
if errorlevel 1 (
    echo.
    echo [ERREUR] Le script a echoue.
    exit /b 1
)

exit /b 0