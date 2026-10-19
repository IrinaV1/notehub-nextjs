NoteHub

<p align="center">
  <img src="public/notehub-logo.png" alt="NoteHub logo" width="100" />
</p>

<h3 align="center">Your personal space for notes and ideas</h3>

<p align="center">
  A personal notes management application built with Next.js, React and TypeScript.
</p>

<p align="center">
  <a href="https://09-auth-one-lake.vercel.app/">
    <strong>Live Demo</strong>
  </a>
  &nbsp; · &nbsp;
  <a href="https://github.com/IrinaV1/notehub-nextjs">
    <strong>GitHub Repository</strong>
  </a>
</p>

Preview

<!-- Add screenshots of your application to public/screenshots/ -->

<p align="center">
  <img src="public/screenshots/home.png" alt="NoteHub home page" width="800" />
</p>

<p align="center">
  <em>NoteHub — personal notes management application.</em>
</p>

Features

Authentication — user registration, login and logout.

Protected Routes — access control for private pages.

Notes Management — browse, create and delete personal notes.

User Profile — view profile information and update your username.

Session Management — check authentication status and maintain user sessions.

Responsive UI — a user interface designed for different screen sizes.

Tech Stack

<p align="center">
  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  </a>
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </a>
  <a href="https://axios-http.com/">
    <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
  </a>
  <a href="https://zustand.docs.pmnd.rs/">
    <img src="https://img.shields.io/badge/Zustand-443E38?style=for-the-badge" alt="Zustand" />
  </a>
  <a href="https://tanstack.com/query/latest">
    <img src="https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" alt="TanStack Query" />
  </a>
</p>

Architecture Highlights

Next.js App Router for file-based routing.

Server and Client Components.

Separate API modules for client-side and server-side requests.

Axios instance for centralized HTTP configuration.

Zustand for global authentication state.

Cookie-based session handling.

Route protection using Next.js Proxy.

TypeScript for type safety.

Getting Started

Prerequisites

Node.js

npm

Access to the application's API

Installation

Clone the repository:

git clone https://github.com/IrinaV1/notehub-nextjs.git

Navigate to the project directory:

cd notehub-nextjs

Install dependencies:

npm install

Create a .env.local file in the project root and configure the required environment variables:

NEXT_PUBLIC_API_URL=http://localhost:3000

Use the correct API URL for your environment. Do not commit environment files containing secrets.

Start the development server:

npm run dev

Open http://localhost:3000 in your browser.

Project Structure

notehub-nextjs/
├── app/
│   ├── (auth routes)/
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (private routes)/
│   │   ├── profile/
│   │   └── notes/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AuthNavigation/
│   └── AuthProvider/
├── lib/
│   ├── api/
│   │   ├── api.ts
│   │   ├── clientApi.ts
│   │   └── serverApi.ts
│   └── store/
│       └── authStore.ts
├── public/
│   ├── notehub-logo.png
│   └── screenshots/
├── types/
└── proxy.ts

The structure above highlights the main application modules. Adjust it to match the actual repository.

Live Demo

Explore the deployed application:

Open NoteHub

Future Improvements

Search and filter notes.

Add note editing and categorization.

Improve accessibility and responsive design.

Add automated tests.

Author

Irina V.

GitHub: @IrinaV1

