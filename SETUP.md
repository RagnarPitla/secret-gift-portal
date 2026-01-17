# 🚀 GitHub and Azure Setup Instructions

## Step 1: Create GitHub Repository ✅ (In Progress)

A GitHub page should have opened. Follow these steps:

1. **Repository name**: `secret-gift-portal` (already filled)
2. **Description**: Already filled in
3. **Visibility**: Choose **Public** or **Private** (either works with Azure)
4. **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

## Step 2: Push Code to GitHub

After creating the repository, copy the commands from GitHub OR run these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/secret-gift-portal.git
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your GitHub username!

## Step 3: Deploy to Azure Static Web Apps

### Option A: Using Azure Portal (Recommended)

1. Go to [Azure Portal](https://portal.azure.com)
2. Click **"Create a resource"** → Search for **"Static Web App"**
3. Click **"Create"**
4. Fill in the details:
   - **Subscription**: Your Azure subscription
   - **Resource Group**: Create new or select existing
   - **Name**: `secret-gift-portal` (or your preferred name)
   - **Region**: Choose closest to your location
   - **Deployment source**: **GitHub**
   - Sign in to GitHub if prompted
   - Select your repository: `secret-gift-portal`
   - Branch: `main`
   - Build presets: **Custom**
   - App location: `/`
   - Output location: `.`
5. Click **"Review + create"** → **"Create"**

Azure will automatically:

- Create a GitHub Actions workflow
- Deploy your app
- Give you a URL like: `https://secret-gift-portal-xyz.azurestaticapps.net`

### Option B: Using Azure CLI

```bash
# Login to Azure
az login

# Create resource group
az group create --name rg-gift-portal --location eastus

# Create static web app
az staticwebapp create \
    --name secret-gift-portal \
    --resource-group rg-gift-portal \
    --source https://github.com/YOUR_USERNAME/secret-gift-portal \
    --location eastus \
    --branch main \
    --app-location "/" \
    --output-location "." \
    --login-with-github
```

## Step 4: Get Your Live URL

Once deployed, Azure will provide a URL like:

```
https://secret-gift-portal-abc123.azurestaticapps.net
```

Share this URL + the secret code `GIFT2026` with your friends!

## 🎁 What to Share

Send this message to your friends:

---

**Hey! I have a gift for you! 🎁**

To claim it, please visit this link and enter the secret code:

🔗 URL: `https://your-app-url.azurestaticapps.net`  
🔐 Secret Code: `GIFT2026`

This will take you to a quick form where you can submit your shipping information so I can send you something special!

---

## 📝 Post-Deployment Checklist

- [ ] Test the secret code works
- [ ] Submit a test form with your own info
- [ ] Check that you receive the email
- [ ] Share with friends!

## 🔧 Making Changes

After initial deployment, any changes you push to GitHub will automatically redeploy:

```bash
git add .
git commit -m "Update secret code"
git push
```

Azure will automatically rebuild and deploy in ~2 minutes!

## ❓ Troubleshooting

**Not receiving emails?**

- Check spam folder
- Verify Web3Forms access key in index.html and script.js
- Check Web3Forms dashboard for delivery status

**Deployment failed?**

- Check GitHub Actions tab for error logs
- Ensure staticwebapp.config.json is in root directory
- Check Azure portal for deployment logs

**Need to change secret code?**

- Update `SECRET_CODE` in script.js
- Commit and push changes
- Wait for auto-deployment
