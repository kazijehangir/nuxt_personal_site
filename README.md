# Nuxt based Vue build for jehangirkazi.com

## Structure

```
- nuxt_personal_site/       <-- root directory, aka ~
  - assets/                 <-- files that the build tool will process
    - css/                  <-- CSS directory
      - main.css            <-- example .css file
  - components/             <-- Vue components used in pages
    - content/              <-- components used inside .md files in ~/content/
      - CustomParagraph.vue <-- example custom component referenced by .md files
    - BlogPost.vue          <-- 
    - TopNavbar.vue         <-- component used in app.vue so all pages have top bar
  - content/                <-- directory for markdown files
    - blog/                 <-- blog posts
      - example_post.md     <-- actual md file
    - wiki/                 <-- wiki / descriptive content
      - example_wiki.md     <-- actual wiki entry
  - pages/                  <-- .vue files for all pages that are rendered 
    - blog/                 <-- directory matches content dir structure
      - [blog_post].vue     <-- dynamic page which will match requests to jehangirkazi/blog/.*
    - [...slug].vue         <-- catch all page to match any requests not matched by a specific page
    - index.vue             <-- root / index page, matches jehangirkazi.com
  - public/                 <-- files not modified by the build process, and have to keep their names (e.g. robots.txt)
    - favicon.ico           <-- favicon displayed by browser
  - app.vue                 <-- Vue structure applied to all pages, e.g. top nav bar
  - app.config.ts           <-- defines app-wide parameters, e.g. theme options
  - nuxt.config.ts          <-- defines Nuxt project parameters, e.g. module dependencies
  - package.json            <-- package manager (e.g. yarn) config, declares dependencies and also build scripts 

``` 

## Appendix

## Clone

Clone the repository (using `nuxi`):

```bash
npx nuxi init -t themes/docus
```

## Setup

Install dependencies:

```bash
yarn install
```

## Development

```bash
yarn dev
```

## Edge Side Rendering

Can be deployed to Vercel Functions, Netlify Functions, AWS, and most Node-compatible environments.

Look at all the available presets [here](https://nuxt.com/docs/getting-started/deployment#presets).

```bash
yarn build
```

## Static Generation

Use the `generate` command to build your application.

The HTML files will be generated in the .output/public directory and ready to be deployed to any static compatible hosting.

```bash
yarn generate
```

## Preview build

You might want to preview the result of your build locally, to do so, run the following command:

```bash
yarn preview
```

---

For a detailed explanation of how things work, check out [Docus](https://docus.dev).
