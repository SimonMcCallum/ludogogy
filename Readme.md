# Ludogogy Website (ludogogy.co.nz)

Static website for Ludogogy, built with [Eleventy](https://www.11ty.dev/). NZ-based consultancy specialising in Gamification, Game Development, and AI Education.

## Project Structure

```
ludogogy/
├── src/                        # Source files (edit these)
│   ├── _data/
│   │   ├── site.json           # Site-wide data (name, email, phone, URLs)
│   │   └── nav.json            # Navigation menu items
│   ├── _includes/
│   │   ├── base.njk            # Base HTML template (head, body wrapper)
│   │   ├── page-header.njk     # Reusable page header banner
│   │   └── partials/
│   │       ├── header.njk      # Logo and site header
│   │       ├── nav.njk         # Navigation bar
│   │       └── footer.njk      # Site footer
│   ├── css/
│   │   └── styles.css          # Site-wide stylesheet
│   ├── images/                 # All images and logos
│   ├── index.njk               # Home page
│   ├── ai-dev.njk              # AI Development page
│   ├── game-dev.njk            # Game Development page
│   └── contact.njk             # Contact page
├── _site/                      # Build output (generated, git-ignored)
├── .eleventy.js                # Eleventy configuration
├── package.json                # npm dependencies
├── nginx.conf                  # Nginx server configuration
└── .gitignore
```

## How to Edit

### Change site-wide info (email, phone, address)
Edit `src/_data/site.json` - one file, updates everywhere.

### Add a new page
1. Create `src/my-page.njk`:
   ```
   ---
   layout: base.njk
   pageTitle: My New Page
   subtitle: A description shown in the page header
   navKey: my-page
   heroType: page
   ---

   <section class="content-box">
       <h2>Content here</h2>
       <p>Your content.</p>
   </section>
   ```
2. Add to `src/_data/nav.json`:
   ```json
   { "url": "/my-page/", "text": "My Page", "key": "my-page" }
   ```
3. Run `npm run build`.

### Change navigation
Edit `src/_data/nav.json` - array of `{url, text, key}` objects.

### Change header, footer, or layout
Edit the files in `src/_includes/`. Changes apply to all pages.

### Change styling
Edit `src/css/styles.css`.

## Local Development

```bash
npm install          # first time only
npm run dev          # starts local server at http://localhost:8080 with hot reload
npm run build        # builds to _site/
```

## Deployment (Nginx)

The site lives as a subfolder on a shared nginx server with domain `ludogogy.co.nz`.

### Deploy

```bash
# Build locally
npm run build

# Upload build output to server
rsync -avz --delete _site/ user@server:/var/www/ludogogy.co.nz/
```

### Server setup (one-time)

```bash
# Copy nginx config
sudo cp nginx.conf /etc/nginx/sites-available/ludogogy.co.nz
sudo ln -s /etc/nginx/sites-available/ludogogy.co.nz /etc/nginx/sites-enabled/

# SSL via Let's Encrypt
sudo certbot --nginx -d ludogogy.co.nz -d www.ludogogy.co.nz

# Test and reload
sudo nginx -t && sudo systemctl reload nginx
```

### Nginx features
- HTTP to HTTPS redirect
- www to non-www redirect
- Static asset caching (7 days)
- Security headers (X-Frame-Options, X-Content-Type-Options)
- Clean URLs (`/contact/` instead of `/contact.html`)
