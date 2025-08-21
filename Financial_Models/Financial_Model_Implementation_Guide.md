# FINANCIAL MODEL IMPLEMENTATION GUIDE

## Step-by-Step Excel Build Instructions

---

## PHASE 1: WORKBOOK SETUP

### Step 1: Create Workbook Structure
1. Create new Excel workbook: "BIM_Ops_Studio_Financial_Model_v1.xlsx"
2. Add 10 worksheets with names:
   - Assumptions
   - Revenue_Model
   - OpEx_Model
   - Unit_Economics
   - Cash_Flow
   - P&L_Statement
   - Scenario_Analysis
   - KPI_Dashboard
   - Fundraising
   - Balance_Sheet

### Step 2: Format Standards
1. **Set consistent formatting:**
   - Headers: Bold, Size 12, Dark Blue background, White text
   - Input cells: Light blue background (#E6F3FF)
   - Formula cells: No fill, black text
   - Output cells: Light gray background (#F2F2F2)
   - Currency: $#,##0
   - Percentages: 0.0%

2. **Apply protection:**
   - Lock all formula cells
   - Keep input cells unlocked
   - Password protect sheets

---

## PHASE 2: ASSUMPTIONS SHEET

### Step 3: Market Assumptions Table
```excel
Cell Setup:
A1: "BIM OPS STUDIO FINANCIAL MODEL"
A3: "MARKET ASSUMPTIONS"
A5: Headers: Year | 2024 | 2025 | 2026 | 2027 | 2028

Formulas:
TAM Growth: =Previous_Year*(1+Growth_Rate)
SAM: =TAM*Penetration_Rate
Market Share: Manual inputs
```

### Step 4: Pricing Matrix
```excel
A15: "PRICING STRUCTURE"
Create table with:
- Product tiers (rows)
- Monthly/Annual pricing (columns)
- Discount calculations: =Monthly*12*(1-Annual_Discount)
```

### Step 5: Customer Metrics
```excel
A25: "CUSTOMER ACQUISITION & RETENTION"
Include:
- CAC by channel
- Churn rates by tier
- Conversion funnels
- NRR assumptions
```

---

## PHASE 3: REVENUE MODEL

### Step 6: Customer Count Model
```excel
A5: "NEW CUSTOMER ACQUISITION"
Columns: Month | Marketing_Leads | Sales_Leads | Conversions | New_Customers

Key Formulas:
Marketing_Conversions: =Marketing_Leads*Trial_Rate*Conversion_Rate
Sales_Conversions: =Sales_Capacity*Meetings_per_Rep*Close_Rate
Total_New: =Marketing_Conversions+Sales_Conversions+Organic
```

### Step 7: MRR Build
```excel
A20: "MONTHLY RECURRING REVENUE"
Create waterfall:
Beginning_MRR: =Previous_Month_Ending
New_MRR: =New_Customers*Weighted_ARPU
Expansion: =Existing_Base*Expansion_Rate
Churn: =Beginning_MRR*Churn_Rate
Ending_MRR: =Beginning+New+Expansion-Churn
```

### Step 8: Cohort Analysis
```excel
A40: "COHORT REVENUE RETENTION"
Create matrix:
- Rows: Cohort months
- Columns: Months since acquisition
- Values: Revenue retention %

Formula for retention:
=Current_Month_Revenue/First_Month_Revenue
```

---

## PHASE 4: OPERATING EXPENSES

### Step 9: Headcount Planning
```excel
A5: "HEADCOUNT PLAN"
Columns: Department | Current | +Q1 | +Q2 | +Q3 | +Q4 | Total

Salary Calculations:
Loaded_Cost: =Base_Salary*1.4 (benefits, taxes, etc.)
Department_Cost: =Headcount*Loaded_Cost
```

### Step 10: Non-Personnel Expenses
```excel
A30: "OTHER OPERATING EXPENSES"
Create % of revenue model:
Infrastructure: =Revenue*8%
Marketing_Programs: =Revenue*15%
Other categories as defined
```

---

## PHASE 5: UNIT ECONOMICS

### Step 11: LTV Calculations
```excel
A5: "LIFETIME VALUE ANALYSIS"
By customer segment:
LTV: =ARPU/(Churn_Rate)*Gross_Margin
Payback: =CAC/Monthly_Revenue
LTV_CAC_Ratio: =LTV/CAC
```

### Step 12: Contribution Margin
```excel
A20: "CONTRIBUTION MARGIN ANALYSIS"
Revenue: Link from Revenue Model
Less: COGS (hosting, support)
Less: Sales & Marketing
Equals: Contribution Margin
CM%: =Contribution_Margin/Revenue
```

---

## PHASE 6: FINANCIAL STATEMENTS

### Step 13: P&L Statement
```excel
Structure:
Revenue (link from Revenue Model)
- COGS
= Gross Profit
- Operating Expenses
= EBITDA
- D&A
= EBIT
- Interest
- Taxes
= Net Income

Add % of revenue calculations for each line
```

### Step 14: Cash Flow Statement
```excel
Operating Activities:
Net Income
+ D&A
+/- Working Capital Changes
= Operating Cash Flow

Investing Activities:
- CapEx
= Investing Cash Flow

Financing Activities:
+ Equity Raises
+ Debt
= Financing Cash Flow

Net Cash Flow: =Operating+Investing+Financing
```

### Step 15: Balance Sheet
```excel
Assets:
Cash: =Previous_Cash+Net_Cash_Flow
AR: =Revenue/365*DSO
Other current assets
Fixed assets

Liabilities:
AP: =OpEx/365*DPO
Deferred Revenue: =Annual_Contracts/12*Months_Remaining
Debt

Equity:
Common Stock
Retained Earnings: =Previous+Net_Income
```

---

## PHASE 7: ADVANCED ANALYTICS

### Step 16: Scenario Analysis
```excel
Create scenario table:
Scenarios: Base | Conservative | Aggressive
Variables:
- Growth Rate
- Churn Rate
- Pricing
- CAC

Use Data Table or Scenario Manager
```

### Step 17: Sensitivity Analysis
```excel
Two-way data table:
Row Input: Pricing changes (-20% to +20%)
Column Input: Churn changes (-20% to +20%)
Output: 2028 Revenue

Create similar tables for other key variables
```

---

## PHASE 8: KPI DASHBOARD

### Step 18: Create Dashboard Layout
```excel
Design grid layout with:
- Current month metrics (large numbers)
- Trend charts (sparklines)
- Traffic light indicators
- YoY comparisons
```

### Step 19: Key Metrics Setup
```excel
MRR: Link to Revenue Model
Growth Rate: =(Current_MRR-Previous_MRR)/Previous_MRR
Customer Count: Sum of active customers
ARPU: =MRR/Customer_Count
Churn: Link from assumptions
CAC: Link from Unit Economics
LTV:CAC: Link from Unit Economics
Burn Rate: =-Operating_Cash_Flow
Runway: =Cash_Balance/Burn_Rate
```

### Step 20: Visualization
```excel
Add charts:
1. MRR Growth (Line chart)
2. Customer Growth (Column chart)
3. Burn Rate Trend (Line with markers)
4. LTV:CAC by Segment (Column chart)
5. Revenue Mix (Pie chart)
6. Cash Runway (Gauge chart using donut)
```

---

## PHASE 9: AUTOMATION & CONTROLS

### Step 21: Add Data Validation
```excel
Input Cells:
- Growth rates: Between 0% and 100%
- Churn rates: Between 0% and 20%
- Pricing: Positive numbers only
- Dates: Valid date format
```

### Step 22: Error Checking
```excel
Add checks:
Balance Sheet Check: =Assets-Liabilities-Equity (should = 0)
Cash Check: Ensure never negative
Churn Check: Alert if >10%
Burn Check: Alert if runway <6 months
```

### Step 23: Macros for Automation
```vba
Sub Update_Dashboard()
    ' Refresh all calculations
    Application.Calculate
    ' Update charts
    ActiveSheet.ChartObjects("Chart 1").Chart.Refresh
    ' Update date stamp
    Range("LastUpdated").Value = Now()
End Sub
```

---

## PHASE 10: FINAL TOUCHES

### Step 24: Create Summary Sheet
```excel
One-page executive summary with:
- Key assumptions
- 5-year revenue projection
- Path to profitability
- Funding requirements
- Key metrics
```

### Step 25: Documentation
```excel
Add "README" sheet with:
- Model overview
- How to use
- Key assumptions
- Change log
- Contact information
```

---

## COMMON EXCEL FORMULAS USED

### Dynamic Date Series
```excel
=DATE(YEAR($B$1),MONTH($B$1)+COLUMN()-2,DAY($B$1))
```

### Weighted Average (for ARPU)
```excel
=SUMPRODUCT(Customer_Count,Price)/SUM(Customer_Count)
```

### Compound Growth
```excel
=Starting_Value*(1+Growth_Rate)^Periods
```

### NPV for Valuation
```excel
=NPV(Discount_Rate,Cash_Flow_Range)+Initial_Investment
```

### Dynamic Sum with Criteria
```excel
=SUMIFS(Revenue_Range,Date_Range,">="&Start_Date,Date_Range,"<="&End_Date)
```

---

## TIPS FOR SUCCESS

1. **Build Incrementally**: Complete one sheet fully before moving to the next
2. **Test Continuously**: Enter sample data and verify calculations
3. **Document Assumptions**: Add comments to explain complex formulas
4. **Version Control**: Save versions before major changes
5. **Peer Review**: Have someone else test the model
6. **Stress Test**: Try extreme values to ensure model doesn't break

---

## DELIVERABLES CHECKLIST

- [ ] Fully functional Excel model
- [ ] PDF export of key outputs
- [ ] Executive summary deck
- [ ] Assumption documentation
- [ ] Scenario comparison
- [ ] KPI dashboard
- [ ] Fundraising analysis
- [ ] Model user guide

---

This implementation guide provides the detailed steps needed to build a professional-grade financial model in Excel for BIM Ops Studio.