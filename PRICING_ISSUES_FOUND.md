# Pricing Inconsistencies Found - BIM Ops Studio Website

**Analysis Date:** November 9, 2025

---

## ❌ CRITICAL ISSUES FOUND

### Issue 1: Trial Period Inconsistency

**Professional Sheet Creator:**
- Homepage: "15 day free trial"
- Contact page: "15 day free trial"
- Pricing page: "15 day free trial"

**BIMmemory:**
- BIMmemory page: "14-day free trial"
- BIMmemory page (CTA section): "14-day free trial"

**Problem:** Two different trial periods! Confusing for customers.

**Recommendation:** Unify to **14-day free trial** (industry standard)

---

### Issue 2: Professional Sheet Creator - NO PRICING

**Current State:**
- Homepage: "Founding-user pricing available after the trial" (NO ACTUAL PRICE)
- Contact page: "Founding-user pricing available" (NO ACTUAL PRICE)
- Pricing page: "Founding-user pricing available" (NO ACTUAL PRICE)
- Technical page: No pricing mentioned

**Problem:**
- Customers have NO IDEA what Professional Sheet Creator costs
- Impossible to understand bundle pricing without knowing individual prices
- "Founding-user pricing" is vague - what does it mean?

**BIMmemory (for comparison):**
- Clear pricing: $99/month, $299/month, Custom
- Customers know exactly what it costs

---

### Issue 3: Bundle Pricing Math Unclear

**Products Hub shows:**
- Individual Bundle: $179/month (both products)
- Team Bundle: $499/month (both products)
- "Save 10-20% when you bundle both products"

**Implied Pricing (if we reverse-engineer):**

If Bundle = BIMmemory + Sheet Creator:

**Individual Tier:**
- BIMmemory: $99/month (stated)
- Bundle: $179/month (stated)
- Implied Sheet Creator: $179 - $99 = **$80/month**

**Team Tier:**
- BIMmemory: $299/month (stated)
- Bundle: $499/month (stated)
- Implied Sheet Creator: $499 - $299 = **$200/month**

**Problem:**
- Sheet Creator prices are NEVER stated anywhere!
- Customers would have to do reverse math to figure this out
- The "10-20% savings" claim is unverifiable

**If we calculate the bundle discount:**
- Individual: $99 + $80 = $179 (should be $179 if no discount)
- Team: $299 + $200 = $499 (should be $499 if no discount)
- **There's NO DISCOUNT showing!** The bundle equals the sum of parts

**This contradicts the claim: "Save 10-20% when you bundle both products"**

---

## 📊 Current Pricing Across All Pages

### Homepage (`/`)
```
Professional Sheet Creator:
- "Beta testing - 15 day free trial"
- "Founding-user pricing available after the trial"
- ❌ NO SPECIFIC PRICE

BIMmemory Banner:
- No pricing on homepage banner
- Links to products page
```

### Products Hub (`/products`)
```
Professional Sheet Creator Card:
- "95% time reduction (4 hours → 10 minutes)"
- ❌ NO PRICE SHOWN

BIMmemory Card:
- "Save 5-10 hours/week searching"
- ❌ NO PRICE SHOWN ON CARD

Bundle Pricing:
- Individual Bundle: $179/month ✓
- Team Bundle: $499/month ✓
- "Save 10-20% when you bundle both products"
```

### BIMmemory Page (`/products/bim-memory`)
```
Pricing Section:
- Individual: $99/month ✓
  - 1 user, unlimited captures, 5 projects
  - CTA: "Start Free Trial"

- Team: $299/month ✓ (Most Popular)
  - Up to 5 users, unlimited projects
  - CTA: "Start Free Trial"

- Enterprise: Custom ✓
  - Unlimited users, on-premise option
  - CTA: "Contact Sales"

Trial: "14-day free trial • No credit card required"
```

### Technical Page (`/technical`)
```
Professional Sheet Creator Details:
- Core functionality described
- Supported versions: 2024, 2025, 2026
- ❌ NO PRICING MENTIONED

Beta Status:
- "In active development"
- "Beta testing will begin with select architecture firms"
```

### Contact Page (`/contact`)
```
Professional Sheet Creator:
- "15 day free trial • Founding-user pricing available"
- ❌ NO SPECIFIC PRICE
```

### Pricing Page (`/pricing`)
```
Professional Sheet Creator:
- "Founding-user pricing available"
- "15 day free trial"
- ❌ NO SPECIFIC PRICE
```

---

## 🎯 RECOMMENDED PRICING STRUCTURE

### Option 1: Show All Prices Upfront

**Professional Sheet Creator:**
- Individual: **$80/month**
  - 1 user, 1 project
  - 14-day free trial

- Team: **$200/month**
  - Up to 5 users, unlimited projects
  - 14-day free trial

- Enterprise: **Custom**
  - Unlimited users, custom integrations

**BIMmemory:** (Keep as is)
- Individual: **$99/month** ✓
- Team: **$299/month** ✓
- Enterprise: **Custom** ✓

**Bundle Pricing:** (Update with real discount)
- Individual Bundle: **$161/month** (Save 10%: was $179, now $161)
- Team Bundle: **$449/month** (Save 10%: was $499, now $449)

---

### Option 2: Use "Starting at" Pricing

**Professional Sheet Creator:**
- **Starting at $80/month**
- "Contact us for custom pricing"
- 14-day free trial

**BIMmemory:**
- **Starting at $99/month** ✓
- Already has pricing tiers

**Bundle:**
- **Starting at $161/month** (with 10% discount)

---

### Option 3: Keep "Founding User" Vague (NOT RECOMMENDED)

**Professional Sheet Creator:**
- "Beta Access - Special founding-user pricing"
- "Contact us for early access pricing"
- 14-day free trial
- **Remove bundle pricing** (can't show bundle without individual prices)

**This is NOT recommended because:**
- Creates confusion
- Can't show bundle savings
- Customers want to know prices before contacting

---

## ✅ RECOMMENDATION: Option 1

**Show explicit pricing for both products.**

### Professional Sheet Creator Pricing
```
Individual     $80/month
Team           $200/month
Enterprise     Custom
```

### BIMmemory Pricing (Keep)
```
Individual     $99/month
Team           $299/month
Enterprise     Custom
```

### Bundle Pricing (WITH REAL DISCOUNT)
```
Individual Bundle    $161/month    (Save $18 - 10% off)
Team Bundle          $449/month    (Save $50 - 10% off)
```

### Trial Period (Unify)
```
All products: 14-day free trial
```

---

## 🔄 PAGES TO UPDATE

1. **Homepage** (`/`)
   - Change "15 day" → "14-day"
   - Add specific price or remove pricing mention

2. **Products Hub** (`/products`)
   - Add individual prices to product cards
   - Fix bundle math with real 10% discount

3. **BIMmemory Page** (`/products/bim-memory`)
   - Already has clear pricing ✓
   - Keep as is

4. **Technical Page** (`/technical`)
   - Add pricing section or link to pricing

5. **Contact Page** (`/contact`)
   - Change "15 day" → "14-day"
   - Add "Starting at $80/month" or specific price

6. **Pricing Page** (`/pricing`)
   - Change "15 day" → "14-day"
   - ADD ACTUAL PRICING TABLE

---

## ❓ QUESTIONS FOR DECISION

**Before I can fix the pricing, please confirm:**

1. **What is the actual price for Professional Sheet Creator?**
   - Individual tier: $__/month?
   - Team tier: $__/month?
   - Or should it remain "Contact for pricing"?

2. **What should the free trial period be?**
   - 14 days (industry standard)?
   - Or 15 days?
   - Should be SAME for both products

3. **Bundle discount - what's the actual savings?**
   - Is it really 10-20% off?
   - Or should bundles just be sum of individual prices?

4. **Is Professional Sheet Creator ready to be priced?**
   - Or is it still too early in development?
   - Should we keep it as "Contact for pricing" until beta completes?

---

**Waiting for clarification before making changes.**
