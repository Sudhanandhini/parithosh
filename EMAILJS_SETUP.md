# EmailJS Setup Instructions

This project uses EmailJS to send contact form submissions to support@sunsys.in

## Setup Steps:

1. **Create an EmailJS Account**
   - Go to https://www.emailjs.com/
   - Sign up for a free account

2. **Add Email Service**
   - Go to Email Services section
   - Add your email service (Gmail, Outlook, etc.)
   - Note down the Service ID

3. **Create Email Template**
   - Go to Email Templates section
   - Create a new template with these parameters:
     ```
     To: support@sunsys.in
     Subject: {{subject}}
     
     New Contact Form Submission
     
     From: {{from_name}}
     Email: {{from_email}}
     Phone: {{phone}}
     
     Subject: {{subject}}
     
     Message:
     {{message}}
     
     ---
     Reply to: {{reply_to}}
     ```
   - Note down the Template ID

4. **Get Public Key**
   - Go to Account > General
   - Copy your Public Key

5. **Update .env File**
   - Open `.env` file in the frontend folder
   - Replace the placeholder values:
     ```
     VITE_EMAILJS_SERVICE_ID=your_actual_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
     ```

6. **Restart Development Server**
   - Stop the current server (Ctrl+C)
   - Run `npm run dev` again

## Template Variables Used:
- `to_email`: support@sunsys.in
- `from_name`: User's name from form
- `from_email`: User's email from form
- `phone`: User's phone number
- `subject`: Form subject
- `message`: Form message
- `reply_to`: User's email for replies

## Testing:
After setup, fill out the contact form and submit. You should receive the email at support@sunsys.in
