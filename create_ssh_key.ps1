# Create SSH key without passphrase
$keyPath = "$env:USERPROFILE\.ssh\id_rsa"

# Check if key already exists
if (Test-Path $keyPath) {
    Write-Host "SSH key already exists at $keyPath"
} else {
    # Create .ssh directory if it doesn't exist
    $sshDir = "$env:USERPROFILE\.ssh"
    if (-not (Test-Path $sshDir)) {
        New-Item -ItemType Directory -Path $sshDir | Out-Null
    }
    
    # Generate SSH key using ssh-keygen with empty passphrase
    Write-Host "Generating SSH key..."
    & ssh-keygen -t rsa -b 4096 -f $keyPath -q -N "" -C "openclaw@tsvetkov.site"
    Write-Host "SSH key created successfully at $keyPath"
}

# Read and display public key
$pubKeyPath = "$keyPath.pub"
if (Test-Path $pubKeyPath) {
    Write-Host "`nPublic Key (Add this to GitHub):"
    Write-Host "================================"
    Get-Content $pubKeyPath
    Write-Host "================================"
}
