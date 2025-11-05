# Design Guidelines: Cosmic Pizza & Donair Website Redesign

## Design Approach

**Selected Approach**: Reference-Based with modern restaurant aesthetics
- Primary Inspiration: Chipotle's clean interface + Sweetgreen's visual storytelling + modern food delivery apps
- Design Philosophy: Elevated casual dining - sophisticated yet approachable, emphasizing food quality and halal certification

## Core Design Elements

### Typography
- **Primary Font**: Inter or Poppins (Google Fonts) - clean, modern sans-serif
- **Display/Headers**: Font weight 700, sizes: text-4xl to text-6xl for heroes, text-2xl to text-3xl for section headers
- **Body Text**: Font weight 400-500, text-base to text-lg for readability
- **Accents**: Font weight 600 for CTAs and emphasis, text-sm for labels and captions
- **Hierarchy**: Large, bold headlines contrasted with generous whitespace and refined body copy

### Layout System
- **Spacing Units**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 (as in p-4, gap-8, my-12, py-20)
- **Container Width**: max-w-7xl for main content, max-w-6xl for text-heavy sections
- **Grid System**: 
  - Desktop: 3-4 column grids for menu items (grid-cols-3 lg:grid-cols-4)
  - Tablet: 2 columns (md:grid-cols-2)
  - Mobile: Single column stacking
- **Section Padding**: py-16 mobile, py-24 desktop for vertical rhythm

### Component Library

**Navigation**
- Fixed header with transparent-to-solid transition on scroll
- Logo left, horizontal menu center (Menu, Build Your Own, Locations, About, Contact)
- "Order Now" CTA button right side with distinctive treatment
- Mobile: Hamburger menu with full-screen overlay

**Hero Section**
- Full-width hero with high-quality pizza imagery background
- Height: 85vh for impactful first impression
- Overlay gradient for text readability
- Centered content: Large headline "Canada's Best Halal Pizza & Donair", subheading, prominent CTA
- Primary CTA button with blurred background backdrop-blur-sm

**Menu Cards**
- Product cards with:
  - High-quality food photography (square aspect ratio)
  - Product name (text-xl font-semibold)
  - Brief description (text-sm, muted text)
  - Price display (text-lg font-bold)
  - "Add to Order" button
- Hover state: Subtle lift effect (transform scale-105)
- Grid layout with consistent gap-6 spacing

**Feature Sections**
- Alternating 2-column layouts (60/40 split)
- Image side + content side pattern
- Content includes: headline, description, supporting points, CTA
- Use for: Halal certification, custom pizza builder promo, catering services

**Pizza Builder Interface** (Custom Pizza page)
- Step indicator progress bar at top
- Large central area for pizza visual preview
- Side panel or bottom panel for step controls
- Steps: Size → Crust → Sauce → Toppings → Review
- Running price calculator visible throughout
- Toppings as selectable chips/tags with visual feedback

**Location Finder**
- Search input with location icon
- Results as list cards with: store name, address, hours, "Order from Here" button
- Optional: Embedded map integration

**Footer**
- 4-column layout: About, Quick Links, Locations, Connect
- Newsletter signup form
- Social media icons
- Bottom bar: Copyright, legal links
- Generous py-12 padding

### Animations
- Minimal, purposeful animations only
- Scroll-triggered fade-ins for sections (once)
- Smooth transitions for hover states (duration-300)
- No parallax, no excessive scroll effects

## Images

**Hero Image**
- Large, appetizing hero image of signature pizza or donair
- Professional food photography style
- Warm lighting, close-up showing texture and ingredients
- Dimensions: Minimum 1920x1080, optimized for web

**Menu Item Images**
- Consistent square format (1:1 aspect ratio) for all products
- Each specialty pizza photographed from above at 45-degree angle
- Consistent lighting and background (light surface or dark surface - maintain consistency)
- Minimum 800x800px per image

**Section Feature Images**
- Halal certification section: Clean image of halal ingredients or certification badge
- Custom pizza section: Hands adding toppings or pizza being made
- Catering section: Beautifully arranged pizza spread or event setup
- 1200x800px landscape orientation

**Ingredient Showcase**
- Individual ingredient photography on clean backgrounds
- Used in custom pizza builder for visual selection
- 400x400px per ingredient

## Page-Specific Guidelines

**Homepage** (6-7 sections):
1. Hero with main value proposition
2. "Why Cosmic" - 3-column feature grid (100% Halal, Fresh Ingredients, 20+ Specialties)
3. Featured Specialty Pizzas slider/grid (4-6 items)
4. Custom Pizza Builder promotion (image + content split)
5. Locations finder section
6. Catering/Franchising dual CTA cards
7. Footer

**Menu Page**:
- Category tabs/pills at top (Specialty Pizzas, Create Your Own, Extras, Combos)
- Grid display of items with filter options
- Sticky "View Order" button bottom right when items added

**Build Your Own Page**:
- Immersive full-page experience
- Visual pizza preview dominates (left 60%)
- Configuration panel (right 40%)
- Mobile: Pizza preview collapses to top

**About Page**:
- Brand story with image gallery
- Halal commitment section with certification details
- Values/quality promise
- Team/franchise information

**Contact/Locations**:
- Store locator search prominent
- List/map toggle view
- Individual store details with hours, phone, directions

## Visual Treatment Notes

- Emphasize food photography - make pizza look irresistible
- Use generous whitespace to feel upscale despite fast-casual positioning
- Halal certification badge/indicator visible throughout
- Price transparency - always show pricing clearly
- Mobile-first approach for ordering flow
- Accessibility: High contrast text, focus states, ARIA labels for interactive elements