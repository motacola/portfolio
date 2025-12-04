# Netlify Deployment Guide

## 🚀 Deploy HTML/CSS Portfolio to Netlify

This guide will help you deploy your new HTML/CSS portfolio to your existing Netlify site: **https://christopher-belgrave.netlify.app/**

---

## ✅ What's Been Prepared

### **1. Netlify Configuration Updated**
- ✅ `netlify.toml` - Updated to deploy static HTML files
- ✅ `_redirects` - Clean URL routing configured
- ✅ Security headers added
- ✅ Caching rules optimized
- ✅ Lighthouse audits configured

### **2. Files Committed**
- ✅ Commit hash: `47db0e2`
- ✅ Pushed to `portfolio-html-redesign` branch
- ✅ Ready for deployment

---

## 🎯 Deployment Options

You have **3 options** to deploy to Netlify:

### **Option 1: Deploy from GitHub (Recommended)**
This is the easiest and most automated approach.

### **Option 2: Manual Deploy via Netlify CLI**
For quick testing before merging the PR.

### **Option 3: Drag & Drop Deploy**
Simple but less automated.

---

## 📋 OPTION 1: Deploy from GitHub (Recommended)

This method connects your GitHub repository to Netlify for automatic deployments.

### **Step 1: Merge Your Pull Request**

1. Go to your pull request: https://github.com/motacola/portfolio/pull/44
2. Click **"Merge pull request"**
3. Confirm the merge
4. Your `main` branch now has the HTML portfolio

### **Step 2: Update Netlify Site Settings**

1. **Log in to Netlify:** https://app.netlify.com/
2. **Find your site:** `christopher-belgrave`
3. **Go to Site Settings** → **Build & Deploy**
4. **Update Build Settings:**
   - **Branch:** `main` (or `portfolio-html-redesign` if you want to deploy the branch directly)
   - **Build command:** Leave empty (or delete existing command)
   - **Publish directory:** `.` (just a dot)
5. **Click "Save"**

### **Step 3: Trigger Deploy**

1. Go to **Deploys** tab
2. Click **"Trigger deploy"** → **"Deploy site"**
3. Wait 30-60 seconds for deployment
4. Visit: https://christopher-belgrave.netlify.app/

### **Step 4: Verify**

✅ Check that the new HTML/CSS portfolio is live  
✅ Test dark mode toggle  
✅ Test video lazy loading  
✅ Test navigation links  
✅ Test About page  

---

## 📋 OPTION 2: Manual Deploy via Netlify CLI

This is great for testing before merging your PR.

### **Step 1: Install Netlify CLI**

```bash
npm install -g netlify-cli
```

### **Step 2: Login to Netlify**

```bash
netlify login
```

This will open a browser window to authenticate.

### **Step 3: Link to Your Site**

```bash
cd /Users/christopherbelgrave/Downloads/portfolio_website
netlify link
```

Choose: **"Use current git remote origin"**  
Select: **christopher-belgrave** site

### **Step 4: Deploy**

**For a preview deploy (doesn't affect production):**
```bash
netlify deploy
```

**For production deploy:**
```bash
netlify deploy --prod
```

When prompted for publish directory, enter: `.` (just a dot)

### **Step 5: Verify**

The CLI will give you a URL to preview or confirm production deployment.

---

## 📋 OPTION 3: Drag & Drop Deploy

Quick and simple, but not connected to GitHub.

### **Step 1: Create Deployment Package**

```bash
cd /Users/christopherbelgrave/Downloads/portfolio_website

# Create a clean directory with only the files needed
mkdir -p netlify-deploy
cp index.html netlify-deploy/
cp about.html netlify-deploy/
cp -r css netlify-deploy/
cp -r js netlify-deploy/
cp -r images netlify-deploy/
cp -r documents netlify-deploy/
cp _redirects netlify-deploy/
```

### **Step 2: Deploy via Netlify Dashboard**

1. Go to: https://app.netlify.com/drop
2. Drag the `netlify-deploy` folder onto the page
3. Wait for upload and deployment
4. Netlify will give you a random URL

### **Step 3: Update Site Name**

1. Go to **Site Settings** → **General** → **Site details**
2. Click **"Change site name"**
3. Enter: `christopher-belgrave`
4. Your site will be at: https://christopher-belgrave.netlify.app/

---

## 🔧 Netlify Configuration Details

### **netlify.toml**

```toml
[build]
  publish = "."  # Publish from root directory

# Clean URLs
[[redirects]]
  from = "/showreel"
  to = "/index.html"
  status = 200

[[redirects]]
  from = "/about"
  to = "/about.html"
  status = 200

# Security headers
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"

# Caching for performance
[[headers]]
  for = "/*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### **_redirects**

```
/showreel           /index.html         200
/about              /about.html         200
/*                  /index.html         404
```

---

## ✅ Post-Deployment Checklist

After deployment, verify these features:

### **Homepage (index.html)**
- ✅ 8 videos load correctly
- ✅ Video filters work (All, Ad Spots, Music Videos, Documentaries)
- ✅ Lazy loading works (videos load as you scroll)
- ✅ Dark mode toggle works
- ✅ Scroll progress indicator appears
- ✅ Navigation links work
- ✅ Contact form is visible

### **About Page (about.html)**
- ✅ Professional headshot displays
- ✅ Career timeline shows all 30 positions
- ✅ "View More Experience" button works
- ✅ Notable Clients section displays
- ✅ Client links scroll to timeline
- ✅ Download CV button works
- ✅ Dark mode toggle works

### **Performance**
- ✅ Page loads in under 2 seconds
- ✅ Lighthouse score 95+ (run in Chrome DevTools)
- ✅ Mobile responsive
- ✅ No console errors

### **SEO**
- ✅ Meta tags present (view page source)
- ✅ Open Graph tags for social sharing
- ✅ Proper page titles

---

## 🐛 Troubleshooting

### **Issue: Site still shows Next.js version**

**Solution:**
1. Clear Netlify cache: **Deploys** → **Trigger deploy** → **Clear cache and deploy site**
2. Check build settings: Ensure publish directory is `.` not `out`
3. Hard refresh browser: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)

### **Issue: CSS/JS not loading**

**Solution:**
1. Check file paths in HTML (should be relative: `css/styles.css` not `/css/styles.css`)
2. Verify files are in the repository
3. Check browser console for 404 errors

### **Issue: Videos not loading**

**Solution:**
1. Check YouTube embed URLs are correct
2. Verify lazy loading script is working
3. Check browser console for errors

### **Issue: 404 errors on /about or /showreel**

**Solution:**
1. Verify `_redirects` file is in the root directory
2. Check `netlify.toml` has redirect rules
3. Redeploy the site

---

## 📊 Expected Results

### **Before (Next.js)**
- Build time: ~2-3 minutes
- Bundle size: ~500KB
- Lighthouse: 85-90

### **After (HTML/CSS)**
- Build time: ~5 seconds (no build needed!)
- Page size: ~1-2MB (with videos lazy loaded)
- Lighthouse: 95+
- Time to Interactive: ~1.5s

---

## 🎯 Recommended Approach

**I recommend Option 1 (Deploy from GitHub)** because:

1. ✅ **Automatic deployments** - Every push to main triggers a deploy
2. ✅ **Preview deploys** - PRs get preview URLs automatically
3. ✅ **Rollback capability** - Easy to revert to previous versions
4. ✅ **Build logs** - See what happened if something goes wrong
5. ✅ **Professional workflow** - Industry standard practice

---

## 📞 Need Help?

If you encounter any issues:

1. Check Netlify deploy logs: **Deploys** → Click on latest deploy → **Deploy log**
2. Check browser console for errors: `F12` → **Console** tab
3. Verify files are in GitHub: https://github.com/motacola/portfolio/tree/portfolio-html-redesign

---

## 🎉 Next Steps

1. **Choose your deployment option** (Option 1 recommended)
2. **Follow the steps** for your chosen option
3. **Verify the deployment** using the checklist
4. **Share your new portfolio!** 🚀

Your new portfolio will be live at: **https://christopher-belgrave.netlify.app/**

---

**Good luck with the deployment!** 🎉

