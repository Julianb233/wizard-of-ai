#!/bin/bash
set -e

echo "Deploying wizard-of-ai to Vercel production..."
echo ""

# Deploy to Vercel with production flag
vercel deploy \
  --token "$VERCEL_TOKEN" \
  --prod \
  --yes \
  --name "wizard-of-ai"

echo ""
echo "Deployment initiated successfully!"
echo ""
echo "To check deployment status, visit: https://vercel.com/dashboard"
