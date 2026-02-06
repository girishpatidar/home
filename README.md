# Academic Research Portfolio Website

A modern, interactive personal website for showcasing your hydrology and remote sensing research. Built with clean HTML, CSS, and JavaScript - perfect for hosting on GitHub Pages.

## 🌟 Features

- **Modern Design**: Elegant, professional academic aesthetic with smooth animations
- **Fully Responsive**: Works beautifully on desktop, tablet, and mobile devices
- **Interactive Elements**: Animated statistics, filterable publications, smooth scrolling
- **Fast Performance**: Optimized loading with lazy loading and efficient code
- **Accessible**: WCAG compliant with keyboard navigation support
- **Easy to Customize**: Well-organized code with clear comments

## 📁 File Structure

```
your-repository/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive functionality
├── README.md           # This file
├── your-photo.jpg      # Your profile photo
└── images/             # Folder for research images
    ├── research-1.jpg
    ├── research-2.jpg
    └── research-3.jpg
```

## 🚀 Quick Start

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Name it: `your-username.github.io` (replace `your-username` with your GitHub username)
4. Make it public
5. Initialize with README (optional)
6. Create repository

### 2. Upload Your Files

**Option A: Via GitHub Web Interface**
1. Click "Add file" → "Upload files"
2. Drag and drop all files (index.html, styles.css, script.js)
3. Commit changes

**Option B: Via Git Command Line**
```bash
git clone https://github.com/your-username/your-username.github.io.git
cd your-username.github.io
# Copy all website files here
git add .
git commit -m "Initial commit - Research portfolio"
git push origin main
```

### 3. Enable GitHub Pages

1. Go to repository Settings
2. Scroll to "Pages" section
3. Under "Source", select "main" branch
4. Click Save
5. Your site will be live at: `https://your-username.github.io`

## ✏️ Customization Guide

### Update Personal Information

1. **Replace all placeholder text** marked with `[Your Name]`, `[Your Field]`, etc.

2. **Add your photo**: 
   - Save your professional photo as `your-photo.jpg`
   - Upload to the root directory
   - Or update the image path in `index.html` line ~53

3. **Update research images**:
   - Create an `images` folder
   - Add your research images (research-1.jpg, research-2.jpg, etc.)
   - Update image paths in `index.html`

### Sections to Customize

#### Hero Section (Lines 29-72 in index.html)
```html
<h1 class="hero-title">
    <span class="title-line">Dr. John Smith</span>
    <span class="title-line">PhD</span>
</h1>
<p class="hero-subtitle">Hydrology & Remote Sensing Researcher</p>
```

#### About Section (Lines 77-153)
- Update your bio, research focus, and education
- Modify expertise tags to match your skills
- Update statistics (publications, citations, etc.)

#### Research Highlights (Lines 158-229)
- Add your 3 most important papers
- Include titles, descriptions, journal names
- Add DOI links and paper PDFs

#### Publications (Lines 234-328)
- List all your publications
- Use the filter categories: journal, conference, preprint
- Add abstracts and download links

#### Hobbies (Lines 333-361)
- Personalize your interests
- Change icons and descriptions

#### Contact (Lines 366-462)
- Update email, location, office info
- Add your social media links:
  - Google Scholar
  - ResearchGate
  - ORCID
  - LinkedIn
  - GitHub

### Color Scheme

Edit the CSS variables in `styles.css` (lines 6-13):

```css
:root {
    --primary-color: #1a5490;      /* Main brand color */
    --secondary-color: #c17817;    /* Accent color */
    --accent-color: #2d7a4c;       /* Additional accent */
}
```

### Fonts

The site uses:
- **Cormorant Garamond** (serif) for headings
- **Work Sans** (sans-serif) for body text

To change fonts, update line 7 in `index.html` and CSS variables in `styles.css`.

## 📧 Contact Form Setup

The contact form requires a backend service. Here are free options:

### Option 1: Formspree (Recommended)
1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form
3. Get your form endpoint
4. In `script.js`, uncomment lines 151-165 and add your endpoint

### Option 2: Netlify Forms
1. Deploy to Netlify instead of GitHub Pages
2. Add `netlify` attribute to form tag
3. Automatic form handling included

### Option 3: EmailJS
1. Sign up at [EmailJS.com](https://www.emailjs.com)
2. Configure email service
3. Use their JavaScript SDK

### Option 4: Simple mailto link
Replace the form with a large "Contact Me" button:
```html
<a href="mailto:your.email@university.edu" class="btn btn-primary">
    Send me an email
</a>
```

## 🎨 Adding Research Images

### Image Requirements
- **Profile photo**: 800x800px, square aspect ratio
- **Research images**: 1200x800px recommended
- **Format**: JPG or PNG
- **Size**: Compress to under 500KB each

### Free Image Resources
- [Unsplash](https://unsplash.com) - High-quality free photos
- [Pexels](https://pexels.com) - Free stock photos
- Your own research visualizations and satellite imagery

### Image Optimization
Use these free tools to compress images:
- [TinyPNG](https://tinypng.com)
- [Squoosh](https://squoosh.app)
- [ImageOptim](https://imageoptim.com) (Mac)

## 📊 Adding Publications

For each publication, use this template in `index.html`:

```html
<div class="publication-item" data-category="journal">
    <div class="pub-number">01</div>
    <div class="pub-content">
        <h3 class="pub-title">Your Paper Title</h3>
        <p class="pub-authors"><strong>Your Name</strong>, Co-Author A, Co-Author B</p>
        <p class="pub-venue">Journal Name, Vol XX, Pages XXX-XXX, Year</p>
        <p class="pub-abstract">Brief summary of the research...</p>
        <div class="pub-links">
            <a href="https://doi.org/..." class="pub-link">
                <svg>...</svg> PDF
            </a>
            <a href="https://doi.org/..." class="pub-link">
                <svg>...</svg> DOI
            </a>
        </div>
    </div>
</div>
```

Categories: `journal`, `conference`, `preprint`

## 🔧 Advanced Customizations

### Adding a Blog Section
Create a new section in `index.html`:
```html
<section id="blog" class="blog">
    <!-- Add blog posts here -->
</section>
```

### Google Analytics
Add before closing `</head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

### Adding a CV Download
Add a button in the hero section:
```html
<a href="your-cv.pdf" download class="btn btn-secondary">
    Download CV
</a>
```

### Dark Mode
Uncomment lines 344-360 in `script.js` to enable dark mode toggle.

## 🌐 Custom Domain (Optional)

To use your own domain (e.g., `www.yourname.com`):

1. Buy a domain from Namecheap, GoDaddy, or Google Domains
2. In GitHub repository settings → Pages → Custom domain
3. Enter your domain name
4. In your domain registrar's DNS settings, add:
   - A records pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - CNAME record: `www` → `your-username.github.io`

## 🐛 Troubleshooting

### Site not showing after push
- Wait 2-5 minutes for GitHub Pages to build
- Check Settings → Pages is enabled
- Verify files are in the main branch
- Check browser console for errors (F12)

### Images not loading
- Verify file paths match exactly (case-sensitive)
- Check image files are uploaded
- Ensure images are in correct format (jpg, png)

### Form not working
- The default form shows an alert - this is expected
- Set up a backend service (see Contact Form Setup)

### Mobile menu not working
- Clear browser cache
- Ensure script.js is loaded
- Check browser console for JavaScript errors

## 📱 Testing

Test your site on:
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Mobile devices (iOS Safari, Android Chrome)
- Different screen sizes using browser DevTools (F12 → Toggle device toolbar)

## 🔒 SEO & Accessibility

The template includes:
- ✅ Semantic HTML5
- ✅ ARIA labels
- ✅ Alt text for images (add your own descriptions)
- ✅ Keyboard navigation
- ✅ Fast loading times
- ✅ Mobile-first responsive design

### Add Meta Tags
Include in `<head>` section:
```html
<meta name="description" content="Dr. Your Name - Hydrology and Remote Sensing Researcher">
<meta name="keywords" content="hydrology, remote sensing, research, water resources">
<meta property="og:title" content="Dr. Your Name - Research Portfolio">
<meta property="og:description" content="Academic research in hydrology and remote sensing">
<meta property="og:image" content="your-photo.jpg">
```

## 📚 Resources

### Learning Resources
- [HTML Tutorial](https://www.w3schools.com/html/)
- [CSS Tutorial](https://www.w3schools.com/css/)
- [JavaScript Tutorial](https://javascript.info/)
- [GitHub Pages Guide](https://pages.github.com/)

### Design Inspiration
- [Academic Portfolio Examples](https://www.awwwards.com/websites/portfolio/)
- [Google Scholar Profiles](https://scholar.google.com)
- [ResearchGate Profiles](https://www.researchgate.net)

## 🤝 Support

If you need help:
1. Check the troubleshooting section above
2. Search GitHub Issues
3. Ask on [Stack Overflow](https://stackoverflow.com)
4. Consult [GitHub Pages documentation](https://docs.github.com/en/pages)

## 📝 License

This template is free to use for personal and academic purposes. No attribution required.

## 🎯 Next Steps

1. ✅ Clone/download all files
2. ✅ Customize personal information
3. ✅ Add your photo and research images
4. ✅ Update publications and research work
5. ✅ Test locally (open index.html in browser)
6. ✅ Push to GitHub
7. ✅ Enable GitHub Pages
8. ✅ Share your new website!

---

**Good luck with your research portfolio! 🚀**

For questions or improvements, feel free to open an issue or submit a pull request.
