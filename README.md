# AI-CodeReviewer

**AI-CodeReviewer** is an AI-powered code review tool that accepts source code from a user and returns a detailed, actionable review using Google's Gemini model. The project is a full‑stack application with a React frontend and an Express backend that calls the @google/generative-ai client.

---

## Table of Contents

* [Overview](#overview)
* [Demo / Quick Start](#demo--quick-start)
* [Features](#features)
* [Repository Structure](#repository-structure)
* [Tech Stack](#tech-stack)
* [Prerequisites](#prerequisites)
* [Setup & Installation](#setup--installation)

  * [Backend](#backend)
  * [Frontend](#frontend)
* [API](#api)
* [Environment Variables](#environment-variables)
* [Security & Privacy Notes](#security--privacy-notes)
* [Development & Troubleshooting](#development--troubleshooting)
* [Future Improvements](#future-improvements)
* [Contributing](#contributing)
* [License](#license)

---

## Overview

This project demonstrates how to integrate a generative AI model (Gemini) with a simple developer tool workflow. Users paste or write code in the React UI and request a review. The backend forwards the code to the Google Generative AI client, applies a strict `systemInstruction` that guides the model to act as an expert JavaScript code reviewer, and returns formatted markdown feedback to the frontend.

## Demo / Quick Start

1. Create a `.env` file in the `Backend/` folder with your Google API key (see **Environment Variables** below).
2. Start the backend (port **5000**) and frontend (port **3000**).
3. Open `http://localhost:3000` in your browser, paste code on the left, click **Review**, and view AI-generated feedback on the right.

---

## Features

* Single-file paste-and-review workflow in the browser.
* Uses `@google/generative-ai` with a pre-configured system prompt tuned for JavaScript code review.
* Frontend renders the returned review as markdown (with syntax highlighting).
* Simple REST API (Express) for review requests.

---

## Repository Structure 

```
AI-CodeReviewer/
├─ Backend/
│  ├─ server.js            # backend entry: starts Express on port 5000
│  ├─ src/
│  │  ├─ app.js           # express app configuration
│  │  ├─ routes/ai.routes.js
│  │  ├─ controllers/ai.controller.js
│  │  └─ services/ai.service.js  # wrapper around @google/generative-ai
│  └─ package.json
├─ Frontend/
│  ├─ src/App.js          # React UI, axios POST to backend
│  └─ package.json
└─ README.md (this file)
```

---

## Tech Stack

* Frontend: React (react-scripts), react-simple-code-editor, react-markdown, rehype-highlight
* Backend: Node.js, Express, @google/generative-ai
* HTTP client: axios (frontend)

---

## Prerequisites

* Node.js (recommended >= 18) and npm
* A Google Generative AI API key (Gemini). The backend expects this in an environment variable described below.

---

## Setup & Installation

Follow these steps from the repository root.

### Backend

1. Open a terminal and `cd Backend`.
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in `Backend/` with the following content:

```env
GOOGLE_GEMINI_KEY=your_google_gemini_api_key_here
```

4. Start the backend server:

* Option A: run directly with Node:

```bash
node server.js
```

> Note: `Backend/package.json` in this repository does not define a `start` script. You can add one (recommended):

```json
"scripts": {
  "start": "node server.js"
}
```

Then run `npm start`.

The backend listens on port `5000` by default.

### Frontend

1. Open a new terminal and `cd Frontend`.
2. Install dependencies:

```bash
npm install
```

3. Start the React dev server:

```bash
npm start
```

The frontend runs on port `3000` and sends review requests to `http://localhost:5000/ai/get-review`.

---

## API

**POST** `/ai/get-review`

* Content-Type: `application/json`
* Body: `{ "code": "<source code string>" }`
* Response: plain text / markdown containing the AI review.

**Example using `curl`:**

```bash
curl -X POST http://localhost:5000/ai/get-review \
  -H 'Content-Type: application/json' \
  -d '{"code":"console.log(\"hello\")"}'
```

---

## Environment Variables

* `GOOGLE_GEMINI_KEY` — required. The key used by `@google/generative-ai` in `Backend/src/services/ai.service.js`.

Store this value in `Backend/.env` and **never** commit your `.env` to source control.

---

## Security & Privacy Notes

* The Google API key is sensitive. Do not publish it or commit it into Git history.
* The backend forwards any code you paste to the Google API. Do not paste private credentials, secrets, or PII in the code editor when using public/demo deployments.
* Be mindful of model costs and rate limits — repeated large requests to Gemini may incur charges.

---

## Development & Troubleshooting

* If the frontend shows `⚠️ Error: Could not fetch review.`, check that the backend is running on port `5000` and reachable from the frontend. If you run the frontend on a different host or port, update the axios URL in `Frontend/src/App.js`.
* If you get authentication errors from the Generative AI client, verify `GOOGLE_GEMINI_KEY` is set correctly and has access to the required Google API product.
* To change the model or system instruction, edit `Backend/src/services/ai.service.js` (the file that constructs the `GoogleGenerativeAI` client and sets `systemInstruction`).

---

## Future Improvements 

* Add a `start` script in `Backend/package.json` and a single root-level npm script that starts both servers concurrently for development.
* Add authentication if you want user-specific review history.
* Persist review results to a database (MongoDB/Postgres) and expose a history UI.
* Add rate-limiting and request-size validation on the backend.
* Add CI checks and tests around request/response shapes.

---

## Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Create a Pull Request

---

## License

Choose a license and add a `LICENSE` file (e.g., MIT). If you want, I can add one for you.

---

