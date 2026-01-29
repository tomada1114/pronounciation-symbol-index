# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev              # Start dev server
pnpm build            # Production build
pnpm test             # Run all tests (dot reporter)
pnpm test:watch       # Run tests in watch mode
pnpm vitest run app/domain/__tests__/helpers.test.ts  # Run single test file
pnpm lint             # ESLint with auto-fix
pnpm format           # Prettier formatting
pnpm typecheck        # TypeScript check (no emit)
```

## Architecture

Single-page Next.js 16 App Router application — a pronunciation symbol reference for American English (47 IPA phonemes). No API calls; all data is static and frozen.

### Layer Structure (Onion / DDD)

```
app/
├── domain/           # Pure business logic, types, immutable data
│   ├── types.ts      # Phoneme interface, type guards, branded types
│   ├── phonemes.ts   # 47 frozen phoneme objects (ALL_PHONEMES)
│   └── helpers.ts    # Pure functions: filtering, grouping, labeling
├── components/       # Client-side React components (presentation)
│   ├── TabBar.tsx    # Category tab navigation (4 tabs)
│   ├── SectionGroup.tsx  # Groups phonemes by subcategory
│   ├── PhonemeCard.tsx   # Expandable phoneme card
│   └── PhonemeDetail.tsx # Expanded card detail content
├── page.tsx          # Home page — integrates domain + components
├── layout.tsx        # Root layout with Noto Sans / Noto Sans JP fonts
└── globals.css       # Design tokens as CSS custom properties
```

### Key Patterns

- **Immutability everywhere**: `ALL_PHONEMES` is deeply `Object.freeze`d. State uses `new Set(prev)` to avoid mutation. Props use `readonly` and `ReadonlySet`.
- **CSS custom properties for theming**: Dark-only design system defined in `globals.css` (`--bg-primary`, `--text-primary`, `--accent-primary`, etc.). Components reference these via inline `style` with `var()`.
- **Bilingual labels**: `getSubcategoryLabel()` returns `{ ja, en }` pairs. Section headings display as `日本語（English）`.
- **Accessibility**: ARIA roles (`tablist`, `tab`, `tabpanel`), `aria-selected`, `aria-expanded` on all interactive elements.

### Data Model

4 categories with subcategories: consonant (24: plosive/fricative/affricate/nasal/liquid/glide), monophthong (11: front/central/back vowels), diphthong (5), r-colored (7).

## Testing

Vitest + React Testing Library + jsdom. Tests co-located in `__tests__/` directories at each level.

- **Domain tests**: Type guards, pure function behavior, immutability verification (frozen checks)
- **Component tests**: Rendering, user interactions via `userEvent`, ARIA attributes
- **Integration tests** (`app/__tests__/page.test.tsx`): Full page flow — tab switching, card expansion

Pattern: `afterEach(cleanup)`, `vi.fn()` for callbacks, `userEvent.setup()` for interactions.

## Code Style

- **Prettier**: no semicolons, single quotes, trailing commas, 100 char width
- **ESLint**: next/core-web-vitals + TypeScript + Prettier
- **Path alias**: `@/*` maps to project root
