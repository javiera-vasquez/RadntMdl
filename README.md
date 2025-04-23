# Heating Modal Component

A modern, responsive UI component for configuring heating elements in planning applications. This component provides an intuitive interface for adding and configuring various types of radiators and heating elements.

![DDemo Time!](https://github.com/javiera-vasquez/RadntMdl/blob/main/ezgif-357c2e396fb44e.gif)

## Project Overview

This project implements a modal interface for adding and configuring various heating elements (radiators, floor heating, etc.) with the following features:
- Responsive design (mobile and desktop layouts)
- Accessible form controls with proper ARIA labels
- Dark mode support with automatic system preference detection
- Internationalization support (i18n) with German translations
- Clean visual hierarchy and intuitive UX
- Component-based architecture with TypeScript

## Technology Stack

- React 18+
- TypeScript 5
- Tailwind CSS v4
- shadcn/ui (UI component library)
- Radix UI (for accessible primitives)
- i18next (for internationalization)
- Vite (build tool)

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the development server:
   ```bash
   pnpm dev
   ```

### Building for Production
```bash
pnpm build
```

## Project Structure
```
src/
├── components/
│   ├── HeatingModal/           # Main modal component
│   │   ├── components/         # Sub-components
│   │   ├── context/           # Context providers
│   │   ├── types.ts           # Type definitions
│   │   └── registry.ts        # Form component registry
│   └── ui/                    # Reusable UI components
├── lib/
│   ├── i18n/                  # Internationalization
│   │   ├── de.ts             # German translations
│   └── utils.ts              # Utility functions
└── App.tsx                    # Main application component
```

## Features

### Modal Interface
- **Responsive Layout**:
  - Full-screen modal on mobile devices
  - Centered modal with max-width on desktop
  - Proper spacing and margins for both layouts
- **Theme Support**:
  - Dark mode and light mode support
  - Automatic system preference detection
  - Smooth theme transitions

### Heating Element Configuration
- **Multiple Element Types**:
  - Panel Radiators
  - Steel Cast Radiators
  - (Extensible for more types)

### Form Features
- **Dynamic Form Generation**: Create and configure heating elements with a flexible form system
- **Real-time Validation**: Input validation with immediate feedback
- **Circuit Selection**: Assign heating elements to specific circuits

### User Experience
- **Mobile Optimization**:
  - Full-screen modal on mobile
  - Touch-friendly controls
  - Accordion-based navigation on mobile
- **Desktop Enhancement**:
  - Two-column layout for better space utilization
  - Side-by-side type selection and configuration
  - Proper spacing and visual hierarchy
- **Theme Adaptability**:
  - Consistent UI in both light and dark modes
  - High contrast text and controls
  - Optimized color schemes for readability

### Internationalization
- Full German language support
- Translatable form labels and placeholders
- Extensible translation system

### Accessibility
- WCAG 2.1 compliant components
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management
- Color contrast compliance in both themes

## Recent Changes

### Theme System Implementation
- Added dark mode support with system preference detection
- Implemented smooth theme transitions
- Optimized color schemes for both modes
- Added high contrast text and controls

### Mobile Layout Improvements
- Added full-screen modal support for mobile devices
- Implemented proper spacing and margins for mobile view
- Added accordion-based navigation for mobile
- Improved touch targets and interaction areas

### Form Enhancements
- Added proper form validation
- Implemented circuit selection functionality
- Added dimension controls with validation
- Improved form field organization

### Internationalization
- Added German translations for all form elements
- Implemented translation system for dynamic content
- Added placeholder translations

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [i18next](https://www.i18next.com/) for internationalization support
- [Vite](https://vitejs.dev/) for the fast build tool
