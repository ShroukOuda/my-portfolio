# 👩‍💻 Shrouk Ouda | Backend Engineer Portfolio

A sleek, modern portfolio website showcasing my expertise as a **Backend Developer** and **Software Engineer**. Built with **Angular 18** 

🌐 **Live Demo:** [shroukouda.github.io/my-portfolio/](https://shroukouda.github.io/my-portfolio/)

---


### 📋 Portfolio Sections
- **Home**: Hero section with animated greeting and typewriter effect
- **About**: Personal introduction and background information
- **Skills**: Comprehensive showcase of technical competencies with visual grid
- **Projects**: Portfolio of featured work with descriptions and live demos
- **Contact**: Contact form and social media links

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Angular 18
- **Language**: TypeScript 5.5+
- **Styling**: Tailwind CSS
- **Icons**: Lucide Angular / Font Awesome
- **Reactive Forms**: Angular Reactive Forms

### Development & Build
- **Build Tool**: Angular CLI & Vite
- **Package Manager**: npm
- **Testing**: Jasmine & Karma
- **Version Control**: Git
- **Deployment**: GitHub Pages

### Key Technologies
- **Zone.js**: Change detection and async operations
- **RxJS**: Reactive programming patterns
- **Angular Router**: Client-side navigation
- **Component Architecture**: Standalone components pattern
- **CSS Animations**: Keyframe animations & transitions

---

## 🚀 Getting Started

### Prerequisites
```bash
Node.js (v18 or higher)
npm (v9 or higher)
Angular CLI (v18+)
```

Install Angular CLI globally:
```bash
npm install -g @angular/cli
```

### Installation & Setup

1. **Clone the repository**:
```bash
   git clone https://github.com/ShroukOuda/my-portfolio.git
   cd my-portfolio
```

2. **Install dependencies**:
```bash
   npm install
```

3. **Start the development server**:
```bash
   ng serve
```
   
   Or using npm:
```bash
   npm start
```

4. **Open your browser**:
   Navigate to `http://localhost:4200/`
   
   The app will automatically reload when you modify source files.

### Build for Production
```bash
ng build --configuration production
```

Build artifacts will be stored in the `dist/` directory.

---

## 📂 Project Structure
```
my-portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/                 # Navigation header
│   │   │   └── social-links/           # Social media links
│   │   ├── pages/
│   │   │   ├── home/                   # Hero section with terminal
│   │   │   ├── about/                  # About me section
│   │   │   ├── skills/                 # Skills showcase
│   │   │   ├── projects/               # Projects portfolio
│   │   │   └── contact/                # Contact form
│   │   ├── models/
│   │   │   ├── iprojects.ts            # Project interface
│   │   │   └── iskills.ts              # Skills interface
│   │   ├── app.config.ts               # App configuration
│   │   ├── app.routes.ts               # Routing configuration
│   │   ├── app.ts                      # Root component
│   │   └── styles.css                  # Global styles
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── index.html                      # Main HTML file
│   ├── main.ts                         # Application entry point
│   └── styles.css                      # Global stylesheet
├── public/
│   ├── projects/                       # Project screenshots
│   ├── education/                      # Education images
│   └── favicon.ico
├── node_modules/                       # Dependencies
├── angular.json                        # Angular configuration
├── package.json                        # Project dependencies
├── tsconfig.json                       # TypeScript configuration
├── tailwind.config.js                  # Tailwind CSS configuration
└── README.md
```

---


## 🧩 Key Components

### Home Component (`src/app/pages/home/`)
- **Hero Section**: Large heading with gradient animation
- **Terminal Display**: Side-by-side layout with cycling terminal
- **Typewriter Effect**: Dynamic role animation
- **Call-to-Action**: "Let's Talk" and "Download Resume" buttons
- **Social Links**: GitHub, LinkedIn, Email with hover effects

### Header Component (`src/app/components/header/`)
- **Responsive Navigation**: Mobile-friendly menu
- **Active Link Highlighting**: Visual feedback for current page
- **Smooth Scrolling**: Animated transitions between sections
- **Theme Switcher**: Toggle between color schemes

### Skills Component (`src/app/pages/skills/`)
- **Technology Grid**: Categorized skill display
- **Icon Integration**: Visual representation of technologies
- **Responsive Layout**: Adapts to all screen sizes
- **Skill Categories**: Backend, Frontend, Database, DevOps

### Projects Component (`src/app/pages/projects/`)
- **Project Cards**: Visual showcase with images
- **Technology Tags**: Stack used for each project
- **Live Demo Links**: Direct links to deployed projects
- **Source Code Links**: GitHub repository access

### Contact Component (`src/app/pages/contact/`)
- **Contact Form**: Reactive form with validation
- **Direct Links**: Email and social media
- **Location Info**: Geographic information
- **Response Handling**: Form submission feedback

---

## 📈 Deployment

### GitHub Pages Deployment

1. **Build the project**:
```bash
   ng build --configuration production --base-href /my-portfolio/
```

2. **Deploy to GitHub Pages**:
```bash
   npx angular-cli-ghpages --dir=dist/my-portfolio/browser
```

### Automatic Deployment
Configure GitHub Actions for automatic deployment on push to main branch.

---

## 🔧 Configuration

### Theme Customization
Modify color variables in your CSS files to customize the theme.

### Routes Configuration
Update routes in `src/app/app.routes.ts`:
```typescript
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  // Add more routes
];
```


---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).


**Made with 💻 by Shrouk Ouda | Backend Engineer**
