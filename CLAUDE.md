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

Next.js 16 App Router application — a pronunciation symbol reference for American English (47 IPA phonemes). Swipe-based navigation with modal details. Data stored in localStorage for "difficult phonemes" bookmarking.

### Layer Structure (Onion / DDD)

```
app/
├── domain/           # Pure business logic, types, immutable data
│   ├── types.ts      # Phoneme, Category, Subcategory, LipShape, TongueRegion types
│   ├── phonemes.ts   # 47 frozen phoneme objects (ALL_PHONEMES)
│   ├── helpers.ts    # Filtering, grouping, label functions
│   └── bookmark.ts   # getPhonemesBySymbols() for bookmark filtering
├── hooks/            # Custom React hooks
│   ├── useDifficultPhonemes.ts  # localStorage sync with useSyncExternalStore
│   └── useScrollSnap.ts         # Swipe navigation with IntersectionObserver
├── components/       # Client-side React components (presentation)
│   ├── CategoryIndicator.tsx  # Category tabs (synced with swipe)
│   ├── SectionGroup.tsx       # Groups phonemes by subcategory
│   ├── PhonemeCard.tsx        # Phoneme card (tap to open modal)
│   ├── PhonemeModal.tsx       # Modal with portal + animations
│   ├── PhonemeDetail.tsx      # Detail content inside modal
│   ├── ArticulationTag.tsx    # Lip/tongue/voicing tags
│   ├── DetailSection.tsx      # Reusable detail section wrapper
│   └── BookmarkButton.tsx     # Star toggle for "difficult" bookmark
├── difficult/        # Difficult phonemes page
│   └── page.tsx      # Lists bookmarked phonemes
├── page.tsx          # Home page — swipe panels + modal
├── layout.tsx        # Root layout with Noto Sans / Noto Sans JP fonts
└── globals.css       # Design tokens + swipe/modal animations
```

### Routes

- `/` — Main phoneme index with swipe navigation between categories
- `/difficult` — "Difficult phonemes" list (bookmarked items)

### Key Patterns

- **Immutability**: `ALL_PHONEMES` is deeply `Object.freeze`d. State uses `new Set(prev)`. Props use `readonly`.
- **Structured articulation data**: `Articulation` contains `LipArticulation` (shape + description) and `TongueArticulation` (region + description).
- **Swipe navigation**: CSS scroll-snap (`swipe-container`, `swipe-panel`) + IntersectionObserver to sync tab indicator.
- **Modal with portal**: `PhonemeModal` uses `createPortal` to render outside component tree, with CSS keyframe animations.
- **localStorage sync**: `useDifficultPhonemes` uses `useSyncExternalStore` for cross-tab sync and SSR safety.
- **CSS custom properties**: Dark-only design in `globals.css`. Components use inline `style` with `var()`.
- **Bilingual labels**: `getSubcategoryLabel()`, `getLipShapeLabel()`, `getTongueRegionLabel()` return `{ ja, en }`.

### Data Model

4 categories: consonant (24), monophthong (11), diphthong (5), r-colored (7).

Type hierarchy:
```
Phoneme
├── symbol, displaySymbol
├── category: Category
├── subcategory: Subcategory
├── articulation: Articulation
│   ├── lips: LipArticulation { shape: LipShape, description }
│   ├── tongue: TongueArticulation { region: TongueRegion, description }
│   └── voicing?, articulationPoint?, openness?, movement?
├── exampleWord, elsaNotation, japaneseApprox
└── pronunciationGuide: { mechanism, comparison }
```

## Testing

Vitest + React Testing Library + jsdom. Tests co-located in `__tests__/` directories.

- **Domain tests**: Type guards, pure functions, immutability
- **Hook tests**: `useDifficultPhonemes`, `useScrollSnap` behavior
- **Component tests**: Rendering, interactions, ARIA attributes
- **Integration tests**: Full page flows

Pattern: `afterEach(cleanup)`, `vi.fn()` for callbacks, `userEvent.setup()` for interactions.

## Code Style

- **Prettier**: no semicolons, single quotes, trailing commas, 100 char width
- **ESLint**: next/core-web-vitals + TypeScript + Prettier
- **Path alias**: `@/*` maps to project root
