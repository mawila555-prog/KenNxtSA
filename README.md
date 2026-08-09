# 🎧 Ken NXT SA — DJ Website

A modern, responsive DJ website for **Ken NXT SA**, a Cape Town-based DJ and music curator.

> **Bringing the vibe. Creating the moment.**

The website is designed around a dark/purple visual identity and showcases Ken NXT SA's music styles, DJ services, booking information and Cape Town location.

---

## 🌍 Website

**Ken NXT SA**
Cape Town, South Africa

### Music

* 🎵 Amapiano
* 🎵 Deep House
* 🎵 Afro House
* 🎵 R&B

### Events

* 🎧 Clubs
* ◈ Markets
* 🔊 Big Sound
* ▣ Weekends
* 🥂 Lounges
* 🎉 Private Events
* 🤝 Brand / Corporate Events

---

# 📁 Project Structure

```text
ken-nxt-sa/
│
├── index.html
├── styles.css
├── script.js
│
├── ken-nxt-poster.jpg
│
└── README.md
```

---

# 🧱 Main Files

## `index.html`

Contains the website structure and content.

It includes:

* Navigation
* Hero section
* About section
* Music genres
* DJ services
* Event types
* Booking section
* WhatsApp booking form
* Cape Town map
* Footer
* SEO metadata
* Social sharing metadata
* Structured data for search engines

---

## `styles.css`

Contains the complete visual design.

Features include:

* Dark/purple DJ aesthetic
* Responsive desktop design
* Tablet layout
* Advanced mobile layout
* Genre thumbnails
* Event thumbnails
* Hover effects
* Glass-style cards
* Gradient effects
* Animated purple glow
* Scroll reveal styling
* Booking form styling
* Mobile navigation styling
* Floating WhatsApp button
* Google Maps styling
* Accessibility support
* Reduced-motion support

---

## `script.js`

Controls the interactive parts of the website.

Features include:

* 📱 Mobile navigation
* 🍔 Mobile menu toggle
* 🔗 Smooth scrolling
* 📍 Active navigation highlighting
* 📅 Booking date validation
* 💬 WhatsApp booking generation
* ✨ Scroll reveal animations
* 💜 Button effects
* 📲 Floating WhatsApp interaction
* 📆 Automatic copyright year
* ⌨️ Escape-key navigation closing
* 📝 Booking form validation
* 🔔 Form feedback messages

---

# 💬 WhatsApp Booking System

The website uses WhatsApp instead of requiring a backend booking system.

Current WhatsApp number:

```text
072 230 1683
```

International format used by the website:

```text
27722301683
```

When someone completes the booking form, the website automatically creates a WhatsApp message containing:

```text
Name
Event Type
Event Date
Event Location
Message
```

The customer is then redirected to WhatsApp with the enquiry ready to send.

---

# 📋 Booking Form

The current booking form collects:

### Your Name

Customer's name.

### Event Type

Available options:

* Club
* Lounge
* Private Event
* Market
* Brand / Corporate
* Other

### Event Date

Past dates are automatically disabled.

### Event Location

Venue or city.

### Message

Additional information about the event.

---

# 🎨 Design

The website keeps the original Ken NXT SA visual identity:

### Primary background

```text
#08050d
```

### Purple

```text
#9b5cff
```

### Light purple

```text
#c58cff
```

### Fonts

The website uses:

* **Bebas Neue** — headings
* **Caveat** — handwritten/accent text
* **Inter** — body text and UI

Fonts are loaded from Google Fonts.

---

# 🖼️ Images

The website currently uses:

```text
ken-nxt-poster.jpg
```

for the main Ken NXT SA promotional image.

Genre and event cards currently use remote image URLs.

Genre categories:

```text
Amapiano
Deep House
Afro House
R&B
```

Event categories:

```text
Clubs
Markets
Big Sound
Weekends
```

## Recommended future improvement

For production, replace the remote thumbnails with properly licensed local images.

Recommended structure:

```text
images/
│
├── amapiano.jpg
├── deep-house.jpg
├── afro-house.jpg
├── rnb.jpg
│
├── clubs.jpg
├── markets.jpg
├── big-sound.jpg
└── weekends.jpg
```

Then update the image URLs in `styles.css`.

---

# 📍 Cape Town Map

The website includes a map section at the bottom of the page.

Current location:

```text
Cape Town, South Africa
```

The map does not pretend that Ken NXT SA has a permanent venue address.

Once a permanent studio, office or booking location is available, the map can be changed to the exact address.

---

# 🔍 SEO

The website currently includes basic search-engine optimisation.

Included:

* Page title
* Meta description
* Keywords
* Author metadata
* Robots metadata
* Cape Town geographic metadata
* Open Graph metadata
* Twitter card metadata
* Structured data
* `lang="en-ZA"`
* Descriptive image alt text

Current page title:

```text
Ken NXT SA | DJ | Cape Town
```

Current description focuses on:

```text
Cape Town DJ
Amapiano
Deep House
Afro House
R&B
Clubs
Lounges
Markets
Private Events
```

---

# 📱 Mobile Design

The website is designed to work on:

* Desktop
* Laptop
* Tablet
* Mobile phones

Mobile features include:

* Collapsible navigation
* Full-width buttons
* Responsive booking form
* Responsive genre cards
* Responsive event cards
* Mobile map
* Floating WhatsApp button
* Touch-friendly navigation

---

# ✨ Animations

The website includes lightweight animations such as:

* Scroll reveal
* Hover card movement
* Image zoom
* Button ripple effects
* Purple hero glow
* WhatsApp pulse
* Navigation transitions
* Header scroll effect

The website also respects:

```text
prefers-reduced-motion
```

for users who have reduced motion enabled on their device.

---

# 🚧 Features Not Added Yet

The website intentionally does **not** contain empty sections for features that currently don't have content.

These can be added later when Ken NXT SA has material to display.

## 🎧 DJ Mixes

Add when recorded mixes are available.

Possible platforms:

* SoundCloud
* Mixcloud
* Audiomack

---

## 🎵 SoundCloud / Mixcloud

Add when official DJ profiles or mixes are available.

---

## 📸 DJ / Event Gallery

Not added yet because there is no event gallery.

When photos become available, create:

```text
gallery/
```

and add professional event photographs.

---

## 🎥 YouTube Videos

Not added yet because there are currently no videos to showcase.

Can be added once official YouTube content is available.

---

## 📅 Upcoming Gigs

Not added yet because there are no confirmed upcoming gigs to display.

When gigs become available, a schedule section can be added.

---

## ⭐ Testimonials

Not added yet because there are currently no testimonials.

Once clients or event organisers provide reviews, a testimonials section can be added.

---

# 🔮 Future Features

Potential future improvements include:

* 🎧 DJ mix player
* 🎵 SoundCloud integration
* 🎵 Mixcloud integration
* 🎥 YouTube integration
* 📸 Event gallery
* 📅 Upcoming gigs calendar
* ⭐ Testimonials
* 📲 Advanced WhatsApp booking
* 📊 Booking analytics
* 🔍 Google Search Console
* 📈 Google Analytics
* 🗺️ Exact venue map
* ⚡ Image optimisation
* 🖼️ WebP/AVIF images
* 📱 Progressive Web App features
* 🔔 Booking confirmation system
* 📧 Email notifications
* 🧾 Booking management system

---

# 🚀 Running the Website

This is a static website and does not currently require:

* Node.js
* PHP
* MySQL
* A backend server
* A database

The simplest way to test it is to open:

```text
index.html
```

in a web browser.

For development, using a local server is recommended.

---

# 🌐 Publishing the Website

The website can be hosted on services such as:

* GitHub Pages
* Netlify
* Vercel
* Cloudflare Pages
* Traditional web hosting

The project only requires the HTML, CSS, JavaScript and image files.

---

# 🔐 Before Going Live

Check the following:

### WhatsApp

Confirm that:

```text
072 230 1683
```

is the correct booking number.

### Instagram

Current account:

```text
@ken_nxt_sa
```

### TikTok

Current account:

```text
@ken_nxt_sa
```

### Poster

Confirm that:

```text
ken-nxt-poster.jpg
```

exists and is the correct promotional image.

### Images

Replace temporary remote thumbnails with properly licensed images before launching commercially.

### Map

Update the Cape Town map when an exact business/venue address becomes available.

---

# 🧪 Testing Checklist

Before publishing, test:

* [ ] Desktop navigation
* [ ] Mobile navigation
* [ ] Hero buttons
* [ ] About link
* [ ] Music cards
* [ ] Service cards
* [ ] Event cards
* [ ] Booking form
* [ ] Required fields
* [ ] Event date
* [ ] WhatsApp message
* [ ] Instagram link
* [ ] TikTok link
* [ ] Floating WhatsApp button
* [ ] Cape Town map
* [ ] Google Maps button
* [ ] Mobile layout
* [ ] Tablet layout
* [ ] Footer
* [ ] Copyright year
* [ ] Images loading correctly

---

# 📈 Recommended Next Step

The website should first establish Ken NXT SA's online presence with:

```text
Website
    ↓
WhatsApp bookings
    ↓
Instagram
    ↓
TikTok
    ↓
DJ/event content
    ↓
Reviews
    ↓
Mixes
    ↓
Gallery
    ↓
Upcoming gigs
```

Once real DJ content becomes available, the empty-content features can be added without rebuilding the website from scratch.

---

# 🎧 Ken NXT SA

**Your event.
Your crowd.
Our vibe.**

Cape Town, South Africa.

**Bringing the vibe. Creating the moment.**

```
```
