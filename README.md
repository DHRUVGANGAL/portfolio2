# Portfolio Website - React Vite Implementation

This is a modern React implementation of Dhruv Gangal's portfolio website built with Vite.

## Setup Instructions

### Prerequisites
- Node.js (v16 or newer)
- npm or yarn

### Step 1: Create a new Vite project
```bash
npm create vite@latest dhruv-portfolio -- --template react
cd dhruv-portfolio
```

### Step 2: Install dependencies
```bash
npm install
```

### Step 3: Set up the project structure
Create the following folders:
- `src/components`
- `public/images`

### Step 4: Copy assets
1. Copy all your image files to the `public/images` directory
2. Place your resume PDF in the `public` directory (named "Black White Minimalist CV Resume.pdf")

### Step 5: Copy the source files
Copy all the component files from this package to their respective locations in the project structure.

### Step 6: Start the development server
```bash
npm run dev
```

The application will start on http://localhost:5173

### Step 7: Build for production
When you're ready to deploy:
```bash
npm run build
```

This will create a `dist` folder with optimized production files that you can deploy to any static hosting service like GitHub Pages, Netlify, Vercel, etc.

## Project Features

- **Responsive Design**: Works on all screen sizes with a mobile-friendly menu
- **Interactive Elements**: Tab navigation, "See More" portfolio functionality
- **Smooth Scrolling**: Enhanced navigation with smooth scrolling to sections
- **Contact Form**: Functional contact form with validation
- **Modern Architecture**: Component-based structure for better maintainability

## File Structure

- `src/components/` - Contains all React components
  - `Header.jsx` - Navigation and hero section
  - `About.jsx` - About section with tabbed content
  - `Services.jsx` - Services section
  - `Portfolio.jsx` - Projects showcase with "See More" functionality
  - `Contact.jsx` - Contact form and social links
- `src/App.jsx` - Main application component
- `src/index.css` - Global styles
- `public/` - Static assets like images and resume

## Customization

To customize the website:
1. Edit component content in the respective files
2. Modify styles in `index.css`
3. Update project images in the `public/images` directory
4. Replace the resume PDF in the `public` directory# portfolio2
