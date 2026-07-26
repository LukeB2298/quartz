# Deployment Guide: Psychology Notes to Cloudflare Pages

This guide walks you through deploying your Quartz site to Cloudflare Pages, step by step.

---

## Prerequisites

You already have:
- A Cloudflare account (connected via Gmail)
- A Ko-fi account (username: lbpsystudy)
- This Quartz project folder

You will also need:
- A **GitHub account** (free at [github.com](https://github.com)) — Cloudflare Pages builds from a GitHub repository

---

## Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name it something like `psychology-notes`
3. Set it to **Public** (so students can find the repo)
4. Do NOT initialize with a README (you already have content)
5. Click **Create repository**

---

## Step 2: Push Your Quartz Project to GitHub

Open a terminal on your computer and run:

```bash
# Navigate to your Quartz project folder
cd path/to/quartz

# Add your GitHub remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/psychology-notes.git

# Push to GitHub
git branch -M main
git push -u origin main
```

If you haven't cloned this project to your computer yet, I can provide it as a zip file. Download it, extract, then run `git init && git add -A && git commit -m "Initial commit"` before pushing.

---

## Step 3: Connect Cloudflare Pages

1. Go to the [Cloudflare dashboard](https://dash.cloudflare.com)
2. In the left sidebar, click **Workers & Pages**
3. Click **Create** > **Pages** > **Connect to Git**
4. Authorize Cloudflare to access your GitHub account
5. Select your `psychology-notes` repository
6. Configure the build settings:

| Setting | Value |
|---|---|
| Production branch | `main` |
| Framework preset | None |
| Build command | `npx quartz plugin install && npx quartz build` |
| Build output directory | `public` |

7. Click **Save and Deploy**

Cloudflare will build your site. This takes about 1-2 minutes. Once done, you'll get a URL like `psychology-notes.pages.dev`.

---

## Step 4: Set Your Base URL

Before deploying, update the `baseUrl` in `quartz.config.yaml`:

```yaml
baseUrl: psychology-notes.pages.dev
```

Or, if you set up a custom domain (see Step 5):

```yaml
baseUrl: psych-notes.yourname.ch
```

Then commit and push the change — Cloudflare will auto-rebuild.

---

## Step 5: Custom Domain (Optional but Recommended)

A custom domain makes your site look professional and is easier to share.

1. Buy a domain from any registrar (e.g., [Namecheap](https://namecheap.com), [Cyon](https://cyon.ch) for .ch domains)
   - Suggestion: `psychology-notes.ch` or `lbpsychology.ch`
2. In Cloudflare dashboard: go to your Pages project > **Custom domains** > **Set up a custom domain**
3. Enter your domain and follow the DNS instructions
4. Update `baseUrl` in `quartz.config.yaml` to match your domain (without `https://`)
5. Push the change to rebuild

---

## Step 6: Verify Ko-fi Widget

Once the site is live:
1. Visit your deployed site
2. You should see a floating "Support my studies" button in the bottom-right corner
3. Click it to verify it links to your Ko-fi page (`ko-fi.com/lbpsystudy`)

If the widget doesn't appear, check that Cloudflare didn't block the script. You may need to add a Content Security Policy exception.

---

## Updating Your Site

Every time you push changes to the `main` branch on GitHub, Cloudflare Pages automatically rebuilds and deploys your site. The typical workflow is:

1. Edit notes in Obsidian
2. Copy/publish the ones you want public to the `content/` folder (with `publish: true` in frontmatter)
3. Run `npx quartz build` locally to test
4. `git add -A && git commit -m "Add new notes" && git push`
5. Cloudflare auto-deploys within 1-2 minutes

---

## Cost Summary

| Service | Cost |
|---|---|
| Cloudflare Pages | Free (500 builds/month, unlimited bandwidth) |
| GitHub | Free (public repos) |
| Ko-fi | Free (0% platform fee on tips) |
| Custom domain | ~10-15 CHF/year (optional) |

Total ongoing cost: **Free** without a custom domain, ~15 CHF/year with one.
