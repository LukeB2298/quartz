---
title: How to Add Notes
tags:
  - meta
  - guide
publish: true
description: Instructions for adding new notes to this Quartz site from Obsidian.
---

# How to Add Notes

This page explains how to add new content to this site from your Obsidian vault.

## Frontmatter

Every note needs frontmatter at the top. At minimum, include:

```yaml
---
title: Your Note Title
tags:
  - topic-tag
publish: true
description: A short description for previews and search
---
```

The `publish: true` field is **required** — only notes with this field will appear on the site.

## Recommended frontmatter fields

| Field | Purpose | Example |
|---|---|---|
| `title` | Display title | `Cognitive Psychology` |
| `tags` | Topic tags for grouping | `cognition`, `memory` |
| `publish` | Must be `true` to appear | `true` |
| `description` | Short summary for search and previews | `An overview of cognitive psychology` |
| `aliases` | Alternative names for linking | `Cog Psych` |
| `draft` | Set to `true` to hide from site | `false` |

## Linking notes

Use Obsidian wikilinks to connect notes:

- `[[Note Title]]` — links to a note
- `[[Note Title\|display text]]` — links with custom text
- `[[Note Title#Heading]]` — links to a specific heading

## Folder structure

```
content/
├── index.md          ← Homepage
├── about.md
├── modules/          ← Course modules
│   ├── cognitive-psychology.md
│   ├── social-psychology.md
│   └── ...
├── concepts/         ← Key terms and theories
├── study-guides/     ← Exam prep
├── methods/          ← Research methods and stats
└── resources/        ← Reading lists, tools
```

## Privacy

Only notes with `publish: true` in their frontmatter will be included on the site. Keep your private notes in a separate folder or simply omit the `publish` field.
