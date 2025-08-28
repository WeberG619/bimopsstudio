# Analytics Setup Guide for BIM Ops Studio

This guide will help you set up Google Analytics to track visitors to your website.

## What Gets Tracked

Once set up, you'll be able to monitor:
- **Visitor Information**: Number of visitors, their location, devices used
- **Page Views**: Which pages are most popular
- **User Behavior**: How long people stay, bounce rate
- **Downloads**: How many people download the View Preview Tool
- **Form Submissions**: Track early access requests
- **Real-time Data**: See who's on your site right now

## Setup Instructions

### 1. Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring"
4. Set up your account:
   - Account name: BIM Ops Studio
   - Leave data sharing settings as default
5. Set up your property:
   - Property name: BIM Ops Studio Website
   - Time zone: Your local time zone
   - Currency: Your preferred currency
6. About your business:
   - Industry: Technology
   - Business size: Small
7. Business objectives: Select what matters to you
8. Click "Create"

### 2. Set Up Web Stream

1. Platform: Choose "Web"
2. Website URL: https://www.bimopsstudio.com
3. Stream name: BIM Ops Studio Main
4. Click "Create stream"

### 3. Get Your Measurement ID

1. After creating the stream, you'll see your Measurement ID
2. It looks like: `G-XXXXXXXXXX`
3. Copy this ID

### 4. Add to Your Website

1. Create a file called `.env.local` in your project root
2. Add this line:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YOUR-ID-HERE
   ```
3. Replace `G-YOUR-ID-HERE` with your actual Measurement ID

### 5. Deploy Your Changes

The analytics code is already integrated into your website. Once you deploy with the measurement ID, tracking will start automatically.

## Viewing Your Analytics

### Real-time Reports
- Go to Reports → Real-time
- See visitors currently on your site
- Watch their actions as they happen

### Key Reports to Monitor

1. **Acquisition**: How people find your site
2. **Engagement**: What pages they visit, how long they stay
3. **Demographics**: Where your visitors are from
4. **Technology**: What devices/browsers they use
5. **Conversions**: Track downloads and form submissions

### Custom Events Being Tracked

- **file_download**: When someone downloads the View Preview Tool
- **form_submit**: When someone submits the early access form
- **page_view**: Automatically tracked for all pages

## Privacy Considerations

- Google Analytics respects user privacy settings
- Users with ad blockers may not be tracked
- The site still functions normally without analytics

## Testing Your Setup

1. After deploying, visit your website
2. Open Google Analytics Real-time reports
3. You should see yourself as an active user
4. Try downloading the tool or submitting a form
5. Check that events appear in real-time

## Need Help?

- [Google Analytics Help Center](https://support.google.com/analytics)
- Email: weber@bimopsstudio.com