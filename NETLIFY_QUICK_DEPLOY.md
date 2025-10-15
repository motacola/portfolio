# 🚀 Quick Netlify Deployment

## Fastest Way to Deploy Your Portfolio

### **Option A: Via Netlify Dashboard (5 minutes)**

1. **Merge PR #44:**
   - Go to: https://github.com/motacola/portfolio/pull/44
   - Click "Merge pull request"
   - Confirm merge

2. **Update Netlify Settings:**
   - Login: https://app.netlify.com/
   - Select: `christopher-belgrave` site
   - Go to: **Site Settings** → **Build & Deploy** → **Build settings**
   - Change **Publish directory** from `out` to `.` (just a dot)
   - Clear **Build command** (leave it empty)
   - Click **Save**

3. **Deploy:**
   - Go to **Deploys** tab
   - Click **"Trigger deploy"** → **"Clear cache and deploy site"**
   - Wait 30-60 seconds

4. **Done!**
   - Visit: https://christopher-belgrave.netlify.app/

---

### **Option B: Via Netlify CLI (3 minutes)**

```bash
# Install CLI (if not already installed)
npm install -g netlify-cli

# Login
netlify login

# Navigate to your project
cd /Users/christopherbelgrave/Downloads/portfolio_website

# Link to your site
netlify link

# Deploy to production
netlify deploy --prod --dir .
```

**Done!** Visit: https://christopher-belgrave.netlify.app/

---

## ✅ Verify Deployment

- ✅ Homepage shows 8 videos
- ✅ Dark mode toggle works
- ✅ About page loads
- ✅ All navigation works

---

## 🐛 If Something Goes Wrong

**Site still shows old version?**
- Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
- Clear cache and redeploy in Netlify

**CSS not loading?**
- Check publish directory is `.` not `out`
- Redeploy

---

**Full guide:** See `NETLIFY_DEPLOYMENT_GUIDE.md`

