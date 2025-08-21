# BIM OPS STUDIO - EXCEL FINANCIAL MODEL STRUCTURE

## MODEL OVERVIEW

This document outlines the structure for a comprehensive Excel financial model for BIM Ops Studio. The model includes:
- 5-year revenue projections
- Detailed cost structure
- Unit economics
- Cohort analysis
- Cash flow projections
- Scenario planning
- KPI dashboard

---

## EXCEL WORKBOOK STRUCTURE

### Sheet 1: ASSUMPTIONS & INPUTS

#### Market Assumptions
| Parameter | 2024 | 2025 | 2026 | 2027 | 2028 |
|-----------|------|------|------|------|------|
| Total Addressable Market (TAM) | $2.5B | $3.0B | $3.6B | $4.3B | $5.2B |
| Serviceable Addressable Market (SAM) | $500M | $650M | $845M | $1.1B | $1.4B |
| Market Growth Rate | 20% | 20% | 20% | 20% | 20% |
| Our Market Share Target | 0.5% | 1.2% | 2.5% | 4.0% | 5.5% |

#### Pricing Assumptions
| Product Tier | Monthly Price | Annual Price | Annual Discount |
|--------------|---------------|--------------|-----------------|
| Starter (per user) | $99 | $948 | 20% |
| Professional (per user) | $199 | $1,908 | 20% |
| Enterprise (base) | $4,167 | $50,000 | Negotiated |

#### Customer Acquisition
| Channel | Cost per Lead | Lead to Trial | Trial to Paid | CAC |
|---------|---------------|---------------|---------------|-----|
| Direct Sales | $500 | 20% | 30% | $8,333 |
| Marketing Qualified | $50 | 10% | 20% | $2,500 |
| Partner Channel | $200 | 30% | 40% | $1,667 |
| Organic/Word of Mouth | $0 | 15% | 50% | $0 |

#### Churn & Retention
| Metric | Starter | Professional | Enterprise |
|--------|---------|--------------|------------|
| Monthly Churn | 5% | 3% | 1% |
| Annual Retention | 51% | 68% | 88% |
| Net Revenue Retention | 95% | 115% | 140% |

---

### Sheet 2: REVENUE MODEL

#### New Customer Acquisition
```
Formula Structure:
New Customers = (Previous Month Customers × Growth Rate) + Marketing Generated + Sales Generated + Organic

Marketing Generated = Marketing Spend / CAC(Marketing)
Sales Generated = Sales Capacity × Quota Achievement
Organic = Total Customers × Referral Rate × Referral Conversion
```

#### Monthly Recurring Revenue (MRR)
```
MRR Calculation:
Beginning MRR
+ New MRR (New Customers × ARPU)
+ Expansion MRR (Upsells + Seat Expansion)
- Contraction MRR (Downgrades)
- Churn MRR (Churned Customers × ARPU)
= Ending MRR

Where ARPU = Weighted Average Revenue Per User
```

#### Cohort Revenue Model
| Cohort | Month 1 | Month 2 | Month 3 | ... | Month 24 |
|--------|---------|---------|---------|-----|----------|
| Jan 2024 | $50K | $48K | $47K | ... | $65K |
| Feb 2024 | $0 | $55K | $53K | ... | $72K |
| Mar 2024 | $0 | $0 | $60K | ... | $78K |

---

### Sheet 3: OPERATING EXPENSES

#### Personnel Costs
| Department | 2024 HC | 2025 HC | 2026 HC | Avg Salary | Loaded Cost |
|------------|---------|---------|---------|------------|-------------|
| Engineering | 15 | 25 | 40 | $150,000 | $210,000 |
| Sales | 5 | 12 | 25 | $120,000 | $168,000 |
| Customer Success | 4 | 8 | 15 | $90,000 | $126,000 |
| Marketing | 3 | 6 | 10 | $100,000 | $140,000 |
| G&A | 3 | 5 | 8 | $80,000 | $112,000 |

#### Non-Personnel Costs
| Category | % of Revenue | 2024 | 2025 | 2026 |
|----------|--------------|------|------|------|
| Infrastructure/Hosting | 8% | $240K | $600K | $1.4M |
| Software/Tools | 3% | $90K | $225K | $525K |
| Marketing Programs | 15% | $450K | $1.1M | $2.6M |
| Professional Services | 2% | $60K | $150K | $350K |
| Office/Facilities | 2% | $60K | $150K | $350K |

---

### Sheet 4: UNIT ECONOMICS

#### Customer Lifetime Value (LTV)
```
LTV Calculation:
LTV = ARPU × Gross Margin × (1 / Monthly Churn Rate)

Starter LTV = $99 × 85% × (1 / 0.05) = $1,683
Professional LTV = $199 × 85% × (1 / 0.03) = $5,638
Enterprise LTV = $4,167 × 85% × (1 / 0.01) = $354,195
```

#### LTV:CAC Ratios
| Segment | LTV | CAC | LTV:CAC | Payback (months) |
|---------|-----|-----|---------|------------------|
| Starter | $1,683 | $2,500 | 0.7:1 | 30 |
| Professional | $5,638 | $2,500 | 2.3:1 | 15 |
| Enterprise | $354,195 | $8,333 | 42.5:1 | 2 |

#### Contribution Margin
```
Contribution Margin = (Revenue - COGS - Sales & Marketing) / Revenue

Target: >40% by Year 3
```

---

### Sheet 5: CASH FLOW PROJECTION

#### Operating Cash Flow
```
Monthly Cash Flow:
Cash Receipts (Collections)
- Personnel Costs
- Non-Personnel OpEx
- Sales & Marketing
= Operating Cash Flow

Working Capital Adjustments:
+ Beginning Cash
+/- AR Changes
+/- Deferred Revenue Changes
= Ending Cash
```

#### Cash Runway Analysis
| Scenario | Monthly Burn | Current Cash | Runway (months) |
|----------|--------------|--------------|-----------------|
| Current | $500K | $5M | 10 |
| Conservative | $400K | $5M | 12.5 |
| Aggressive Growth | $750K | $5M | 6.7 |

---

### Sheet 6: P&L PROJECTION

#### 5-Year P&L Summary (in $000s)
| Line Item | 2024 | 2025 | 2026 | 2027 | 2028 |
|-----------|------|------|------|------|------|
| **Revenue** |
| Subscription Revenue | 3,000 | 7,500 | 17,500 | 35,000 | 60,000 |
| Professional Services | 200 | 400 | 800 | 1,200 | 1,800 |
| Total Revenue | 3,200 | 7,900 | 18,300 | 36,200 | 61,800 |
| **COGS** |
| Infrastructure | 240 | 600 | 1,400 | 2,800 | 4,800 |
| Support | 160 | 400 | 900 | 1,800 | 3,000 |
| Total COGS | 400 | 1,000 | 2,300 | 4,600 | 7,800 |
| **Gross Profit** | 2,800 | 6,900 | 16,000 | 31,600 | 54,000 |
| Gross Margin % | 87.5% | 87.3% | 87.4% | 87.3% | 87.4% |
| **Operating Expenses** |
| Sales & Marketing | 1,600 | 3,200 | 5,500 | 9,000 | 12,500 |
| Research & Development | 1,200 | 2,000 | 3,500 | 5,500 | 8,000 |
| General & Administrative | 400 | 800 | 1,500 | 2,500 | 3,500 |
| Total OpEx | 3,200 | 6,000 | 10,500 | 17,000 | 24,000 |
| **EBITDA** | (400) | 900 | 5,500 | 14,600 | 30,000 |
| EBITDA Margin % | -12.5% | 11.4% | 30.1% | 40.3% | 48.5% |

---

### Sheet 7: SCENARIO ANALYSIS

#### Revenue Scenarios
| Scenario | Assumption | 2026 Revenue | 2028 Revenue | 5-Year Total |
|----------|------------|--------------|--------------|--------------|
| Base Case | 20% monthly growth | $17.5M | $60M | $130M |
| Conservative | 15% monthly growth | $12M | $35M | $80M |
| Aggressive | 25% monthly growth | $25M | $100M | $200M |

#### Sensitivity Analysis
| Variable | -20% | -10% | Base | +10% | +20% |
|----------|------|------|------|------|------|
| Pricing | $45M | $52.5M | $60M | $67.5M | $75M |
| Churn Rate | $70M | $65M | $60M | $55M | $50M |
| CAC | $65M | $62.5M | $60M | $57.5M | $55M |
| Market Size | $48M | $54M | $60M | $66M | $72M |

---

### Sheet 8: KPI DASHBOARD

#### SaaS Metrics Dashboard
| Metric | Target | Jan | Feb | Mar | ... | Dec |
|--------|--------|-----|-----|-----|-----|-----|
| MRR | $500K | $250K | $275K | $303K | ... | $500K |
| MRR Growth % | 10% | 8% | 10% | 10% | ... | 10% |
| Customer Count | 500 | 250 | 280 | 315 | ... | 500 |
| ARPU | $1,000 | $1,000 | $982 | $961 | ... | $1,000 |
| Churn Rate | <3% | 4% | 3.5% | 3.2% | ... | 2.8% |
| NRR | >110% | 105% | 108% | 110% | ... | 115% |
| CAC | <$2,500 | $3,000 | $2,800 | $2,600 | ... | $2,200 |
| LTV:CAC | >3:1 | 2.5:1 | 2.8:1 | 3.1:1 | ... | 3.5:1 |
| Burn Rate | <$500K | $600K | $550K | $520K | ... | $450K |
| Runway | >12mo | 10mo | 11mo | 11.5mo | ... | 14mo |

---

### Sheet 9: FUNDRAISING MODEL

#### Funding Requirements
| Round | Date | Amount | Valuation | Dilution | Use of Funds |
|-------|------|--------|-----------|----------|--------------|
| Seed | Complete | $2M | $10M | 20% | Product Development |
| Series A | Q2 2024 | $10M | $40M | 25% | Sales & Marketing |
| Series B | Q2 2025 | $25M | $150M | 16.7% | Scale & Expansion |
| Series C | Q2 2026 | $50M | $500M | 10% | Market Dominance |

#### Investor Returns
| Investor | Entry | Investment | Ownership | Exit Value (5x) |
|----------|-------|------------|-----------|-----------------|
| Seed | $10M | $2M | 20% | $100M |
| Series A | $40M | $10M | 25% | $125M |
| Series B | $150M | $25M | 16.7% | $83.5M |

---

### Sheet 10: BALANCE SHEET

#### Projected Balance Sheet (Year-End)
| Item | 2024 | 2025 | 2026 | 2027 | 2028 |
|------|------|------|------|------|------|
| **Assets** |
| Cash | $8M | $15M | $35M | $65M | $110M |
| Accounts Receivable | $300K | $750K | $1.8M | $3.5M | $6M |
| Prepaid Expenses | $100K | $200K | $400K | $700K | $1M |
| Total Current Assets | $8.4M | $16M | $37.2M | $69.2M | $117M |
| Fixed Assets | $200K | $500K | $1M | $2M | $3M |
| **Total Assets** | $8.6M | $16.5M | $38.2M | $71.2M | $120M |
| **Liabilities** |
| Accounts Payable | $200K | $400K | $800K | $1.5M | $2.5M |
| Deferred Revenue | $500K | $1.2M | $2.8M | $5.5M | $9.5M |
| Total Liabilities | $700K | $1.6M | $3.6M | $7M | $12M |
| **Equity** | $7.9M | $14.9M | $34.6M | $64.2M | $108M |

---

## KEY EXCEL FORMULAS

### MRR Growth
```excel
=SUMPRODUCT((CustomerCount)*(ARPU))*(1-ChurnRate)+NewCustomers*NewARPU
```

### LTV Calculation
```excel
=ARPU*GrossMargin%*(1/ChurnRate)
```

### CAC Calculation  
```excel
=(SalesMarketing_Expense)/(New_Customers_Acquired)
```

### Cash Runway
```excel
=Current_Cash/Monthly_Burn_Rate
```

### Cohort Retention
```excel
=INDEX(CohortTable,MATCH(Month,MonthRow,0),MATCH(Cohort,CohortColumn,0))
```

---

## VISUAL DASHBOARD ELEMENTS

1. **MRR Waterfall Chart** - Shows monthly MRR movements
2. **Cohort Retention Heatmap** - Visualizes retention by cohort
3. **LTV:CAC Trend Line** - Tracks unit economics over time
4. **Cash Runway Gauge** - Visual runway indicator
5. **Revenue Mix Pie Chart** - Breakdown by product tier
6. **Burn Rate Trend** - Monthly burn with projections
7. **Customer Growth Chart** - Logo and revenue growth
8. **Scenario Comparison** - Side-by-side scenario outcomes

---

## MODEL BEST PRACTICES

1. **Color Coding**
   - Blue: Input cells (assumptions)
   - Black: Formulas
   - Green: Links from other sheets
   - Red: Important outputs/warnings

2. **Data Validation**
   - Input ranges for percentages
   - Drop-downs for scenarios
   - Error checking formulas

3. **Documentation**
   - Assumption notes
   - Formula explanations
   - Change log tracking

4. **Sensitivity Tables**
   - Two-way data tables
   - Scenario managers
   - Monte Carlo simulation ready

---

This structure provides a comprehensive financial model that can be built in Excel with full functionality for planning, analysis, and investor presentations.