# Google Forms Analytics Setup (Alternative to GA4)

If you want a simpler solution that doesn't require Google Analytics, you can use Google Forms to track downloads.

## Step 1: Create a Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Create a new blank form
3. Name it "ViewPreviewTool Download Tracking"
4. Add these fields:
   - Name (Short answer)
   - Email (Short answer)
   - Company (Short answer)
   - Version (Short answer)
   - Location (Short answer)
   - Timestamp (Short answer)

## Step 2: Get Form Response URL

1. Click the three dots menu → "Get pre-filled link"
2. Fill in dummy data for each field
3. Click "Get link"
4. Copy the URL - it will look like:
   `https://docs.google.com/forms/d/e/1FAIpQLSe.../formResponse`

## Step 3: Get Field IDs

From the pre-filled URL, note the entry IDs for each field:
- They look like: `entry.1234567890`
- Map each entry ID to your field

## Step 4: Update the Code

Replace the commented section in products.html with:

```javascript
// Send to Google Form
const googleFormURL = 'YOUR_FORM_RESPONSE_URL_HERE';
const googleFormData = new FormData();
googleFormData.append('entry.YOUR_NAME_ID', data.name);
googleFormData.append('entry.YOUR_EMAIL_ID', data.email);
googleFormData.append('entry.YOUR_COMPANY_ID', data.company || '');
googleFormData.append('entry.YOUR_VERSION_ID', downloadVersion);
googleFormData.append('entry.YOUR_LOCATION_ID', location.region);
googleFormData.append('entry.YOUR_TIMESTAMP_ID', new Date().toISOString());

fetch(googleFormURL, {
  method: 'POST',
  mode: 'no-cors',
  body: googleFormData
});
```

## Step 5: View Responses

- Go to your Google Form
- Click "Responses" tab
- You'll see all download data
- Click the Google Sheets icon to export to spreadsheet

## Benefits:
- No coding required
- Free and unlimited
- Real-time data collection
- Easy export to Excel
- Works with GitHub Pages

## Limitations:
- Basic analytics only
- No automatic reports
- Manual data analysis needed