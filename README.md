Image-to-Prompt Generator

Project Description
This is a modern web application that allows users to upload an image and automatically generate structured, detailed prompts suitable for AI art models (e.g., Midjourney, Stable Diffusion, DALL-E). The system leverages Ollama for AI vision and text generation, providing a seamless backend for creative prompt generation.

Features
- Image Upload: Drag-and-drop or file selection for image submission.
- AI Prompt Generation: Automatically extracts image descriptions and generates structured art prompts.
- Structured JSON Output: Returns JSON with keys: title, concept, visual_elements.
- TypeScript & React: Fully typed frontend with reusable components.
- Clipboard Copy: Copy generated prompts to clipboard with one click.
- Error Handling & Retry: Robust backend with retries for connection issues.

Tech Stack
- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Backend: Node.js, Express.js, Ollama API
- AI Models: llama3.1 (text) and llava (vision)
- Linting: ESLint, TypeScript checks

Installation & Setup

1. Clone the repository
git clone [YOUR_REPO_URL]
cd [PROJECT_FOLDER]

2. Install dependencies
cd frontend
npm install
# or
yarn install

cd ../backend
npm install
# or
yarn install

3. Configure Environment Variables
Frontend (.env.local):
NEXT_PUBLIC_API_URL=http://localhost:4000

Backend (.env):
PORT=4000
OLLAMA_URL=http://localhost:11434/api/generate
TEXT_MODEL=llama3.1
VISION_MODEL=llava
MAX_TOKENS=400

4. Pull the Ollama Vision Model
➜  ~ ollama pull llava

5. Run the backend
cd backend
npm run dev
# or
yarn dev

6. Run the frontend
cd frontend
npm run dev
# or
yarn dev

The app will be available at http://localhost:3000.

API Usage (Backend)
Endpoint: POST /generate-prompt
Body: FormData with key image (file)
Response:
{
  "title": "A catchy, evocative title for the artwork",
  "concept": "One-sentence high-level concept",
  "visual_elements": [
    "Detailed description 1",
    "Detailed description 2",
    "..."
  ]
}

Notes:
- Handles JSON parsing errors gracefully.
- Retries on connection failure (up to 3 times).

Key Files
- services/aiAgent.js — Main AI integration service using Ollama.
- src/hooks/useImageToPrompt.ts — Frontend hook for image upload & prompt handling.
- components/PromptDisplay.tsx — Displays structured JSON prompts with copy functionality.
- pages/index.tsx — Main page with image upload interface.

Troubleshooting
- Type Errors in Frontend: Ensure UseImageToPromptReturn defines prompt: GeneratePromptResponse[].
- JSON Parsing Errors: If AI model returns invalid JSON, the backend will return { error: "...", raw: "..." }.
- Ollama Connection Issues: Check Ollama server is running and model is pulled (llava).

License
MIT License © [Your Name]
