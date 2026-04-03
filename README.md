# 📋 Hastebin App

A modern, fast, and elegant pastebin application built with Vue 3, TypeScript, and Tailwind CSS. Share code snippets, text, and documents with clean URLs and a beautiful interface.

## ✨ Features

- 🚀 **Fast & Lightweight** - Built with Vue 3 and Vite for optimal performance
- 📝 **Code Editor** - Monaco-style editor with line numbers and syntax highlighting
- 🔗 **Clean URLs** - Share with simple URLs like `/abc123`
- ⌨️ **Keyboard Shortcuts** - Quick actions with familiar shortcuts
- 📱 **Responsive Design** - Works perfectly on desktop and mobile
- 🎨 **Modern UI** - Clean interface built with Tailwind CSS
- 🔒 **Read-only Views** - Shared pastes are automatically read-only

## 🎮 Keyboard Shortcuts

| Shortcut       | Action                      |
| -------------- | --------------------------- |
| `Cmd/Ctrl + S` | Save current paste          |
| `Cmd/Ctrl + B` | Create new paste bin        |
| `Tab`          | Insert 4 spaces (in editor) |

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd hastebin-app

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The app will be available at `http://localhost:5173`

## 🛠️ Development

### Project Structure

```
src/
├── App.vue              # Main application component
├── apiRequest.ts        # API client for backend communication
├── main.ts             # Application entry point
├── styles.css          # Global styles
├── assets/
│   └── components/     # Reusable Vue components
│       ├── ButtonGroup.vue
│       ├── InputGroup.vue
│       └── LineNumbers.vue
└── __tests__/          # Test files
    └── App.spec.ts
```

### Available Scripts

```bash
# Development
pnpm dev              # Start dev server with hot reload
pnpm build            # Build for production
pnpm preview          # Preview production build

# Testing & Quality
pnpm test:unit        # Run unit tests with Vitest
pnpm lint             # Run ESLint and Oxlint
pnpm format           # Format code with Prettier
pnpm type-check       # TypeScript type checking
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_API_URL=http://localhost:3000/api
```

### API Endpoints

The app expects the following API endpoints:

- `GET /paste/:id` - Retrieve a paste by ID
- `POST /paste` - Create a new paste

#### Request/Response Types

```typescript
// Create paste request
interface PasteRequest {
  content: string
  language?: string
  author?: string
}

// Paste response
interface PasteResponse {
  id: string
  content: string
  language?: string
  author?: string
  createdAt: string
}
```

## 🏗️ Tech Stack

- **Framework**: Vue 3 (Composition API)
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Testing**: Vitest + Vue Test Utils
- **Linting**: ESLint + Oxlint
- **Formatting**: Prettier

## 📱 Usage

1. **Creating a Paste**:
   - Visit the homepage (`/`)
   - Type or paste your content
   - Optionally add language and author metadata
   - Press `Cmd/Ctrl + S` to save
   - Get a shareable URL like `/abc123`

2. **Viewing a Paste**:
   - Visit any paste URL (e.g., `/abc123`)
   - Content is automatically read-only
   - Use `Cmd/Ctrl + N` to create a new paste

3. **Starting Fresh**:
   - Press `Cmd/Ctrl + N` from anywhere in the app
   - Clears content and returns to edit mode

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Vue 3](https://vuejs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Powered by [Vite](https://vitejs.dev/)

---

Made with ❤️ for the developer community
