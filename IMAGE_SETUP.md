# Image Setup Guide

Your portfolio now has organized image folders for managing assets. Here's how to add your images:

## Folder Structure

```
public/
├── images/
│   ├── profile/
│   │   └── [Your profile photos here]
│   └── projects/
│       └── [Project screenshots here]
```

## How to Add Images

### 1. Profile Images
Add your profile photo to `/public/images/profile/`:
- Name suggestions: `profile.jpg`, `avatar.png`, `me.jpg`
- Supported formats: `.jpg`, `.png`, `.webp`
- Recommended size: 400x400px

### 2. Project Screenshots
Add project screenshots to `/public/images/projects/`:
- Name them based on your projects (e.g., `beaverbuddy.png`, `ai-racer.jpg`)
- Supported formats: `.jpg`, `.png`, `.webp`
- Recommended size: 800x600px or wider for better quality

## Using Images in Components

To reference images in your JSX components:

```jsx
// Profile image
<img src="/images/profile/profile.jpg" alt="Profile" />

// Project image
<img src="/images/projects/beaverbuddy.png" alt="BeaverBuddy Project" />
```

## Current Color Scheme

Your portfolio now uses a **Violet/Pink/Rose** color scheme:
- Primary: `violet-400` / `violet-500` / `violet-600`
- Secondary: `pink-300` / `pink-400` / `pink-500`
- Accent: `rose-300` / `rose-400`

## Floating Tech Animations

Tech stack badges in the Skills section now float with animated effects:
- 4 different animation patterns (tech-float-1 through tech-float-4)
- Staggered timing creates a cascading floating effect
- Applied automatically to all skill badges

## Next Steps

1. Add your profile photo to `/public/images/profile/`
2. Add project screenshots to `/public/images/projects/`
3. Refresh your browser to see the new color scheme and animations in action
4. Consider updating component JSX files to display the images where appropriate
