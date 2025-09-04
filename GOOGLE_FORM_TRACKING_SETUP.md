# Google Form Download Tracking Setup

## Step 1: Create the Form
1. Go to [Google Forms](https://forms.google.com)
2. Create a new form titled "BIM Ops Studio Download Tracker"

## Step 2: Add Form Fields
Add these fields in order:

1. **Download Product** (Required - Dropdown)
   - ViewPreviewTool for Revit 2024
   - ViewPreviewTool for Revit 2025-2026
   - Other

2. **Name** (Optional - Short Answer)

3. **Email** (Optional - Short Answer)

4. **Company** (Optional - Short Answer)

5. **How did you hear about us?** (Optional - Dropdown)
   - Autodesk Forum
   - LinkedIn
   - Google Search
   - Colleague/Friend
   - Other

6. **Timestamp** (Automatically collected)

## Step 3: Get the Form Action URL
1. Click the "Send" button
2. Click the link icon
3. Copy the form URL
4. Replace `/viewform` with `/formResponse` at the end

## Step 4: Get Field IDs
1. Right-click on the form and select "Inspect"
2. Fill out the form
3. Look for entries like `entry.123456789`
4. Note down each field's entry ID:
   - Download Product: entry.XXXXXXXXX
   - Name: entry.XXXXXXXXX
   - Email: entry.XXXXXXXXX
   - Company: entry.XXXXXXXXX
   - Source: entry.XXXXXXXXX

## Step 5: Update the Website
Replace the Google Form URL in free-tools.html with your actual form URL and entry IDs.

## JavaScript Integration Code
```javascript
async function submitToGoogleForm(data) {
  const formUrl = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
  
  const formData = new URLSearchParams();
  formData.append('entry.XXXXXXXXX', data.product);  // Replace with your entry IDs
  formData.append('entry.XXXXXXXXX', data.name || '');
  formData.append('entry.XXXXXXXXX', data.email || '');
  formData.append('entry.XXXXXXXXX', data.company || '');
  formData.append('entry.XXXXXXXXX', data.source || '');
  
  try {
    await fetch(formUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString()
    });
  } catch (error) {
    console.log('Form submission handled');
  }
}
```

## Step 6: View Responses
1. Go to your form
2. Click "Responses" tab
3. You can:
   - View summary charts
   - See individual responses
   - Export to Google Sheets
   - Set up email notifications

## Step 7: Create a Dashboard (Optional)
1. Link responses to Google Sheets
2. Create charts for:
   - Downloads per day/week
   - Most popular versions
   - Traffic sources
   - Geographic distribution (if collecting location)

## Benefits
- Real-time tracking
- User information for follow-up
- Source attribution
- Free and unlimited responses
- Export to Excel/Sheets
- Email notifications for each download