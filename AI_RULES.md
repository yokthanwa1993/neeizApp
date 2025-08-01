# AI Development Rules for Gig Marketplace App

This document provides guidelines for AI developers working on this project. Adhering to these rules ensures consistency, maintainability, and adherence to the established architecture.

## Tech Stack Overview

The application is a full-stack TypeScript project built for web and mobile (via Capacitor).

-   **Frontend Framework**: React with Vite for a fast development experience.
-   **Language**: TypeScript is used for both the frontend and backend.
-   **UI Components**: Built with **shadcn/ui**, which uses Tailwind CSS for styling and Radix UI for accessibility primitives.
-   **Styling**: **Tailwind CSS** is the exclusive styling solution.
-   **Routing**: **React Router** (`react-router-dom`) is used for all client-side routing.
-   **Authentication & Backend**: **Firebase** (Authentication, Firestore) is the core backend service. An **Express.js** server acts as a middleware to handle complex authentication flows, especially for social logins.
-   **Mobile Wrapper**: **Capacitor** is used to build native iOS and Android versions from the web codebase.
-   **Social Login**: **LINE Login** is deeply integrated using the LINE Front-end Framework (LIFF).
-   **State Management**: React Context API for global state (e.g., auth) and **TanStack Query** for server state.
-   **Icons**: **Lucide React** is the designated icon library.

## Library Usage Guidelines

To maintain a clean and predictable codebase, please follow these rules for using specific libraries.

### 1. UI and Styling

-   **Components**: **ALWAYS** use **shadcn/ui** components from `@/components/ui` for all UI elements (Buttons, Cards, Inputs, etc.). Do not create custom components for things that already exist in the library.
-   **Styling**: **ONLY** use **Tailwind CSS** utility classes for styling. Do not write custom CSS files or use styled-components. For responsive design, use Tailwind's responsive modifiers (e.g., `md:`, `lg:`).
-   **Icons**: **ONLY** use icons from the **`lucide-react`** package. This ensures all icons have a consistent style.

### 2. State Management

-   **Global State**: For application-wide state like authentication status, use the **React Context API**. See `src/contexts/AuthContext.tsx` for an example.
-   **Server State**: For any data fetched from an API, **ALWAYS** use **TanStack Query (`@tanstack/react-query`)**. This handles caching, refetching, and loading/error states automatically. Do not use `useState` and `useEffect` for fetching data.

### 3. Forms

-   **Form Logic**: Use **`react-hook-form`** for managing all form state and validation.
-   **Validation**: Use **`zod`** to define validation schemas for your forms.
-   **Form UI**: Integrate `react-hook-form` with the shadcn/ui `Form` component (`@/components/ui/form.tsx`) for a seamless user experience.

### 4. Routing

-   **Navigation**: All client-side routes are managed by **`react-router-dom`**.
-   **Route Definitions**: Define all routes within the `src/App.tsx` file to keep them centralized.

### 5. Authentication & API

-   **Auth Flow**: The client should **NEVER** directly handle social login logic. The flow is:
    1.  Client gets an `idToken` from the social provider (e.g., LINE LIFF).
    2.  Client sends this `idToken` to our Express backend (`/api/auth/...`).
    3.  The backend verifies the token, creates/updates a user in Firebase, and returns a Firebase Custom Token.
    4.  The client uses this custom token to sign in with Firebase Auth.
-   **API Requests**: Use `axios` or the native `fetch` API for all communication with the backend.

### 6. Notifications

-   **Toasts**: For user feedback (e.g., "Success!", "Error!"), use the **`sonner`** library. Helper functions are available in `src/utils/toast.ts`.

By following these rules, we can ensure the project remains simple, elegant, and easy for any developer to contribute to.