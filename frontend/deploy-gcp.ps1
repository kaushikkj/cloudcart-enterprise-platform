param(
    [Parameter(Mandatory = $true)]
    [string]$Version
)

$ErrorActionPreference = "Stop"

$ProjectId = "cloudcart-enterprise-platform"
$Region = "asia-south1"
$Repository = "cloudcart"
$ServiceName = "cloudcart-frontend"
$ImageName = "cloudcart-frontend"

$LocalImage = "$ImageName`:$Version"
$ImageUri = "$Region-docker.pkg.dev/$ProjectId/$Repository/$ImageName`:$Version"

Write-Host ""
Write-Host "CloudCart frontend deployment"
Write-Host "Version: $Version"
Write-Host "Image:   $ImageUri"
Write-Host ""

Write-Host "1/5 Running frontend build..."
npm run build

if ($LASTEXITCODE -ne 0) {
    throw "Frontend build failed."
}

Write-Host ""
Write-Host "2/5 Building Docker image..."
docker build -t $LocalImage .

if ($LASTEXITCODE -ne 0) {
    throw "Docker build failed."
}

Write-Host ""
Write-Host "3/5 Tagging Docker image..."
docker tag $LocalImage $ImageUri

if ($LASTEXITCODE -ne 0) {
    throw "Docker tag failed."
}

Write-Host ""
Write-Host "4/5 Pushing image to Artifact Registry..."
docker push $ImageUri

if ($LASTEXITCODE -ne 0) {
    throw "Docker push failed."
}

Write-Host ""
Write-Host "5/5 Deploying to Cloud Run..."
gcloud run deploy $ServiceName `
    --project=$ProjectId `
    --image=$ImageUri `
    --region=$Region `
    --port=8080 `
    --allow-unauthenticated `
    --cpu=1 `
    --memory=512Mi `
    --min-instances=0 `
    --max-instances=3 `
    --quiet

if ($LASTEXITCODE -ne 0) {
    throw "Cloud Run deployment failed."
}

$ServiceUrl = gcloud run services describe $ServiceName `
    --project=$ProjectId `
    --region=$Region `
    --format="value(status.url)"

Write-Host ""
Write-Host "Deployment completed successfully."
Write-Host "Version: $Version"
Write-Host "URL:     $ServiceUrl"