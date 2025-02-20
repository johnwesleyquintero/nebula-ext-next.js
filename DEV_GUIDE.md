# Development Guide

## Project Structure

This is a Next.js project with the following structure:

```
nebula-ext-next.js/
├── src/
│   ├── app/         # App router pages and layouts
│   ├── components/  # Reusable React components
│   ├── pages/       # Pages router (if used)
│   ├── services/    # Backend services
│   ├── styles/      # CSS and styling
│   ├── types/       # TypeScript type definitions
│   └── utils/       # Utility functions
├── public/          # Static assets
└── package.json     # Project dependencies and scripts
```

## Running the Development Server

1. First, install all dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The development server will start at [http://localhost:3000](http://localhost:3000).

Note: This project uses the standard webpack builder for stable development. The development server should work reliably with the default configuration.

## Available Scripts

- `npm run dev` - Starts the development server with Turbopack
- `npm run build` - Creates a production build
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint for code linting

## Dependencies

The project uses:
- Next.js 15.1.7
- React 19
- TypeScript
- Tailwind CSS
- NextAuth.js for authentication

## Development Tips

1. Hot reloading is enabled by default - changes will reflect immediately in the browser
2. The project uses the new App Router structure in `src/app`
3. Tailwind CSS is configured for styling
4. TypeScript is set up for type safety