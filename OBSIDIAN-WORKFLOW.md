# Obsidian to Website Workflow

This guide explains how to get your Obsidian notes onto the hosted Psychology Notes website.

---

## Overview

The workflow is simple: you write notes in Obsidian as usual, then copy the ones you want to publish into the Quartz `content/` folder with a `publish: true` tag. Push to GitHub, and Cloudflare Pages auto-deploys.

```
Obsidian Vault → Copy publishable notes → Quartz content/ folder → Git push → Auto-deploy
```

---

## Option A: Separate Vault (Recommended for Beginners)

This is the safest approach — keep your full Obsidian vault private, and create a separate "publish" folder.

### Setup

1. **Keep your main Obsidian vault** as-is (private, all your notes)
2. **Create a folder** called `psychology-notes-public` inside your main vault
3. **Copy notes** you want to publish into this folder
4. **Add frontmatter** to each published note (see below)
5. **Symlink or copy** the `psychology-notes-public` folder contents into the Quartz `content/` folder

### Workflow for each new note

1. Write your note in Obsidian as usual
2. If you want to publish it, copy it to the `psychology-notes-public` folder
3. Add this frontmatter at the top:

```yaml
---
title: Your Note Title
tags:
  - relevant-tag
publish: true
description: A short summary for search and previews
---
```

4. Use `[[wikilinks]]` to connect to other published notes
5. Sync to GitHub (see below)

---

## Option B: Single Vault with Publish Filter (Advanced)

If you keep all your notes in one vault and want to publish directly from it:

1. Clone the Quartz project into a folder inside your Obsidian vault
2. Set the Quartz `content/` directory to point to your vault (or a subfolder)
3. Use the `publish: true` frontmatter field — only notes with this field appear on the site
4. The `ExplicitPublish` plugin is already enabled, so notes without `publish: true` are automatically hidden

To set this up:
```bash
# In your Quartz project directory
npx quartz create --strategy symlink --source /path/to/your/obsidian/vault
```

This creates a symlink so Quartz reads directly from your vault. Only notes with `publish: true` will be published.

---

## Frontmatter Reference

Every published note needs at minimum:

```yaml
---
title: Cognitive Psychology          # Required: display title
tags:                                  # Required: for grouping
  - modules
  - cognition
publish: true                          # Required: must be true to appear
description: Overview of cognitive...  # Recommended: for search and previews
---
```

### Optional fields

```yaml
aliases:                                # Alternative names for linking
  - Cog Psych
draft: false                            # Set true to hide temporarily
cssclasses:                             # Custom CSS classes for this page
  - wide-page
---
```

---

## Linking Notes

Use Obsidian wikilinks — Quartz handles them automatically:

- `[[Note Title]]` — links to a note
- `[[Note Title|display text]]` — links with custom text
- `[[Note Title#Heading]]` — links to a specific section

Regular markdown links also work:
- `[External Link](https://example.com)`

---

## Syncing to GitHub

### First time setup

```bash
# Install Git if you don't have it
# Download from: https://git-scm.com/downloads

# Navigate to your Quartz project
cd path/to/quartz

# Add your GitHub remote
git remote add origin https://github.com/YOUR-USERNAME/psychology-notes.git

# Set your identity (one-time)
git config user.name "Your Name"
git config user.email "your-email@gmail.com"
```

### Every time you add/update notes

```bash
# Navigate to your Quartz project
cd path/to/quartz

# Test the build locally first
npx quartz build

# If it builds without errors, push to GitHub
git add -A
git commit -m "Add new psychology notes"
git push
```

Cloudflare Pages will automatically rebuild and deploy within 1-2 minutes.

---

## Tips for Psychology Course Notes

### Structure your notes by semester
```
content/
├── semester-1/
│   ├── cognitive-psychology/
│   ├── social-psychology/
│   └── research-methods/
├── semester-2/
│   └── ...
├── concepts/          # Cross-semester key terms
├── study-guides/      # Exam prep materials
└── resources/         # Reading lists, tools
```

### Use tags effectively
Tags create pages automatically (e.g., `#memory` shows all notes tagged with memory). Good tags for psychology:

- `cognition`, `memory`, `attention`, `perception`
- `social`, `conformity`, `attitudes`
- `development`, `attachment`
- `neuroscience`, `neurotransmitters`
- `methods`, `statistics`, `ethics`
- `exam-prep`, `study-guide`

### Connect concepts
The power of Quartz is in the links. Every note should link to at least 2-3 related notes. For example, a note on "Working Memory" should link to "Short-Term Memory", "Baddeley", and "Cognitive Psychology".

---

## Troubleshooting

### Note doesn't appear on the site
- Check that `publish: true` is in the frontmatter
- Check that there are no YAML syntax errors (indentation matters)
- Run `npx quartz build` locally to see error messages

### Wikilinks show as broken
- Make sure the target note also has `publish: true`
- Check spelling — Quartz resolves links by filename
- Use `aliases` in frontmatter if the note has multiple names

### Build fails
- Check for syntax errors in YAML frontmatter
- Make sure all files are UTF-8 encoded
- Run `npx quartz build -v` for verbose error output
