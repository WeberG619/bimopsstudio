#!/bin/bash

# Build the Next.js site
echo "Building Next.js site..."
npm run build

# Copy all files from out/ to root, excluding directories we want to keep
echo "Copying built files to root..."
cp -r out/* .

# Ensure .nojekyll exists in root
touch .nojekyll

echo "Deploy preparation complete!"