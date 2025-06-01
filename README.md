# Ceding Foundation Website

A modern, responsive website for Ceding Foundation built with Next.js, TypeScript, and Tailwind CSS.

## About Ceding Foundation

Ceding Foundation is a nonprofit organization founded on September 20th, 2020, and registered on October 10th, 2021 by the Ghana Registrar Authority. Founded by Mr. Godfred Akwasi Frimpong and Mr. Johnson Mensah, our motto is "We Live to Serve and We Serve to Live."

Our mission is to empower orphaned children, the elderly, sick, and less privileged people through love, education, and support.

## Features

- ✅ Modern Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ Responsive design with CSS Grid and Flexbox
- ✅ SEO optimized with proper meta tags
- ✅ Mobile-friendly navigation with hamburger menu
- ✅ Contact form with client-side validation
- ✅ Leadership team showcase
- ✅ Image gallery
- ✅ Donation page with Mobile Money integration
- ✅ Smooth scrolling and hover effects
- ✅ Font Awesome icons integration

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS with custom properties + Tailwind CSS
- **Deployment**: Configured for static export

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ceding_foundation_website
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
```

This will create an optimized production build in the `out` folder, ready for static hosting.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Homepage
│   ├── leadership/
│   │   └── page.tsx         # Leadership team page
│   ├── gallery/
│   │   └── page.tsx         # Photo gallery page
│   └── donate/
│       └── page.tsx         # Donation page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Site footer
│   └── ContactForm.tsx      # Contact form component
public/
├── leaders/                 # Leadership team photos
├── images/                  # Site images and logo
└── ...

original_files/              # Backup of original HTML/CSS/JS files
```

## Pages

- **Home** (`/`) - Main landing page with hero, about, impact sections, and contact
- **Leadership** (`/leadership`) - Meet our team page with leadership profiles
- **Gallery** (`/gallery`) - Photo gallery showcasing our work
- **Donate** (`/donate`) - Donation page with Mobile Money instructions

## Customization

### Colors

The website uses CSS custom properties for easy theming. Update the color scheme in `src/app/globals.css`:

```css
:root {
  --primary-color: #2c5282;
  --secondary-color: #4299e1;
  --accent-color: #f6ad55;
  --text-color: #2d3748;
  --light-bg: #f7fafc;
  --dark-bg: #1a202c;
}
```

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file with your component
3. Update navigation links in `src/components/Header.tsx`

### Mobile Money Integration

The donation page includes instructions for Mobile Money donations. Update the phone numbers and details in `src/app/donate/page.tsx`.

## Contact Information

- **Phone**: +233 545256587 / +233 554508596
- **Email**: cedingfoundation@gmail.com

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## Support

If you encounter any issues or have questions, please contact us at cedingfoundation@gmail.com.
