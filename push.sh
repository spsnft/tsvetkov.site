#!/bin/bash

# Push tsvetkov.site repository to GitHub
# This script requires a GitHub Personal Access Token for HTTPS authentication

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Default commit message
MESSAGE="${1:-Update: tsvetkov.site}"

# Function to print colored output
print_status() {
    local color=$1
    local message=$2
    echo -e "${color}${message}${NC}"
}

# Check if git is available
if ! command -v git &> /dev/null; then
    print_status "$RED" "Error: Git is not installed"
    exit 1
fi

print_status "$CYAN" "Git version: $(git --version)"

# Check if in git repository
if [ ! -d .git ]; then
    print_status "$RED" "Error: Not in a git repository"
    exit 1
fi

# Show current status
print_status "$CYAN" "\nCurrent Git Status:"
git status --short

# Stage all changes
print_status "$CYAN" "\nStaging changes..."
git add .

# Commit changes
print_status "$CYAN" "Creating commit: $MESSAGE"
if git commit -m "$MESSAGE"; then
    print_status "$GREEN" "Commit successful"
else
    print_status "$YELLOW" "Nothing new to commit"
fi

# Push to GitHub
print_status "$CYAN" "\nPushing to GitHub..."
print_status "$YELLOW" "You may be prompted for GitHub credentials."
print_status "$YELLOW" "If using HTTPS, enter your Personal Access Token as the password."

if git push -u origin main; then
    print_status "$GREEN" "\n✓ Successfully pushed to GitHub!"
    print_status "$CYAN" "Repository: https://github.com/spsnft/tsvetkov.site"
    print_status "$CYAN" "\nNext steps:"
    print_status "$CYAN" "1. Visit: https://github.com/spsnft/tsvetkov.site"
    print_status "$CYAN" "2. Deploy to Vercel: https://vercel.com/import"
    print_status "$CYAN" "3. Configure custom domain: tsvetkov.site"
else
    print_status "$RED" "\n✗ Push failed"
    print_status "$CYAN" "Common solutions:"
    print_status "$CYAN" "1. Ensure you have a GitHub Personal Access Token"
    print_status "$CYAN" "2. Token must have 'repo' scope"
    print_status "$CYAN" "3. Use token as password when prompted"
    print_status "$CYAN" "4. Check if repository exists on GitHub"
    exit 1
fi
