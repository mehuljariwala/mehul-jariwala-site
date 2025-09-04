# EmailJS Setup Guide for Contact Form

Your contact form is now functional! Here's how to complete the setup:

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Important**: Use `mjariwala98@gmail.com` as the email address
6. Note down your **Service ID** (starts with `service_`)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject**: New Contact Form Message from {{from_name}}

**Content**:
```
Hello Mehul,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Save the template and note down your **Template ID** (starts with `template_`)

## Step 4: Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)

## Step 5: Update Your Code
Open `assets/js/script.js` and replace these lines:

```javascript
const EMAILJS_SERVICE_ID = 'service_xxxxxxxxx'; // Replace with your service ID
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxxxx'; // Replace with your template ID
const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxxxxx'; // Replace with your public key
```

With your actual credentials:

```javascript
const EMAILJS_SERVICE_ID = 'service_your_actual_service_id';
const EMAILJS_TEMPLATE_ID = 'template_your_actual_template_id';
const EMAILJS_PUBLIC_KEY = 'your_actual_public_key';
```

## Step 6: Test Your Form
1. Open your website
2. Navigate to the contact section
3. Fill out the form and submit
4. Check your email at `mjariwala98@gmail.com`

## Features Included
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Auto-hide messages
- ✅ Form reset after successful submission
- ✅ Responsive design

## Troubleshooting
- Make sure all three credentials are correctly updated
- Check browser console for any error messages
- Verify your email service is properly connected in EmailJS dashboard
- Ensure your email template uses the correct variable names: `{{from_name}}`, `{{from_email}}`, `{{message}}`

## Free Tier Limits
EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 2 email templates

This should be more than enough for a personal portfolio website!

## Security Note
The EmailJS credentials in your JavaScript are safe to use publicly as they're designed for client-side use. The service ID and template ID are not sensitive, and the public key is meant to be public.
