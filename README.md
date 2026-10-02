# Nexora Academy — React frontend

Four pages based on the supplied Figma export, with Web Express branding: Home (`/`), Courses (`/courses`), Course Details (`/course?id=python`), My Learning (`/dashboard`). Built with React 19, TypeScript, CSS, and the Next-compatible Vinext routing layer. Images are extracted from the supplied .fig file.

## Run locally

Requires Node.js 22.13 or newer. Install dependencies using `npm install` (or pnpm with the included pnpm lockfile), then `npm run dev`. Run `npm run build` for the production bundle. This checkout is configured for Sites' managed runtime; for a standalone machine, run the execution-profile configuration described in `.sites-runtime` or use the portable setup scripts. The standard React source is in `components/learning/App.tsx`, routes in `app`, and course records in `lib/courses.ts`.

## What works

Course search, subject filters, sorting, individual course descriptions and syllabuses, keyboard-accessible tabs and accordions, preview enrollment, lesson preview dialogs, and completion tracking. Browser localStorage stores courses and progress under `nexalearn-progress-v1`. No authentication, checkout, or teaching videos are claimed to be implemented. Certificate previews are demos, not accredited records.

## Connect a Python backend later

Keep the React components and replace the local data operations behind `useLearning` with API calls. Suggested REST contract:

- `GET /api/courses` → course list, query/category/sort parameters
- `GET /api/courses/{id}` → course detail and modules
- `GET /api/me/enrollments` → enrolled course IDs
- `POST /api/enrollments` with `{courseId}` → enrollment record
- `GET /api/me/progress` → completed lesson IDs per course
- `POST /api/progress` with `{courseId, lessonId}` → updated progress

Implement those endpoints using FastAPI or Flask. Use stable lesson IDs instead of the demo lesson titles before production. Add authenticated sessions, CORS for the frontend origin, server-side authorization, input validation, payment-provider integration, and real lesson content. Never place API secrets in browser source. Keep the current demo status labels until those functions are implemented. There is no Python backend in this project.

Updated to the supplied PDF: navy/lime/coral styling, revised branding, full home-page sections, interactive preset coach, learning-path comparison and FAQ. Marketing figures and testimonials are reference design content. The coach uses local preset examples, not a live AI API.
