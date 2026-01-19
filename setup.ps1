# Banking System - Instalační skript
Write-Host "================================" -ForegroundColor Cyan
Write-Host "Banking System - Instalace" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Zkontroluj Node.js
Write-Host "Kontrola Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js je nainstalován: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js není nainstalován!" -ForegroundColor Red
    Write-Host "Stáhni Node.js z: https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

# Instalace závislostí
Write-Host ""
Write-Host "Instalace závislostí..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Závislosti nainstalovány!" -ForegroundColor Green
} else {
    Write-Host "✗ Chyba při instalaci závislostí" -ForegroundColor Red
    exit 1
}

# Hotovo
Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "✓ Instalace dokončena!" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Spusť aplikaci příkazem:" -ForegroundColor Yellow
Write-Host "  npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "Aplikace bude dostupná na:" -ForegroundColor Yellow
Write-Host "  http://localhost:3000" -ForegroundColor White
Write-Host ""
