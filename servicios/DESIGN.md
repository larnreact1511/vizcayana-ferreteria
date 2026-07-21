---
name: Vizcaya Enterprise
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#444650'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#757682'
  outline-variant: '#c5c6d2'
  surface-tint: '#435b9f'
  primary: '#00113a'
  on-primary: '#ffffff'
  primary-container: '#002366'
  on-primary-container: '#758dd5'
  inverse-primary: '#b3c5ff'
  secondary: '#a33e00'
  on-secondary: '#ffffff'
  secondary-container: '#fe6500'
  on-secondary-container: '#541d00'
  tertiary: '#001237'
  on-tertiary: '#ffffff'
  tertiary-container: '#002560'
  on-tertiary-container: '#5f8cf3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#00174a'
  on-primary-fixed-variant: '#2a4386'
  secondary-fixed: '#ffdbcd'
  secondary-fixed-dim: '#ffb596'
  on-secondary-fixed: '#360f00'
  on-secondary-fixed-variant: '#7c2e00'
  tertiary-fixed: '#dae2ff'
  tertiary-fixed-dim: '#b1c5ff'
  on-tertiary-fixed: '#001946'
  on-tertiary-fixed-variant: '#00419e'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
  surface-technical: '#F8FAFC'
  border-muted: '#E2E8F0'
  text-heading: '#0F172A'
  success-electric: '#10B981'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  container-max: 1280px
---

## Brand & Style

The design system is engineered to position the brand as a dominant leader in the electrical and engineering sector. It balances industrial strength with modern technological precision. The aesthetic is **Corporate / Modern**, characterized by a rigorous grid, professional density, and a "clean-room" technical atmosphere.

The target audience ranges from large-scale industrial contractors to residential developers who require reliability and expertise. The UI evokes confidence through a high-contrast palette, precise geometric typography, and a structured information hierarchy that prioritizes clarity and functional efficiency.

## Colors

This design system utilizes a high-contrast, technical palette. The **Deep Navy (#002366)** serves as the anchor, representing corporate stability and institutional knowledge. The **Vibrant Orange (#FF6600)** is used surgically as an "action" color, drawing the eye to critical conversion points and signaling energy/electricity.

To achieve the "Enterprise" look, we introduce a range of **Technical Grays** (Slate/Blue-grays) that provide a cooler, more sophisticated backdrop than standard neutrals. Surfaces should primarily use `surface-technical` to maintain a crisp, clean environment that highlights colorful product photography and technical diagrams.

## Typography

The typography strategy employs a pairing of two modern geometric classics. **Montserrat** is used for headings and display text to provide a bold, architectural feel that mirrors the physical strength of electrical infrastructure. Its geometric forms are highly legible and authoritative.

**Inter** is utilized for all body copy and UI labels. It is chosen for its exceptional clarity on digital screens and its neutral, systematic character. All uppercase labels should include slight letter-spacing (0.05em) to enhance readability in technical contexts.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop to maintain a structured, organized appearance consistent with engineering blueprints. A 12-column grid is used with a generous 24px gutter to ensure content breathes.

**Breakpoints:**
- **Desktop (1280px+):** 12 columns, 64px margins.
- **Tablet (768px - 1279px):** 8 columns, 32px margins.
- **Mobile (Below 768px):** 4 columns, 20px margins.

Spacing follows a strict 4px base unit. Vertical rhythm should be generous between major sections (80px - 120px) to maintain the "clean and modern" enterprise feel, preventing the information density typical of older industrial websites.

## Elevation & Depth

To maintain a sophisticated professional look, depth is achieved through **Tonal Layers** supplemented by **Ambient Shadows**. 

- **Level 0 (Base):** `surface-technical` (#F8FAFC).
- **Level 1 (Cards/Containers):** Pure White (#FFFFFF) with a very subtle, diffused shadow (0px 4px 20px rgba(0, 35, 102, 0.05)). The shadow is slightly tinted with the primary Navy to maintain color harmony.
- **Level 2 (Overlays/Dropdowns):** Pure White with a more defined shadow (0px 10px 30px rgba(0, 35, 102, 0.12)).

Outlines are used sparingly for interactive states, employing `border-muted` (#E2E8F0) to define boundaries without adding visual noise.

## Shapes

The design system uses a **Rounded (Level 2)** shape language. This specific radius (0.5rem / 8px) is the "sweet spot" between the harshness of industrial equipment and the approachability of modern software. It communicates precision without being cold.

- **Standard Elements (Buttons, Inputs):** 8px radius.
- **Large Containers (Cards, Modals):** 16px radius (rounded-lg).
- **Icons/Small Badges:** 4px radius (rounded-sm) or full pill-shape for status indicators.

## Components

### Buttons
- **Primary:** Solid `primary_color` (Navy) with white text. High-emphasis actions.
- **Secondary:** Solid `secondary_color` (Orange) with white text. Used for primary CTAs like "Contact" or "Buy".
- **Ghost:** `primary_color` border and text. Used for secondary navigation or "Read More".

### Input Fields
- White background, `border-muted` (1px solid), 8px radius.
- Focus state: `primary_color` 2px border with a subtle Navy glow.

### Cards
- White background, 16px corner radius, Level 1 shadow.
- Used for product categories and service highlights. Padding should be a minimum of 24px.

### Chips/Badges
- Small 4px radius or pill-shape.
- Use tinted backgrounds (e.g., light blue background with Navy text) for technical specifications or categories.

### Lists
- Use horizontal dividers (#E2E8F0) for data-heavy lists.
- Vertical alignment should be strict, with icon-led lists using the Orange accent for the icons to guide the eye.