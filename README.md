<div align="center">
  <img src="public/vite.svg" alt="VoteWise IQ Logo" width="120" height="120" />

  <h1 align="center">VoteWise IQ</h1>

  <p align="center">
    <strong>The AI-Powered Political Accountability Platform</strong>
    <br />
    Detect propaganda, decode political promises, and visualize true governmental impact.
  </p>

  <p align="center">
    <a href="https://votewise-iq-300010702663.us-central1.run.app"><strong>View Live Demo</strong></a>
    ·
    <a href="#features">Explore Features</a>
    ·
    <a href="#installation">Installation</a>
  </p>

  <p align="center">
    <img alt="React" src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" />
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-Strict-blue?style=for-the-badge&logo=typescript" />
    <img alt="Tailwind" src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwind-css" />
    <img alt="Gemini AI" src="https://img.shields.io/badge/Gemini_1.5_Flash-AI-FF6F00?style=for-the-badge&logo=google" />
    <img alt="Firebase" src="https://img.shields.io/badge/Firebase-Auth_&_DB-FFCA28?style=for-the-badge&logo=firebase" />
  </p>
</div>

## 🎯 Submission Overview

### **Chosen Vertical: Political Transparency & AI Governance**
VoteWise IQ addresses the global challenge of political misinformation and the lack of accountability in election manifestos.

### **Approach and Logic**
Our approach focuses on **objective linguistic deconstruction**. Rather than simple sentiment analysis, we use **LLM-driven Semantic Scrutiny**.
1. **Extraction:** The system extracts raw text from unstructured political manifestos.
2. **Decoding Logic:** Using Gemini 1.5 Flash, the text is audited against economic feasibility benchmarks. It specifically searches for "weasel words" vs "concrete metrics" (e.g., "we will improve" vs "we will allocate $50M").
3. **Sentiment & Manipulation Index:** The AI analyzes the rhetorical style to identify logical fallacies (ad hominem, slippery slope, appeal to emotion) and outputs a "Manipulation Index" score.

### **How the Solution Works**
- **Dynamic Routing:** A React-based SPA that uses Vite for ultra-fast HMR and deployment.
- **AI Processing:** A serverless-style integration with Google Generative AI ensures real-time feedback with zero infrastructure overhead.
- **Secure Persistence:** Firebase Firestore securely stores user-generated "Evaluation Frameworks" for future election cycles.

### **Assumptions Made**
1. **LLM Context:** We assume the LLM has up-to-date knowledge of general economic feasibility (e.g., inflation risks, budget constraints).
2. **Text Input:** We assume users paste text in English or common global languages supported by Gemini 1.5 Flash.
3. **Connectivity:** We assume a stable internet connection for real-time AI processing and Firebase authentication.

---

## ✨ Core Features

- 🧠 **Manifesto Decoder:** Paste any political promise or manifesto. The AI instantly separates concrete commitments from vague populist fluff, assigning scores for economic feasibility and identifying hidden costs.
- 📊 **Real-time Data Dashboard:** Compare historical budget allocations against actual reality using interactive, responsive charts.
- 🧪 **Decision Lab:** Build a personalized voting framework by selecting core issues, stripping away emotional bias to focus on track records and actionable policies.
- 🛡️ **Propaganda Detector:** Identify logical fallacies and fear-mongering tactics in live speeches.
- 🔒 **Secure Authentication:** Enterprise-grade security powered by Firebase Auth, fully configured with robust Error Boundaries.

## 🏗️ Architecture & Stack

- **Frontend:** React 19 (Strict Mode), TypeScript, Vite
- **Styling:** Tailwind CSS v4, Framer Motion (micro-animations)
- **AI Engine:** Google Generative AI (Gemini 1.5 Flash)
- **Backend/Auth:** Firebase (Authentication, Firestore)
- **Deployment:** Docker, Nginx, Google Cloud Run

## 🚀 Getting Started

### Prerequisites
- Node.js >= 20.0.0
- A Firebase Project (for Auth & Firestore)
- A Google Gemini API Key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/votewise-iq.git
cd votewise-iq
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add your credentials:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_GEMINI_API_KEY=your_gemini_key
```

4. Run the development server:
```bash
npm run dev
```

## 🐳 Docker Deployment

To build and run the production container locally:

```bash
docker build -t votewise-iq .
docker run -p 8080:8080 votewise-iq
```

## 🛡️ Senior Engineering Standards
This repository adheres to strict production standards:
* **Zero `any` Types:** 100% strict TypeScript interfaces for all API payloads and AI responses.
* **Resilient Parsing:** Custom robust JSON extraction for AI hallucination fallback.
* **Global Error Boundaries:** React 19 gracefully handles render failures without unmounting the app.
* **Semantic HTML:** Fully accessible `<main>` wrappers and `aria-label` tags for screen readers.

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
