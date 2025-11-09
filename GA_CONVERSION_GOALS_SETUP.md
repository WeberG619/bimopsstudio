# Google Analytics Conversion Goals Setup Guide

**Date:** November 9, 2025
**For:** BIM Ops Studio Website
**GA Property ID:** G-RBE2XPP5VZ

---

## Overview

This guide will help you set up conversion tracking in Google Analytics 4 (GA4) to measure the success of your website and identify what's working.

---

## What Are Conversions?

Conversions are important user actions that indicate business success:
- **Lead Form Submission** - Someone requests beta access
- **Pricing Page View** - Someone shows buying intent
- **Free Tool Download** - Someone engages with your content
- **Demo Video Watch** - Someone learns about your product

---

## Step-by-Step Setup

### 1. Access Google Analytics

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property: **BIM Ops Studio Website**
3. Click **Configure** in the left sidebar
4. Click **Events**

---

### 2. Mark Form Submission as Conversion (PRIMARY GOAL)

**Event Name:** `form_submit`
**Description:** Track when users submit the early access request form
**Value:** High - This is your primary conversion goal

**Steps:**
1. In the Events page, find `form_submit` in the list
2. Toggle the "Mark as conversion" switch **ON**
3. The event will now appear in **Conversions** section

**Expected Results:**
- **Goal:** 50-100 form submissions per month
- **Conversion Rate Target:** 5-10% of visitors
- **Value:** Each lead is worth potential $80-200/month recurring revenue

---

### 3. Create Custom Event: Pricing Page View

**Why:** Viewing the pricing page indicates high buying intent

**Steps:**
1. Go to **Configure → Events**
2. Click **Create Event**
3. Configure:
   - **Event name:** `view_pricing_page`
   - **Matching conditions:**
     - Parameter: `page_location`
     - Operator: `contains`
     - Value: `/pricing`
4. Click **Create**
5. Toggle "Mark as conversion" **ON**

**Expected Results:**
- **Goal:** 200-300 pricing page views per month
- **Conversion Rate:** 20-30% of visitors view pricing
- **Follow-up:** Track how many pricing viewers submit forms

---

### 4. Create Custom Event: Free Tool Download

**Event Name:** `file_download` (already tracked)
**Description:** Track downloads of the free View Preview Tool

**Steps:**
1. In the Events page, find `file_download`
2. Toggle "Mark as conversion" **ON**

**Expected Results:**
- **Goal:** 100-200 downloads per month
- **Lead Magnet:** Captures emails for follow-up
- **Value:** Build email list for nurturing

---

### 5. Set Up Enhanced Measurement (If Not Already Active)

**What It Tracks Automatically:**
- Page views
- Scrolls (90% scroll depth)
- Outbound clicks
- Site search
- Video engagement
- File downloads

**Steps:**
1. Go to **Admin → Data Streams**
2. Click your web stream
3. Click **Enhanced measurement**
4. Ensure all toggles are **ON**:
   - ✅ Page views
   - ✅ Scrolls
   - ✅ Outbound clicks
   - ✅ Site search
   - ✅ Video engagement
   - ✅ File downloads

---

### 6. Create Conversion Funnel (Optional but Recommended)

**Purpose:** See where users drop off in the conversion process

**User Journey:**
```
Homepage Visit
     ↓
Pricing Page View (20-30% of visitors)
     ↓
Contact Page View (50% of pricing viewers)
     ↓
Form Submission (50% of contact page viewers)
```

**Steps:**
1. Go to **Explore**
2. Click **Blank** template
3. Select **Funnel exploration**
4. Add steps:
   - Step 1: `page_view` where `page_location` contains `/`
   - Step 2: `page_view` where `page_location` contains `/pricing`
   - Step 3: `page_view` where `page_location` contains `/contact`
   - Step 4: `form_submit`
5. Save as "Beta Access Funnel"

---

## Conversion Events Summary

| Event Name | Type | Expected Volume | Conversion Rate | Priority |
|------------|------|-----------------|-----------------|----------|
| `form_submit` | Primary Goal | 50-100/month | 5-10% of visitors | 🔴 Critical |
| `view_pricing_page` | Micro-conversion | 200-300/month | 20-30% of visitors | 🟡 Important |
| `file_download` | Lead Magnet | 100-200/month | 10-20% of visitors | 🟡 Important |
| `video_play` | Engagement | 50-100/month | 5-10% of visitors | 🟢 Nice to Have |

---

## How to View Conversion Data

### Real-Time Conversions
1. Go to **Reports → Real-time**
2. Scroll to **Conversions by Event Name**
3. See conversions happening right now

### Historical Conversions
1. Go to **Reports → Engagement → Conversions**
2. See all conversions over time
3. Filter by date range, device, traffic source

### Conversion Attribution
1. Go to **Reports → Acquisition → Traffic Acquisition**
2. See which channels drive the most conversions:
   - Organic Search (Google, Bing)
   - Direct (typed URL, bookmarks)
   - Referral (LinkedIn, forums)
   - Social (Twitter, Facebook)

---

## Key Metrics to Monitor

### Daily Check (1-2 minutes):
- **Real-time users:** How many people are on site right now?
- **Today's form submissions:** How many leads did we get?
- **Traffic sources:** Where are visitors coming from?

### Weekly Review (15 minutes):
- **Total visitors:** Are we growing?
- **Conversion rate:** % of visitors who submit forms
- **Top pages:** What content is most popular?
- **Bounce rate:** Are people staying or leaving immediately?
- **Average session duration:** How engaged are visitors?

### Monthly Analysis (1 hour):
- **Conversion funnel:** Where do users drop off?
- **Traffic source performance:** Which channels convert best?
- **Device breakdown:** Mobile vs desktop behavior
- **Geographic data:** Where are our best leads?
- **Landing page performance:** Which pages drive conversions?

---

## Success Benchmarks

### Week 1 (Launch):
- ✅ 50-100 visitors
- ✅ 5-10 form submissions (5-10% conversion rate)
- ✅ Bounce rate <60%
- ✅ Avg session duration >2 minutes

### Month 1:
- ✅ 500-1000 visitors
- ✅ 50-100 form submissions (5-10% conversion rate)
- ✅ 100-200 free tool downloads
- ✅ 200-300 pricing page views

### Month 3:
- ✅ 1500-3000 visitors
- ✅ 150-300 form submissions
- ✅ Consistent 5-10% conversion rate
- ✅ Growing email list (500+ subscribers)

---

## Troubleshooting

### No Events Showing Up?
1. Check that `.env.local` has correct GA ID: `G-RBE2XPP5VZ`
2. Clear browser cache and test again
3. Use Google Tag Assistant Chrome extension to verify tracking
4. Check browser console for JavaScript errors

### Conversions Not Tracking?
1. Verify `form_submit` event is marked as conversion
2. Test form submission yourself and check Real-time reports
3. Check that tracking code is in `GoogleAnalytics.tsx`
4. Ensure `trackFormSubmit()` is called on form success

### Low Conversion Rate?
**If <2%:** Major issues - UX problems, unclear value prop, broken forms
**If 2-5%:** Normal - Optimize CTAs, add social proof, test different messaging
**If 5-10%:** Good - Keep optimizing, A/B test improvements
**If >10%:** Excellent - Highly targeted traffic and strong value prop

---

## Advanced: Custom Dashboards

### Create "Launch Dashboard"

**Purpose:** Monitor key launch metrics in one place

**Steps:**
1. Go to **Explore → Create new exploration**
2. Select **Free form**
3. Add cards:
   - **Visitors Today** (metric: Active users)
   - **Form Submissions Today** (metric: form_submit conversions)
   - **Conversion Rate** (calculated metric)
   - **Top Traffic Sources** (dimension: Source/Medium)
4. Save as "Launch Dashboard"

**Use this daily during first month after launch**

---

## A/B Testing Setup (Future)

Once you have baseline data, test improvements:

### Test Ideas:
1. **CTA Button Text:**
   - "Request Beta Access" vs "Start Free Trial"
   - "Learn More" vs "See Demo"

2. **Headline Variations:**
   - "Automate Revit Sheet Creation" vs "Save 4 Hours Per Project"

3. **Social Proof Placement:**
   - Above fold vs below fold
   - Testimonials vs statistics

4. **Pricing Display:**
   - Monthly vs annual pricing
   - Individual first vs Team first

**How to Track A/B Tests:**
1. Use custom parameters in GA events
2. Track which variation each user sees
3. Compare conversion rates between variations
4. Implement winner site-wide

---

## Privacy & Compliance

### GDPR Compliance:
- ✅ GA4 automatically respects user privacy settings
- ✅ No personal data collected without consent
- ✅ IP addresses anonymized
- ✅ Users can opt out via browser settings

### Cookie Consent (Recommended):
Consider adding a cookie consent banner:
- [CookieYes](https://www.cookieyes.com/)
- [OneTrust](https://www.onetrust.com/)
- Simple DIY banner with accept/decline

---

## Next Steps After Setup

### Week 1:
1. ✅ Verify all conversions are tracking
2. ✅ Create Launch Dashboard
3. ✅ Set up daily email reports (Admin → Property Settings → Email Reports)
4. ✅ Share dashboard link with team

### Month 1:
1. Analyze which traffic sources convert best
2. Identify top-performing pages
3. Find and fix high bounce rate pages
4. Start A/B testing CTAs

### Month 3:
1. Build conversion rate optimization plan
2. Implement retargeting for non-converters
3. Create nurture email sequence for leads
4. Expand to paid advertising if ROI is positive

---

## Quick Reference: GA4 Navigation

```
📊 Reports → Real-time
   └─ See live visitors and conversions

📊 Reports → Engagement → Conversions
   └─ Historical conversion data

📊 Reports → Acquisition → Traffic Acquisition
   └─ Where visitors come from

📊 Configure → Events
   └─ Manage events and mark conversions

📊 Explore → Funnels
   └─ See user journey and drop-offs

⚙️ Admin → Data Streams
   └─ Enhanced measurement settings
```

---

## Support Resources

- [GA4 Help Center](https://support.google.com/analytics/answer/9304153)
- [GA4 Academy (Free)](https://analytics.google.com/analytics/academy/)
- [Conversion Tracking Guide](https://support.google.com/analytics/answer/9267568)

---

## Questions?

If you need help setting this up, email weber@bimopsstudio.com

**Note:** Setting up these conversions should take 10-15 minutes total. Do it right after launching the site to start collecting data from day one.
