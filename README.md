# qhchen.ca

Personal academic website for Dr. Qinghua Chen, built with [Hugo](https://gohugo.io/) (v0.119.0).

## Local development

```bash
npm run dev    # hugo server --disableFastRender
```

## Deployment

This site deploys to [Netlify](https://www.netlify.com/) via `netlify.toml`:

- Build command: `hugo --gc --minify`
- Publish directory: `public`
- Hugo version is pinned via `HUGO_VERSION` in `netlify.toml`

Connect the repository to Netlify and it will build and deploy automatically on push.
