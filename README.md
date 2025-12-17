# 🚚 Eshaan Logistics - Frontend

Professional logistics website built with Next.js 16, TypeScript, and Tailwind CSS.

## 📸 Preview

Full-page logistics website with 9 sections including hero banner, carousel, stats, services, and more.

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI + shadcn/ui
- **State:** React Hooks
- **Backend Integration:** REST API (Express.js + Supabase)

## 📁 Project Structure

```
frontend/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage with all sections
│   └── globals.css             # Global styles
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Navigation header
│   │   └── Footer.tsx          # Footer with links
│   ├── sections/
│   │   ├── HeroSection.tsx     # Main hero banner
│   │   ├── WhyChooseSection.tsx # Carousel with differentiators
│   │   ├── TrustedBySection.tsx # Company logos
│   │   ├── StatsSection.tsx     # Key statistics
│   │   ├── ServicesSection.tsx  # Service cards
│   │   ├── TestimonialsSection.tsx # Team/leadership
│   │   └── MapSection.tsx       # Pan-India coverage
│   ├── modals/
│   │   └── QuoteModal.tsx      # Quote request form
│   └── ui/
│       └── button.tsx          # Reusable button component
│
├── lib/
│   └── utils.ts                # Utility functions
│
├── public/
│   └── images/                 # Organized image assets
│       ├── logos/
│       ├── certifications/
│       ├── team/
│       └── trucks/
│
└── Configuration files...
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🎨 Features

### 1. Hero Section
- Large truck image with overlay text
- Call-to-action button
- Certification badges (ISO, IBA)

### 2. Why Choose Carousel
- 8-slide carousel
- Navigation arrows
- Slide counter (01/08)
- Large images with overlays

### 3. Trusted By
- Company logo grid
- Hover animations

### 4. Statistics
- Key metrics display
- Background text design

### 5. Services
- 4 service cards
- Hover effects

### 6. Testimonials
- Team member quotes
- Photo grid

### 7. Map Section
- Pan-India coverage visualization

### 8. Footer
- Company information
- Contact details
- Social links

### 9. Quote Modal
- Form with validation
- Backend integration
- Success/error messages

## 🔧 Configuration

### Environment Variables

```env
# API endpoint (required)
NEXT_PUBLIC_API_URL=https://your-backend-url.com

# Optional analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Tailwind Configuration

Colors are defined in `tailwind.config.ts`:
- Primary: `#D32F2F` (Red)
- Secondary: `#1565C0` (Blue)

### Image Optimization

Images are set to `unoptimized` for development. For production:

```js
// next.config.js
const nextConfig = {
  images: {
    unoptimized: false, // Enable optimization
  },
};
```

## 🌐 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in dashboard
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

## 🔗 Backend Integration

This frontend connects to an Express.js backend for quote submissions.

**API Endpoint:**
```
POST /api/quotes/submit
```

**Request:**
```json
{
  "name": "John Doe",
  "mobile_number": "9876543210",
  "service_type": "Domestic Long-Haul"
}
```

See backend repository for setup instructions.

## 👥 Team Collaboration

### Adding a Teammate

1. **Invite to GitHub**
```bash
# They clone the repo
git clone <repo-url>
cd frontend
npm install
```

2. **Share environment variables**
Send them your `.env.local` file securely

3. **Workflow**
```bash
git checkout -b feature/your-feature
# Make changes
git add .
git commit -m "Add: your feature"
git push origin feature/your-feature
# Create Pull Request
```

## 📝 Development Guidelines

### Component Creation

```tsx
// components/sections/YourSection.tsx
'use client'; // If using hooks/interactivity

export default function YourSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-10 py-20">
      {/* Your content */}
    </section>
  );
}
```

### Styling Conventions

- Use Tailwind utility classes
- Follow existing color scheme
- Maintain consistent spacing
- Mobile-first responsive design

### Code Standards

- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting (optional)
- Meaningful commit messages

## 🐛 Troubleshooting

### Issue: Images not showing

**Solution:** Check image paths
```tsx
// Correct path after reorganization
src="/images/logos/eshan-truck-1.png"
```

### Issue: Build errors

**Solution:** Clear cache
```bash
rm -rf .next
npm run build
```

### Issue: API connection fails

**Solution:** Check backend is running and URL is correct
```bash
# Backend should be on http://localhost:3001
curl http://localhost:3001/health
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/)
- [TypeScript](https://www.typescriptlang.org/)

## 📄 License

Proprietary - Eshaan Logistics

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request
5. Code review
6. Merge

---

**Built with ❤️ for Eshaan Logistics**

For questions or support, contact the development team.