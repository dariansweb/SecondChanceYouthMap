# ⚖️ Second Chance Youth Map (SCYM)

A modern toolkit for juvenile justice professionals — **intake**, **comparison**, **definitions**, and **clarity**, all united under one accessible, beautifully designed platform.

[🌐 Live Demo ➜](https://second-chance-youth-map.vercel.app/)  
[📂 GitHub Repo ➜](https://github.com/dariansweb/SecondChanceYouthMap)

---

## 🌟 What Is This?

**SCYM** — *Second Chance Youth Map* — is an open-source decision support platform for juvenile intake, assessment, and education.

It now features **seven key tools**:
1. 📝 **Intake Form** – A dynamic form replicating multi-state best practices  
2. 🧠 **Matrix Tool** – A comparison dashboard across 7 Southern states  
3. 📚 **Glossary** – A live dictionary of terms, programs, and policies used in the system
4. 📝 **Intake Prototype** - A full intake simulation based on cross-state form research. Tracks education flags, custody history, risk instruments, and support systems — all exportable as PDF.
5. 📈 **Insights Dashboard** - Live data visualizations from our state matrix and research — including diversion trends, risk tool consistency, IEP/truancy patterns,  intake recommendations, and policy confidence scores.
6. 🗣️ **Voices Directory**  -Real profiles of the people who guide youth through the system: intake officers, judges, educators, mental health staff, probation officers, advocates, residential teams, and reentry mentors — all linked to the data they influence.
7. 🧭 **Path to Help” Navigation** - A restructured experience to guide professionals, students, and agencies through role-specific insights, system touchpoints, and practical tools for every stage of the youth journey.

All designed for clarity, compassion, and true transparency.

---

## 🧭 Why Was It Built?

To help caseworkers, policymakers, and IT staff alike understand the **pathways youth walk** through the justice system — and to **make better decisions earlier**.

Research-driven and visually engaging, this project brings together real-world policy from:

- **Arkansas** – SAVRY risk assessments + 90-day treatment models  
- **Texas** – JCMS tools, diversion-first frameworks  
- **Missouri** – “Missouri Model” therapeutic care  
- **Louisiana** – Family team decision-making  
- **Oklahoma** – Statewide bed and risk data management  
- **Mississippi** – Diversion screening (YASI), informal adjustment stats  
- **Tennessee** – Child welfare integration, family-centered assessments  

---

## 🧩 Key Features

### 🔹 Intake Tool
- Step-by-step intake with live logic and state-by-state influence  
- Form data stored in memory via React Context  
- **NEW**: Dynamic prefill from completed flows  
- Generates downloadable intake PDF summaries  

### 🔹 Matrix Tool
- Interactive cards showing policy differences between states  
- Filters for states, sorting, decision type  
- Color-coded indicators for clarity and accessibility  
- Modal pop-ups for detailed comparison with hover-rich glossary terms  

### 🔹 Glossary of Terms
- Over 100 terms, program names, acronyms, and processes  
- Filterable and searchable  
- Includes categories, definitions, source links, and states (if applicable)  

---

## 🔊 Voices of the System

In addition to tools, SCYM honors the **people behind the process**.  
A full `/voices` directory includes real-world profiles for:

- 🛂 Intake Officers  
- ⚖️ Judges & Defense Attorneys  
- 🏫 Educators  
- 🤝 Advocates & Mentors  
- 🏠 Residential Staff  
- 💼 Workforce Mentors  
- 👨‍👩‍👧 Parents & Guardians  

Each voice includes their role in the system, where they appear in the timeline, and links to relevant data and glossary terms.  
More voices and categories are added regularly as part of the *“Path to Help”* initiative.

---

## 🎨 Design Matters

Every corner of this app — from matrix modals to intake inputs — was carefully crafted for:

- ⚡ Accessibility and responsiveness  
- 🌐 Clarity in navigation (persistent header, docs sidebar)  
- 🧾 Typography and layout that respects both desktop and mobile users  
- 🎓 Simplicity for new staff, depth for veteran caseworkers  

---

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/)  
- [Tailwind CSS 4](https://tailwindcss.com/)  
- [React Context API](https://reactjs.org/)  
- [pdf-lib](https://pdf-lib.js.org/)  
- [Vercel](https://vercel.com/)  

---

## 🧠 Behind the Scenes (Architecture)

- `mapFlowDataToJuvenile.ts` ➔ Maps incoming flow form data dynamically into the master intake fields
- `flowToJuvenileMapping.ts` ➔ Defines precise field-to-field mappings
- Dynamic JSON forms ➔ Flexible form steps, fields, and conditions without needing rebuilds
- Local Storage and Context Memory ➔ Intelligent prefill across multiple users and flows

This system ensures **future flows and forms can easily be added** with little to no extra React coding — just update the JSON and mapping file!

---

## 💡 Why Open Source?

Because civic tools belong to the people.

This project is [**fully open source** on GitHub](https://github.com/dariansweb/SecondChanceYouthMap) — made for remixing, repurposing, and reimagining by other states, civic hackers, public servants, students, or technologists.

> When we build in the open, we build trust.

---

## 🏛️ Created By

**Darian Ross** – IT Support, Arkansas DHS  
✍️ Designer • Developer • Researcher  
💡 Built as a civic-tech initiative, not an official DHS product.

---

## 📬 Want to Collaborate?

Let’s build something meaningful together.

- Juvenile justice professionals — feedback wanted!  
- State agencies — this can be adapted to your local needs.  
- Developers/designers — contribute and expand it!  

DMs open on LinkedIn. Let’s map second chances.

---

## 📄 License

MIT — free to use, fork, or adapt.

---

> “Youth enter the system at a crossroads. This tool helps ensure the path forward is navigated with clarity, compassion, and second chances.”
