# Angular Film Collection

A modern, responsive web application for browsing, searching, and managing your favorite films.

## 📋 Project Overview

This is an Angular Film Collection Application created as part of the **Angular Introduction Task** from [RS School](https://rs.school/) – a free, community-driven educational platform for learning JavaScript and web development.

**Task Details:** [View on GitHub](https://github.com/rolling-scopes-school/tasks/blob/master/angular/tasks/angular-intro-task/README.md)

## ✨ Features

- 🔍 **Search & Filter** – Find films by title or genre
- ❤️ **Favorites Management** – Add and remove films from your personal favorites list
- 📄 **Detailed View** – View comprehensive information about each film
- 🌓 **Dark Mode Support** – Comfortable viewing in any lighting condition
- 📱 **Responsive Design** – Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Modern Technology Stack** – Built with latest Angular features and best practices
- 🧭 **Breadcrumbs Navigation** – Easy navigation tracking
- 🎨 **Beautiful UI** – Clean and intuitive user interface with smooth animations

## 🛠️ Technologies Used

- **Angular** – Modern web framework
- **TypeScript** – Type-safe JavaScript
- **Angular Signals** – Reactive state management
- **Angular Router** – Client-side routing
- **SCSS** – Advanced styling with variables and mixins
- **Material Symbols** – Icon library

## 📦 Installation

### Prerequisites

- Node.js
- npm
- Angular CLI

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/solosoft2000/angular-film-collection.git
   cd angular-film-collection
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   ng serve
   ```

4. **Open in browser**
   Navigate to `http://localhost:4200/` in your web browser

The application will automatically reload when you make changes to the source files.

## 🚀 Development

### Project Structure

```
src/
├── app/
│   ├── core/
│   │   ├── models/          # Data models and interfaces
│   │   └── services/        # Application services
│   ├── features/
│   │   ├── catalog/         # Films catalog page
│   │   ├── film-details/    # Film details page
│   │   ├── about/           # About page
│   │   └── not-found/       # 404 page
│   ├── layout/
│   │   ├── breadcrumbs/     # Breadcrumb navigation
│   │   ├── footer/          # Application footer
│   │   └── header/          # Application header
│   ├── shared/
│   │   ├── pipes/           # Custom pipes
│   │   └── directives/      # Custom directives
│   └── app.routes.ts        # Application routing configuration
└── styles.scss              # Global styles and variables
```

### Key Commands

| Command | Description |
|---------|-------------|
| `ng serve` | Start development server |
| `ng build` | Build for production |
| `ng lint` | Lint code |

### Available Scripts

```bash
# Development
npm start

# Build for production
npm run build
```

## 📚 Learning Objectives

Through this project, the following Angular concepts are demonstrated:

- ✅ Building standalone Angular components
- ✅ Working with Angular Signals for state management
- ✅ Implementing client-side routing
- ✅ Managing application state with computed signals
- ✅ Using Angular pipes for data transformation
- ✅ Implementing search and filter functionality
- ✅ Lazy loading components
- ✅ Working with route resolvers

## 👨‍💻 Author

**Eugene Solomonik**

- GitHub: [@solosoft2000](https://github.com/solosoft2000)
- RS School: [Angular Introduction Task](https://github.com/rolling-scopes-school/tasks/blob/master/angular/tasks/angular-intro-task/README.md)

## 🙏 Acknowledgments

- [RS School](https://rs.school/) for the learning opportunity
- [Angular Team](https://angular.dev/) for the amazing framework
- [Material Symbols](https://fonts.google.com/icons) for beautiful icons
