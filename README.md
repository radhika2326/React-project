# MOCO Modular Kitchens

A single-page marketing website for a modular kitchen brand, built with **React 19** and **Vite**.

## Features

- Responsive landing page: Hero, About, Why MOCO, Designs, Gallery, Process, Testimonials, Call to action and Footer
- Sticky navbar that changes on scroll, with a mobile menu (`useState` + `useEffect`)
- **Gallery loaded from a free image API** ([Picsum Photos](https://picsum.photos)), 4 images per page with Previous / Load More / Back to First. Loaded pages are remembered, and loading and error states are handled (`useState` + `useEffect` + `fetch`)
- Reusable components driven by props: `Button`, `SectionHeading`, `NavItem`, `DesignCard`, `FeatureCard`, `TestimonialCard`, `SvgIcon`

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
npm run lint     # run Oxlint
```

## Project structure

```
src/
  components/   Page sections and reusable UI pieces (each with its own .css)
  data/         Static content (nav links, designs, reviews, stats...) kept out of the components
  App.jsx       Puts the sections together
  main.jsx      App entry point
public/
  images/       Kitchen photos (resized to max 1400px)
```

## How the data flows

Content lives in `src/data/`. A section imports its array, loops over it with `.map()`, and passes each item to a small component as props. To change or add content, edit the array and the page updates, with no component changes.

```
data/designs.js  ->  Design.jsx  ->  DesignCard.jsx
   (array)           (.map loop)      (props -> HTML)
```

## Tech

React 19, Vite, Font Awesome (icons), Oxlint
