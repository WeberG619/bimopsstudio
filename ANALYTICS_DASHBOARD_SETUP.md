# Google Analytics Dashboard Setup for BIM Ops Studio

## Account Information
- **Account Name**: BIM Ops Studio
- **Account ID**: 367208945
- **Measurement ID**: G-RBE2XPP5VZ
- **Website**: bimopsstudio.com

## Quick Access Links
- [Google Analytics Dashboard](https://analytics.google.com)
- [Realtime Report](https://analytics.google.com/analytics/web/#/p/realtime)
- [Events Report](https://analytics.google.com/analytics/web/#/p/events)

## Setting Up Download Tracking Dashboard

### 1. Create Custom Events Report
1. Go to **Reports** → **Engagement** → **Events**
2. Look for these events:
   - `file_download` - Tracks all file downloads
   - `download_form_submit` - Tracks form completions
   - `download_form_skip` - Tracks direct downloads

### 2. Create Custom Dashboard for Downloads
1. Go to **Reports** → **Reports snapshot**
2. Click **Edit** → **Add card**
3. Add these cards:

#### Card 1: Total Downloads
- **Metric**: Event count
- **Filter**: Event name = file_download
- **Visualization**: Number

#### Card 2: Downloads by File
- **Dimension**: Event parameter (file_name)
- **Metric**: Event count
- **Filter**: Event name = file_download
- **Visualization**: Table

#### Card 3: Download Sources
- **Dimension**: Session source
- **Metric**: Event count
- **Filter**: Event name = file_download
- **Visualization**: Pie chart

### 3. Set Up Email Reports
1. Go to any report
2. Click **Share** → **Schedule email**
3. Set frequency (daily/weekly)
4. Add recipients

## Key Metrics to Track

### User Engagement
- **Users**: Unique visitors to your site
- **New users**: First-time visitors
- **Average engagement time**: How long users stay
- **Bounce rate**: Users who leave immediately

### Download Performance
- **Total downloads**: Count of file_download events
- **Download conversion rate**: Downloads / Page views
- **Most popular version**: Which Revit version is downloaded most
- **Geographic distribution**: Where downloads come from

### Traffic Sources
- **Direct**: Users typing your URL
- **Organic Search**: From Google/Bing
- **Social**: From LinkedIn, Forums
- **Referral**: From other websites

## Custom Alerts Setup

### 1. Low Traffic Alert
1. Go to **Admin** → **Custom alerts**
2. Create alert:
   - **Name**: Low Daily Traffic
   - **Condition**: Users < 10 in 1 day
   - **Email**: Your email

### 2. High Download Alert
1. Create alert:
   - **Name**: High Download Activity
   - **Condition**: file_download events > 50 in 1 day
   - **Email**: Your email

## Debugging Analytics Issues

### Check if Analytics is Working
1. Visit: https://www.bimopsstudio.com/verify-analytics.html
2. Click test buttons
3. Go to **Realtime** in Google Analytics
4. You should see yourself as active user

### Common Issues
1. **No data showing**:
   - Check if tracking code is on all pages
   - Verify no ad blockers are active
   - Wait 24-48 hours for initial data

2. **Events not tracking**:
   - Use browser console to check for gtag
   - Verify event names match exactly
   - Check for JavaScript errors

3. **Missing downloads**:
   - Ensure onClick handlers are present
   - Test direct GitHub links are tracked
   - Verify form submissions work

## Advanced Tracking Implementation

### Track Detailed User Journey
```javascript
// Track how far users scroll on free tools page
gtag('event', 'scroll', {
  'percent_scrolled': '90',
  'page': '/free-tools'
});

// Track time to download
let pageLoadTime = new Date().getTime();
function trackTimeToDownload() {
  let downloadTime = new Date().getTime();
  let timeToAction = (downloadTime - pageLoadTime) / 1000;
  
  gtag('event', 'timing_complete', {
    'name': 'download_decision',
    'value': timeToAction
  });
}
```

### Enhanced E-commerce Tracking (Future)
When you add paid products:
```javascript
// Track product views
gtag('event', 'view_item', {
  'currency': 'USD',
  'value': 299.00,
  'items': [{
    'item_id': 'PRO_SHEET_CREATOR',
    'item_name': 'Professional Sheet Creator',
    'price': 299.00,
    'quantity': 1
  }]
});
```

## Monthly Review Checklist
- [ ] Total unique users
- [ ] Download count by version
- [ ] Top traffic sources
- [ ] Geographic distribution
- [ ] User feedback from forms
- [ ] Page performance metrics
- [ ] Error rates (404s, broken links)
- [ ] Conversion funnel analysis

## Export Data for Reporting
1. Any report → **Share** → **Download file**
2. Choose format: PDF, CSV, or Google Sheets
3. Use for:
   - Investor updates
   - Marketing analysis
   - Product decisions
   - User research