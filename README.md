# Born2Fly Gymnastics Website

Official website for Born2Fly Gymnastics - specialist adaptive gymnastics services for schools across KwaZulu-Natal.

## About

Born2Fly brings adaptive gymnastics directly to schools, empowering children of all abilities through movement, play, and expert coaching. Our programs focus on what children CAN do, building confidence, coordination, and joy.

## Technology Stack

- **Framework**: Jekyll 4.x
- **Hosting**: GitHub Pages
- **Styling**: SCSS with mobile-first responsive design
- **Fonts**: Montserrat (headings) + Open Sans (body)
- **Forms**: Formspree for contact form
- **Deployment**: GitHub Actions

## Local Development

### Prerequisites

- Ruby 3.2+
- Bundler

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/bluntspoon/born2fly.com.git
   cd born2fly.com
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```

4. Open your browser to `http://localhost:4000`

### Building for Production

```bash
bundle exec jekyll build
```

The site will be built to the `_site` directory.

## Site Structure

```
born2fly.com/
├── _config.yml              # Site configuration
├── _data/                   # Data files (navigation, coaches, services)
├── _includes/               # Reusable components
├── _layouts/                # Page templates
├── _sass/                   # SCSS source files
├── assets/                  # Static assets (CSS, JS, images)
├── index.html               # Homepage
├── about.md                 # About page
├── services.md              # Services page
├── team.md                  # Team page
└── contact.md               # Contact page
```

## Configuration

### Formspree Setup

To enable the contact form:

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form ID
4. Add it to `_config.yml`:
   ```yaml
   formspree_id: "YOUR_FORM_ID"
   ```

### Custom Domain

To use a custom domain:

1. Create a `CNAME` file in the root directory with your domain name
2. Configure DNS with your domain provider
3. Update `url` in `_config.yml`

## Certifications

All coaches are certified by Gymnastics SA (Gymnastics South Africa) and hold enhanced background checks, first aid certifications, and specialist adaptive coaching training.

## Adding Content

### Adding a New Coach

Edit `_data/coaches.yml`:

```yaml
- name: Coach Name
  role: Role Title
  image: /assets/images/coach-name.jpg
  bio: "Biography text"
  specialties:
    - Specialty 1
    - Specialty 2
```

### Adding a New Service

Edit `_data/services.yml`:

```yaml
- title: Service Title
  icon: "🎯"
  description: "Service description"
  features:
    - Feature 1
    - Feature 2
```

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

### Manual Deployment

If needed, you can trigger a manual deployment from the Actions tab in GitHub.

## Design System

### Colors

- **Primary (Dark Blue)**: `#1a365d`
- **Accent (Red)**: `#e53e3e`
- **Off-white**: `#f7fafc`

### Typography

- **Headings**: Montserrat (700-800 weight)
- **Body**: Open Sans (400-600 weight)

### Breakpoints

- `sm`: 576px+
- `md`: 768px+
- `lg`: 992px+
- `xl`: 1200px+

## SEO

The site includes:
- Jekyll SEO Tag plugin for meta tags
- Schema.org structured data for local business
- Sitemap generation
- RSS feed
- Optimized page titles and descriptions

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2025 Born2Fly Gymnastics. All rights reserved.

## Contact

- **Website**: https://born2fly.com
- **Email**: info@born2fly.com
- **Phone**:
  - Coach Moses: +27 76 547 1668
  - Coach Aidan: +27 64 653 0036
