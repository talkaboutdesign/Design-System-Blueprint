# Design System Blueprint

A template for building your own design system using React, TypeScript, and Tailwind CSS, built on top of [shadcn/ui](https://ui.shadcn.com).

## About

This project provides a starting point for creating your own design system. It leverages the power of shadcn/ui, which is not a traditional component library, but rather a collection of re-usable components that you can copy and paste into your apps.

### Why shadcn/ui?

- **Ownership**: You own the code. No more dependencies on component libraries.
- **Flexibility**: Copy, paste, and modify components to match your needs.
- **Accessibility**: Built with Radix UI primitives, ensuring accessibility.
- **Styling**: Uses Tailwind CSS for easy customization.
- **Dark Mode**: Includes dark mode support out of the box.

## Features

- 🚀 React + TypeScript + Vite
- 🎨 Tailwind CSS configuration
- 🌙 Dark mode support
- 📦 Example Button component
- 🔧 Ready-to-use development environment
- 🎯 Proper TypeScript configuration
- 📱 Responsive design ready

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Quick Start

```bash
# Create a new project
npm create vite@latest my-design-system -- --template [your-github-username]/design-system-blueprint

# Navigate to the project
cd my-design-system

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Project Structure

\`\`\`
src/
├── components/
│   ├── ui/           # Your UI components
│   │   └── button/   # Example button component
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── lib/
│   └── utils.ts      # Utility functions
└── styles/           # Global styles and Tailwind configuration
\`\`\`

## Adding Components

1. Visit [shadcn/ui](https://ui.shadcn.com/docs/components)
2. Choose a component you want to add
3. Create a new directory in `src/components/ui`
4. Copy the component implementation
5. Customize as needed

## Customization

- Modify `tailwind.config.js` to customize your design tokens
- Update global styles in `src/index.css`
- Customize components by editing their source code directly

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
