# Organo Biotas Website

A comprehensive, modern React-based website for Organo Biotas - Premium Aquaculture Solutions. This interactive website provides detailed information about the company, market opportunities, products, case studies, and more.

## Features

- **React-Based Application** - Modern, component-based architecture for easy maintenance and expansion
- **Interactive Features**:
  - Contact form with validation
  - Product modals with detailed information
  - Smooth scrolling navigation with active section highlighting
  - Mobile-responsive navigation menu
  - Dynamic content rendering
- **Modern, Professional Design** - Clean layout with teal/blue color scheme matching the company's branding
- **Comprehensive Content** - All sections from the presentation materials included:
  - Executive Summary (Business model, vision, mission, focus areas)
  - Market Opportunity (Aquaculture in India, gaps, solutions)
  - Marine Diseases Risks (DIV-1 and LSNV viruses)
  - Areas of Concern & Key Applications
  - Product Information (ASTANANO and HYDRO HERBS) with interactive modals
  - Case Study (Bhimavaram Farmer Success)
  - Partnership Information (Nature Agro Product)
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **Sticky Navigation** - Easy navigation between sections with active state tracking
- **Expandable Structure** - Easy to add new sections or content in the future

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Icons** - Icon library for UI elements
- **CSS3** - Custom styling with CSS variables

## Project Structure

```
organobiotas-website/
├── public/
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── ExecutiveSummary.jsx
│   │   ├── MarketOpportunity.jsx
│   │   ├── MarineDiseases.jsx
│   │   ├── AreasOfConcern.jsx
│   │   ├── Products.jsx
│   │   ├── CaseStudy.jsx
│   │   ├── Partnership.jsx
│   │   ├── Contact.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Modal.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   The application will be available at `http://localhost:3000`

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder, ready to be deployed to any static hosting service.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Sections

1. **Hero Section** - Main introduction with company tagline
2. **Executive Summary** - Business overview, vision, mission, and focus areas
3. **Market Opportunity** - Aquaculture statistics, gaps, and solutions
4. **Marine Diseases Risks** - Information about DIV-1 and LSNV viruses
5. **Areas of Concern & Key Applications** - Detailed concerns and solutions
6. **Products** - ASTANANO and HYDRO HERBS product information with interactive modals
7. **Case Study** - Bhimavaram farmer success story with process steps
8. **Partnership** - Information about Nature Agro Product partnership
9. **Contact** - Contact information and interactive contact form

## Interactive Features

### Contact Form
- Form validation
- Success/error messaging
- Email, phone, and message fields

### Product Modals
- Click "Learn More" on any product card to see detailed information
- Modal can be closed by clicking outside, pressing Escape, or clicking the close button

### Navigation
- Active section highlighting based on scroll position
- Smooth scrolling to sections
- Mobile-responsive hamburger menu

## Adding New Content

The website is designed to be easily expandable. To add new sections:

1. **Create a new component:**
   - Create a new file in `src/components/`
   - Follow the existing component patterns
   - Export the component

2. **Add to App.jsx:**
   - Import the new component
   - Add it to the App component

3. **Add navigation link:**
   - Update `Navigation.jsx` to include the new section
   - Add the section ID to the scroll detection logic

4. **Style the new section:**
   - Add CSS to `src/index.css` following existing patterns
   - Use the established color variables from `:root`
   - Ensure responsive design with media queries

## Color Scheme

- Primary Teal: `#008B8B`
- Light Teal: `#20B2AA`
- Dark Teal: `#006666`
- Accent Blue: `#4682B4`
- Light Blue: `#87CEEB`

## Browser Compatibility

Works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Deployment

### Deploy to Vercel/Netlify

1. Push your code to GitHub
2. Connect your repository to Vercel or Netlify
3. The platform will automatically detect Vite and build your app

### Deploy to Traditional Hosting

1. Run `npm run build`
2. Upload the contents of the `dist` folder to your web server
3. Configure your server to serve `index.html` for all routes

## Future Enhancements

The structure is designed to easily accommodate:
- Additional product pages
- More case studies
- Blog/news section
- Image galleries
- Backend API integration for contact form
- Multi-language support
- User authentication
- Admin dashboard

## Development Notes

- The contact form currently simulates submission. To connect to a backend, update the `handleSubmit` function in `ContactForm.jsx`
- Product modals can be extended to include images, videos, or additional interactive content
- The navigation active state is calculated based on scroll position - adjust the offset in `Navigation.jsx` if needed
