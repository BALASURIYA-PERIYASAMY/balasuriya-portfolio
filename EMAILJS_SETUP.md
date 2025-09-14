# EmailJS Setup Guide

## Why the contact form isn't working
The contact form is currently using placeholder EmailJS credentials that need to be replaced with your actual EmailJS account details.

## Step-by-Step Setup

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** (you'll need this)

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Hello Balasuriya,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{reply_to}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. **Copy the Template ID** (you'll need this)

### 4. Get Your Public Key
1. Go to **Account** → **General**
2. **Copy your Public Key**

### 5. Update the Code
Open `assets/main.js` and replace these values:

```javascript
const EMAILJS_CONFIG = {
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY', // Replace with your actual public key
  serviceId: 'YOUR_SERVICE_ID',         // Replace with your service ID
  templateId: 'YOUR_TEMPLATE_ID'        // Replace with your template ID
};
```

### 6. Test the Form
1. Save the file
2. Open your website
3. Try sending a test message through the contact form
4. Check your email inbox

## Example Configuration
After setup, your configuration should look like this:

```javascript
const EMAILJS_CONFIG = {
  publicKey: 'user_abc123def456ghi789',
  serviceId: 'service_xyz789',
  templateId: 'template_123abc'
};
```

## Troubleshooting
- Make sure all three IDs are correct
- Check that your email service is properly connected
- Verify the template variables match the code
- Check browser console for any error messages

## Free Tier Limits
- 200 emails per month
- Perfect for a portfolio contact form

Once you complete this setup, your contact form will successfully send emails to your inbox!
