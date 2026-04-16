# ICU Zambia - Group Website Project

Welcome to the ICU Zambia Website Development project! This repository contains the source code for the Information and Communication University website.

## 👥 Roles & Responsibilities

To ensure smooth collaboration and prevent merge conflicts, the project is divided into **8 standardized roles**. Each is responsible for a specific area of the codebase.

| Role | Responsibility | Primary Files/Folders |
| :--- | :--- | :--- |
| **Home Page Lead** | Home page content, hierarchy, and structure. | `index.html` |
| **About Page Architect** | University history, faculty profiles, and campus life. | `about.html` |
| **Admissions Specialist** | Requirements, tuition data, and application steps. | `admissions.html` |
| **Academic Manager** | Degre lists, program details, and course catalog. | `programs.html` |
| **Communication Coordinator** | Contact forms, location maps, and social media links. | `contact.html` |
| **Brand & UI Developer** | Global CSS, themes, layout grid, and branding. | `css/style.css` |
| **Interaction Engineer** | JavaScript logic, scroll effects, and animations. | `js/script.js` |
| **Asset Specialist** | Imagery, icons, and original site reference. | `images/`, `icuwebsite.html` |

---

## Antigravity (AI) Instructions

Every student should use **Antigravity** (the AI assistant) to help with coding, bug fixing, and documentation. However, to maintain project integrity, the following rules are strictly enforced:

### Strict Constraints for the AI
1. **NO Browser Previews**: The AI must **never** run `open_browser_url` or `read_browser_page`. Students should preview their work locally in their own browsers.
2. **NO Git Commits**: The AI must **never** perform `git commit` or `git push`. All version control actions must be done manually by the student.
3. **Role Enforcement**: The AI is ONLY allowed to modify the files assigned to your specific role. 

---

## 📝 How to Prompt Antigravity

When you start a session with Antigravity, **you must copy and paste the following prompt** to set the correct context for your role. 

### THE MASTER PROMPT (Copy this first!):

> "I am working on the ICU Zambia project. My assigned role is **[INSERT YOUR ROLE NAME]**. 
> 
> **YOUR CONSTRAINTS:**
> 1. You are ONLY allowed to make changes to: **[INSERT YOUR PRIMARY FILES]**.
> 2. You MUST NOT run any browser preview tools (no Chrome/Browser tools).
> 3. You MUST NOT commit any changes to Git. I will handle all commits manually.
> 4. If I ask you to modify a file outside my responsibility, you must warn me and refuse.
> 
> Please confirm you understand these roles and constraints before we begin."

---

## 🚀 Getting Started

1. **Clone the Repo**: `git clone [repository-url]`
2. **Locate your File**: Find the file assigned to your role in the table above.
3. **Prompt the AI**: Use the Master Prompt above.
4. **Develop**: Make your changes with the help of Antigravity.
5. **Preview**: Open your HTML files directly in your browser.
6. **Commit**: `git add .`, `git commit -m "Your descriptive message"`, `git push`.

---

## 📂 Project Structure
```text
icuzambiawebsite/
├── css/             # Global Styling (Owned by Brand & UI Developer)
├── js/              # Interactivity (Owned by Interaction Engineer)
├── images/          # Assets (Owned by Asset Specialist)
├── index.html       # Home Page (Owned by Home Page Lead)
├── about.html       # About Page (Owned by About Page Architect)
├── programs.html    # Academic Page (Owned by Academic Manager)
├── admissions.html  # Admissions Page (Owned by Admissions Specialist)
├── contact.html     # Contact Page (Owned by Communication Coordinator)
└── icuwebsite.html  # Reference File (Owned by Asset Specialist)
```

---

