# 🧭 Deep Research Outline  
**Voices of Juvenile Justice — A Framework for SCYM Tool Development**  
*Empowering those who decide the future of youth through structured, compassionate technology.*

---

## ⚙️ 1. Core Philosophy

### Why We're Doing This:
Because behind every decision to **divert**, **detain**, **petition**, or **commit**… there's a *voice*.

Those voices are real people — with limited tools, heavy caseloads, and uncertain rules.

**SCYM** is our offering to them — a decision support system grounded in compassion, data, and workflow clarity.

---

## 🧩 2. Data Domains from Research

### 🎙️ Voices (Decision-Making Roles)
- Law Enforcement  
- Intake Officers / Juvenile Probation  
- Prosecutors  
- Judges  
- Defense Attorneys  
- Guardians/Parents  
- Schools / Educational Liaisons  
- Victims  
- State Custody Agencies (e.g., DYS, DJJ, DCS)  
- Reentry Coordinators  
- Multidisciplinary Teams (MDTs)  

---

### 🛤️ System Decision Points
- Arrest vs. Citation  
- Detain vs. Release  
- Intake Screening / Risk Assessment  
- Informal Adjustment / Diversion vs. Petition  
- Detention Hearings  
- Adjudication  
- Disposition: Probation vs. Custody  
- Reentry Planning / Aftercare  

---

### 🧠 Tools & Instruments
- Risk/Needs Assessments: `YASI`, `SAVRY`, `YLS/CMI`, `CAT`, `RANA`  
- Mental Health Screens: `MAYSI-2`, `CAFAS`  
- Disposition Matrices  
- Detention RAIs  
- YES Plans, Probation Orders, Case Plans  
- Unified Digital Systems: `JCMS`, `JOLTS`, `JJIS`, `TFACTS`  

---

### 📚 Legal & Procedural Constraints
- Statutes barring low-risk youth commitment  
- Local diversion authority  
- Victim participation statutes  
- Education continuity mandates (IDEA, IEP transfer laws)  

---

### 📊 Workflow Enablers
- Statewide data systems  
- Notification/reminder automations  
- Pre-filled forms, decision checklists  
- Cross-agency data sharing and real-time visibility  

---

## 🧠 3. SCYM Architecture — Planned Modules

---

### 🧱 A. Voices Portal

A space for each role to have tools built specifically for their moment in the workflow.

#### Components:
- Role-based dashboards (e.g., Intake Officer View, Prosecutor View)  
- Checklist-based forms (decision factors, legal criteria, family input)  
- Risk tool inputs → Disposition matrix suggestions  
- Voice tags that track who made what call at each point  

---

### 🔀 B. Workflow Decision Trees

Automated flow engines based on jurisdiction, offense, and risk.

#### Phase Plans:
- [ ] Arkansas Intake → Diversion → Petition  
- [ ] Texas Risk Assessment + DRAI process  
- [ ] Visual maps of each critical decision  
- [ ] Build React-compatible JSON schema per node  

---

### 📜 C. Forms and Docs Generator

Auto-populate documents like diversion contracts, court notices, case plans.

#### Inputs:
- Youth data  
- Risk scores  
- Voice role  
- Chosen path (`divert`, `file petition`, `commit`)  

#### Outputs:
- Signed PDFs  
- Data export to state systems  
- Email alerts to next actor  

---

### 🕸️ D. Family & Victim Collaboration Layer

Bringing human empathy into structured decisions.

#### Features:
- Messaging module for scheduling team meetings  
- Voice logs to document parent/youth/victim feedback  
- Conditional visibility: data fields appear only if guardian consents  

---

### 🔎 E. Accountability & Equity Dashboard

Live metrics and bias detection tools.

#### Metrics:
- Race/gender disproportionality heatmaps  
- Diversion rates by offense and region  
- Override tracking (who bypassed the matrix?)  
- Feedback loop for policy and training refinements  

---

## 🧱 4. Build Plan for Phase 1

### 📍 Starting Point: Arkansas Intake → Diversion Workflow

Because Arkansas has:
- A clear policy against low-risk youth commitment  
- Statewide SAVRY + MAYSI-2 usage  
- Formal diversion agreements  
- Digital court intake database  
- Policy vision aligned with SCYM values  

---

### ✅ Step-by-Step Goals

#### 1. Model the Full Flow
```text
Intake Officer → Risk Assessment →
Informal Adjustment OR Petition →
Conditions (e.g., school, therapy, curfew) →
Outcome Logging
