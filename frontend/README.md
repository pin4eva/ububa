# Ububa Technology Website

A modern, responsive website for Ububa Technology - IT Consulting and Computer Training company.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **React**: 19
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Animations**: AOS (Animate On Scroll), Animate.css
- **Carousel**: Swiper
- **Forms**: React Hook Form
- **Language**: TypeScript 5

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pin4eva/ububa.git
cd ububa/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   ├── loading.tsx         # Loading UI
│   ├── error.tsx           # Error boundary
│   ├── not-found.tsx       # 404 page
│   ├── demo/               # Demo page (GraphQL test)
│   └── training/           # Training pages
│       ├── page.tsx        # Training index
│       └── register/       # Registration form
├── components/
│   ├── home/               # Home page components
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── TeamSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ContactSection.tsx
│   ├── shared/             # Shared components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── FrontLayout.tsx
│   └── providers/          # React context providers
│       ├── Providers.tsx
│       └── NProgressProvider.tsx
├── lib/                    # Utilities and configurations
│   ├── apollo-client.ts    # Apollo Client setup
│   └── queries/            # GraphQL queries
├── data/                   # Static data files
├── interface/              # TypeScript interfaces
└── public/                 # Static assets
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features

- ✅ **Modern UI** - Clean, responsive design with Tailwind CSS
- ✅ **Server Components** - Optimal performance with React Server Components
- ✅ **Animations** - Smooth scroll animations with AOS
- ✅ **Contact Form** - GraphQL-powered contact form
- ✅ **Training Registration** - Course registration system
- ✅ **SEO Optimized** - Metadata API for better SEO
- ✅ **Type Safe** - Full TypeScript support
- ✅ **Fast Loading** - Turbopack for instant HMR

## Backend Separation

The backend (GraphQL API, MongoDB) has been separated from this project. Reference code is available in the `_backend-reference` folder for setting up a standalone backend service.

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | GraphQL API endpoint | `http://localhost:4000/graphql` |

## Upgrade from Next.js 12

This project was upgraded from Next.js 12 to Next.js 15. Key changes include:

### Breaking Changes Addressed

1. **Pages Router → App Router**
   - Migrated from `pages/` to `app/` directory
   - Replaced `getServerSideProps` with Server Components
   - Updated `next/head` to metadata API

2. **Removed API Routes**
   - GraphQL API moved to separate backend
   - API routes removed from Next.js project

3. **Component Updates**
   - Added `'use client'` directive for client components
   - Replaced `useRouter` with `usePathname`
   - Removed nested `<a>` tags from `<Link>` components
   - Updated `<Image>` to use `fill` prop instead of `layout="fill"`

4. **Styling Migration**
   - Replaced Bootstrap + SCSS with Tailwind CSS
   - Replaced Font Awesome with Lucide React icons
   - Custom component styles converted to Tailwind utilities

### Dependencies Removed

- `apollo-server-micro`, `apollo-server-core`
- `mongoose`, `@typegoose/typegoose`
- `type-graphql`, `reflect-metadata`
- `class-validator`
- `bootstrap`, `sass`
- `@fortawesome/fontawesome-free`

### Dependencies Added

- `tailwindcss`, `autoprefixer`, `postcss`
- `lucide-react`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Website**: [ububatech.org](https://ububatech.org)
- **Email**: ububa.tech@gmail.com
- **Phone**: +234 706 227 5085
- **Location**: Victoria Plaza, Rumuodara Junction, Port Harcourt, Nigeria

---

© 2024 Ububa Technologies. All rights reserved.
