# Ai-CodeReviewer

**AI-Powered Code Review Tool** built with React.js, Express.js, Node.js, and powered by **Google Gemini API 2.0** — designed to provide fast, insightful, and context-aware code feedback as if from a senior developer.

---

##  Table of Contents

- [Overview](#overview)  
- [Key Features](#key-features)  
- [Tech Stack](#tech-stack)  
- [Live Demo / Screenshots](#live-demo--screenshots)  
- [Architecture](#architecture)  
- [Setup & Installation](#setup--installation)  
- [Usage](#usage)  
- [Future Improvements](#future-improvements)  
- [Why It Matters](#why-it-matters)  
- [License](#license)  

---

##  Overview

Ai-CodeReviewer simplifies and streamlines the code review process by leveraging Google’s advanced LLM, Gemini API 2.0. From individual developers preparing for interviews to teams maintaining code quality, this tool delivers high-quality, markdown-formatted feedback instantly.

---

##  Key Features

-  **Instant AI-Powered Reviews** — Submit code snippets and receive detailed feedback styled like a senior engineer’s review.
-  **Real-Time Syntax Highlighting** — Clean, readable feedback through integrated Markdown and syntax-highlighting.
-  **Modern Frontend UI** — Built with React and code editor components for seamless user experience.
-  **Robust Backend** — Node.js + Express routes manage AI calls securely with environment-based configurations.
-  **Prompt Engineering** — Carefully crafted system prompts simulate a seasoned reviewer, focusing on performance, best practices, security, and readability.
-  **Loading & Error Handling UX** — Clear UI indicators during processing with graceful fallback on errors.

---

##  Tech Stack

| Layer      | Technologies & Libraries                                                                 |
|------------|------------------------------------------------------------------------------------------|
| **Frontend** | React.js, `react-simple-code-editor`, Prism.js (syntax highlighting), React-Markdown, Axios |
| **Backend**  | Node.js, Express.js, dotenv (configuration), Google Generative AI (`@google/generative-ai`) |
| **AI Integration** | Google Gemini API 2.0 (e.g., `gemini-2.0-flash` model)                                 |
| **Utilities** | Markdown rendering, loading states, robust error handling                              |

---

##  Live Demo / Screenshots 

> Add links or markdown-embedded images showcasing the UI—for example, editor interface, review output, or loading state visuals.

---

##  Architecture

```text
[ User Input (Code) ]
          ↓
   React Frontend
     (Code Editor)
          ↓
 Axios POST to
  /ai/get-review
          ↓
Node.js + Express Server
          ↓
Send prompt & code to
 Google Gemini API 2.0
          ↓
 Gemini returns feedback (Markdown)
          ↓
  Frontend renders using
React-Markdown + Syntax Highlighting
```



## Setup & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Gautam-gunjal/Ai-CodeReviewer.git
cd Ai-CodeReviewer
```

### 2. Backend Setup
```bash
cd Backend
npm install
```

- Create a `.env` file containing:
```env
GEMINI_API_KEY=your_google_gemini_api_key
```

- Start the backend server:
```bash
node server.js
```

### 3. Frontend Setup
```bash
cd Frontend
npm install
npm start
```

- The app will run at [http://localhost:3000](http://localhost:3000) (or as configured).

  ## Usage
- Navigate to the frontend.  
- Paste or write your code into the editor.  
- Click **“Review Code”**.  
- View AI-generated feedback below, formatted with syntax highlighting and markdown.  

---

## Future Improvements
- **Support for multiple languages** (e.g., Python, Java, C++)  
- **Review history & export** (e.g., save as PDF)  
- **User authentication** (JWT, OAuth) for personalized experiences  
- **Selectable review depth** (from quick suggestions to deep analysis)  
- **Integration with GitHub/GitLab** (automate pre-PR reviews)  

---

## Why It Matters
This project showcases how AI can augment developer workflows, delivering rapid, quality feedback while saving time and encouraging best practices. It demonstrates:

- Practical **LLM integration** for real-world developer tools.  
- Thoughtful **prompt engineering** to customize AI tone and output.  
- Friendly, responsive UX design prioritizing usability and clarity.  

Ideal for portfolios, interviews, and highlighting your ability to build AI-driven applications end-to-end.  

---

## License
This project is open-sourced under the **MIT License**. Feel free to use, modify, and share!  

---

Made with ❤️ using **React.js, Node.js, Express.js, and Google Gemini API 2.0**.

