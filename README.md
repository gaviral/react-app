# SIX Showcase

## Overview

SIX Showcase is a modern React application demonstrating component-based UI architecture for curated collections of images. This application implements a "SIX" component that displays a customizable title and up to six image "Picks" in a visually appealing grid layout.

## Features

### Core Functionality
- **Editable SIX Components**: Customize titles with intuitive edit functionality
- **Pick Management**: Add, view, and delete image picks with name metadata
- **Multiple Instances**: Support for multiple independent SIX components
- **Responsive Design**: Adapts gracefully to different screen sizes
- **State Persistence**: Local storage integration for session continuity

### User Experience
- **Rich Visual Presentation**: Clean grid layout with visual polish
- **Name Overlays**: Image names displayed on hover and as permanent overlays
- **Intuitive Controls**: Clear UI affordances for all interactive elements
- **Accessibility Support**: Keyboard navigation and ARIA attributes

### Developer Experience
- **Component Architecture**: Clean separation of concerns with reusable components
- **TypeScript Integration**: Full type safety throughout the codebase
- **CI/CD Pipeline**: Automated build and deployment workflow
- **Modern Tooling**: Built with Vite for optimal development experience

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: CSS with modern features (flexbox, grid, variables)
- **State Management**: React Hooks with localStorage persistence
- **Deployment**: GitHub Pages with CI/CD workflow

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/gaviral/react-app.git
cd react-app

# Install dependencies
npm install
# or
yarn
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:5173` to view the application.

### Building for Production

Create a production build:

```bash
npm run build
# or
yarn build
```

Preview the production build:

```bash
npm run preview
# or
yarn preview
```

## Architecture

The application follows a component-based architecture with the following key components:

- **Six Component**: Container component that manages title editing and holds Pick components
- **Pick Component**: Displays images and name metadata with interactive controls
- **App Component**: Orchestrates layout and manages multiple Six instances

### Data Flow

1. User interactions trigger state changes in the appropriate component
2. State changes propagate to child components via props
3. LocalStorage preserves state between sessions
4. Responsive layout adapts based on viewport dimensions

## Project Structure

```
react-app/
├── dist/              # Production build output
├── public/            # Static assets
├── src/
│   ├── assets/        # Images and other assets
│   ├── components/    # React components
│   │   ├── Six.tsx    # SIX container component
│   │   ├── Six.css
│   │   ├── Pick.tsx   # Pick item component
│   │   └── Pick.css
│   ├── App.tsx        # Main application component
│   ├── App.css        # Application styles
│   ├── main.tsx       # Application entry point
│   └── index.css      # Global styles
├── .gitignore
├── index.html         # HTML template
├── package.json       # Dependencies and scripts
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React team for the amazing framework
- Vite team for the excellent build tool
- Contributors to open source libraries used in this project
