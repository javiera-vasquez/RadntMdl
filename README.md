# Heating Modal Component

A modern, responsive UI component for configuring heating elements in planning applications.

## Project Overview

This project implements a modal interface for adding and configuring various heating elements (radiators, floor heating, etc.) with the following features:
- Responsive design (mobile and desktop layouts)
- Accessible form controls
- Clean visual hierarchy and intuitive UX
- Component-based architecture

## Technology Stack

- React 18
- TypeScript
- Tailwind CSS v4
- shadcn/ui (UI component library)
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
├── components/     # Reusable UI components
├── lib/           # Utility functions and helpers
├── styles/        # Global styles and Tailwind configuration
└── App.tsx        # Main application component
```

## Features
- **Dynamic Form Generation**: Create and configure heating elements with a flexible form system
- **Real-time Validation**: Input validation with immediate feedback
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Theme Support**: Light and dark mode compatibility
- **Accessibility**: WCAG 2.1 compliant components

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
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the fast build tool
