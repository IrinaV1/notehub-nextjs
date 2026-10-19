# NoteHub

### Your personal space for notes and ideas

A personal note management application built with Next.js, React, and TypeScript.

[**Live Demo**](https://09-auth-one-lake.vercel.app/) · [**GitHub Repository**](https://github.com/IrinaV1/notehub-nextjs)

## Tech Stack

<p align="left">
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

## Overview

NoteHub is a web application for managing personal notes. It provides user authentication, protected pages, profile management, and note management functionality.

The project demonstrates practical experience with modern React development, Next.js App Router, API integration, and client-side state management.

## Features

- **Authentication** — user registration, sign-in, and sign-out.
- **Protected Routes** — access control for private pages.
- **Notes Management** — browse, create, and delete personal notes.
- **User Profile** — view profile information and update the username.
- **Session Management** — check authentication status and maintain user sessions.
- **Responsive UI** — an interface designed for different screen sizes.

## Architecture Highlights

- **Next.js App Router** for file-based routing.
- **Server and Client Components** for separating server-side and client-side responsibilities.
- **Separate API modules** for client-side and server-side requests.
- **Axios instance** for centralized HTTP configuration.
- **Zustand** for global authentication state.
- **Cookie-based session handling** for authentication.
- **Route protection using Next.js Proxy**.
- **TypeScript** for type safety and maintainable code.

## Getting Started

### Prerequisites

- Node.js
- npm
- Access to the application's API

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/IrinaV1/notehub-nextjs.git
   ```

2. Navigate to the project directory:

   ```bash
   cd notehub-nextjs
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env.local` file in the project root and configure the API URL:

   ```env
   NEXT_PUBLIC_API_URL=your_api_url
   ```

   Replace `your_api_url` with the actual API URL required by the application.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Future Improvements

- Add search and filtering for notes.
- Implement note editing and categorization.
- Improve accessibility and responsive design.
- Add automated tests.
- Improve loading, empty, and error states.

## Live Demo

Explore the deployed application:

[**Open NoteHub**](https://09-auth-one-lake.vercel.app/)

## Author

**Irina V.**

[GitHub Profile](https://github.com/IrinaV1)

---

*Built as a personal project to practice modern frontend development with Next.js and TypeScript.*



