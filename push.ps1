#!/usr/bin/env powershell
<#
.SYNOPSIS
    Push tsvetkov.site repository to GitHub

.DESCRIPTION
    This script pushes the local repository to GitHub using HTTPS.
    It requires a GitHub Personal Access Token for authentication.

.EXAMPLE
    .\push.ps1
    .\push.ps1 -Message "Add new features"

.NOTES
    Make sure to have a GitHub Personal Access Token with 'repo' scope
#>

param(
    [string]$Message = "Update: tsvetkov.site"
)

# Colors for output
$Colors = @{
    Success = 'Green'
    Warning = 'Yellow'
    Error = 'Red'
    Info = 'Cyan'
}

function Write-Status {
    param(
        [string]$Message,
        [ValidateSet('Success', 'Warning', 'Error', 'Info')]
        [string]$Type = 'Info'
    )
    Write-Host $Message -ForegroundColor $Colors[$Type]
}

# Check if git is available
try {
    $gitVersion = & git --version 2>&1
    Write-Status "Found $gitVersion" Info
}
catch {
    Write-Status "Git is not installed or not in PATH" Error
    exit 1
}

# Get current directory
$currentDir = Get-Location
Write-Status "Working directory: $currentDir" Info

# Check if .git directory exists
if (!(Test-Path '.git')) {
    Write-Status "Error: Not in a git repository" Error
    exit 1
}

# Show current status
Write-Status "`nCurrent Git Status:" Info
git status --short

# Stage all changes
Write-Status "`nStaging changes..." Info
git add .

# Commit changes
Write-Status "Creating commit: $Message" Info
$commitResult = git commit -m $Message 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Status "Commit successful" Success
}
else {
    Write-Status "Commit result: $commitResult" Warning
}

# Push to GitHub
Write-Status "`nPushing to GitHub..." Info
Write-Status "You may be prompted for GitHub credentials." Warning
Write-Status "If using HTTPS, enter your Personal Access Token as the password." Info

$pushResult = git push -u origin main 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Status "`n✓ Successfully pushed to GitHub!" Success
    Write-Status "Repository: https://github.com/spsnft/tsvetkov.site" Info
}
else {
    Write-Status "`n✗ Push failed" Error
    Write-Status "Error details:" Error
    $pushResult | ForEach-Object { Write-Host $_ -ForegroundColor Red }
    Write-Host ""
    Write-Status "Common solutions:" Info
    Write-Status "1. Ensure you have a GitHub Personal Access Token" Info
    Write-Status "2. Token must have 'repo' scope" Info
    Write-Status "3. Use token as password when prompted" Info
    Write-Status "4. Check if repository exists on GitHub" Info
    exit 1
}

# Show push summary
Write-Status "`nPush Summary:" Info
git log -1 --pretty=format:"Commit: %h %s"
Write-Host ""

Write-Status "Next steps:" Info
Write-Status "1. Visit: https://github.com/spsnft/tsvetkov.site" Info
Write-Status "2. Deploy to Vercel: https://vercel.com/import" Info
Write-Status "3. Configure custom domain: tsvetkov.site" Info
