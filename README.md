# 🎁 Secret Gift Portal

A secure contact form with secret code access and email OTP verification, designed to collect shipping information from friends and colleagues for sending gifts.

## 🌟 Features

- **Secret Code Access** - Share a secret code with your recipients
- **Email OTP Verification** - One-time password sent to verify email ownership
- **Beautiful UI** - Modern, responsive design with smooth animations
- **Web3Forms Integration** - Reliable form submission without backend code
- **Azure Static Web App Ready** - Deployed instantly with global CDN

## 🚀 Quick Setup

### 1. Get Your Web3Forms Access Key

1. Visit [Web3Forms](https://web3forms.com/)
2. Sign up for a free account
3. Create a new form and copy your access key

### 2. Configure the Application

Open [script.js](script.js) and update:

```javascript
const SECRET_CODE = "GIFT2026"; // Change to your own secret code
```

Open [index.html](index.html) and update (2 places):

```html
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
```

In [script.js](script.js), update the OTP sending section:

```javascript
access_key: "YOUR_WEB3FORMS_ACCESS_KEY";
```

### 3. Test Locally

Open [index.html](index.html) in your browser or use a local server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve

# Using VS Code Live Server extension
# Right-click index.html > Open with Live Server
```

## 🌐 Deploy to Azure Static Web Apps

### Option 1: Using VS Code Extension

1. Install the [Azure Static Web Apps extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps)
2. Right-click on the folder and select "Create Static Web App"
3. Follow the prompts

### Option 2: Using Azure CLI

```bash
# Login to Azure
az login

# Create a resource group
az group create --name rg-gift-portal --location eastus

# Create a static web app
az staticwebapp create \
    --name secret-gift-portal \
    --resource-group rg-gift-portal \
    --source . \
    --location eastus \
    --branch main \
    --app-location "/" \
    --output-location "."
```

### Option 3: Using GitHub Actions (Recommended)

1. Push your code to a GitHub repository
2. Go to [Azure Portal](https://portal.azure.com)
3. Create a new "Static Web App" resource
4. Connect it to your GitHub repository
5. Azure will automatically create a GitHub Actions workflow

## 📋 How It Works

1. **Share the Secret Code** - Give your friends the URL and secret code
2. **Enter Email** - They enter their email address
3. **Verify OTP** - They receive a 6-digit code via email
4. **Fill Form** - After verification, they provide shipping details
5. **Receive Notification** - You get their information via Web3Forms

## 🔒 Security Features

- Secret code protection
- Email ownership verification with OTP
- HTTPS encryption (on Azure)
- No backend database required
- CSP headers configured

## 🎨 Customization

### Change Colors

Edit [styles.css](styles.css):

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Change Form Fields

Edit [index.html](index.html) in the `#gift-form` section.

### Change Secret Code

Edit [script.js](script.js):

```javascript
const SECRET_CODE = "YOURCODE";
```

## 📧 Email Configuration

Web3Forms will send emails from `noreply@web3forms.com` by default. You can:

- Customize the email template in Web3Forms dashboard
- Set up custom sender domain (Pro plan)
- Configure auto-responder messages

## 🐛 Troubleshooting

**OTP not received?**

- Check spam/junk folder
- Verify Web3Forms access key is correct
- Check browser console for errors

**Form not submitting?**

- Ensure all required fields are filled
- Check network tab for API errors
- Verify Web3Forms access key

**Secret code not working?**

- Code is case-insensitive in the current implementation
- Check [script.js](script.js) for the correct SECRET_CODE

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Tech Stack

- HTML5
- CSS3 (with CSS Grid & Flexbox)
- Vanilla JavaScript (ES6+)
- Web3Forms API
- Azure Static Web Apps

## 📄 License

MIT License - feel free to use for personal or commercial projects!

## 🎉 Fun Deployment Ideas

Deploy with a fun subdomain:

- `gift-squad-2026.azurestaticapps.net`
- `secret-santa-portal.azurestaticapps.net`
- `surprise-delivery.azurestaticapps.net`

---

Made with ❤️ for spreading joy and gifts!
