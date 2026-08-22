# OurHomeIndia 🏡
> Real Estate & Property Services Website for Jaitpur, New Delhi, India

A modern, responsive, multi-page website built with HTML, Tailwind CSS, and vanilla JavaScript following the Claude-inspired warm editorial aesthetic.

---

## 🚀 Live GitHub Pages Deployment Guide

This project is 100% static and pre-configured for GitHub Pages without requiring any build step or compilation.

### How to Enable on GitHub Pages:
1. Push this repository to GitHub.
2. In your GitHub repository, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
4. Choose the `main` (or `master`) branch and `/ (root)` folder, then click **Save**.
5. Your website will be live in ~1-2 minutes at `https://<username>.github.io/<repository-name>/`.

---

## 📁 Project Structure

```
OurHomeIndia/
├── .nojekyll                 # Ensures GitHub Pages serves assets directly
├── 404.html                  # Styled 404 error fallback
├── index.html                # Homepage (Hero search, Featured properties, USPs, Testimonials)
├── buy.html                  # Properties for Sale listing & multi-filter search
├── rent.html                 # Rental flats & commercial leasing listing
├── property-detail.html      # Dynamic property detail template with EMI calculator & gallery
├── about.html                # About Us, Mission, Leadership team in Jaitpur
├── contact.html              # Contact details, interactive form, embedded map & FAQ
├── post-property.html        # "List Your Property" portal for owners
├── css/
│   └── styles.css            # Claude design tokens (Cream, Coral, Dark Navy, Typography)
└── js/
    ├── properties-data.js    # Modular property listings database
    └── main.js               # Search engine, modals, notifications, form handlers
```

---

## 🛠️ How to Add or Edit Properties

All property data is stored in [`js/properties-data.js`](js/properties-data.js). You can add, edit, or remove listings without modifying any HTML files:

```javascript
{
  id: "prop-109",
  title: "New 3 BHK Floor in Jaitpur Extn",
  purpose: "buy", // "buy" or "rent"
  propertyType: "Builder Floor",
  price: 5500000,
  priceDisplay: "₹55 Lakhs",
  locality: "Jaitpur Extension",
  city: "New Delhi",
  bedrooms: 3,
  bathrooms: 2,
  areaSqFt: 1100,
  furnishing: "Semi-Furnished",
  images: ["https://..."],
  isFeatured: true,
  isVerified: true
}
```

---

## 📬 Contact & Support
- **Company**: OurHomeIndia
- **Email**: [contact@ourhomeindia.com](mailto:contact@ourhomeindia.com)
- **Location**: Jaitpur Main Road, New Delhi 110044, India
