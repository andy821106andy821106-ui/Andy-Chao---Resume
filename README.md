# Andy Chao — Resume

Responsive English resume website for Andy Chao, covering automotive electronics, mechanical engineering, product management, automation, and global project delivery.

## Local development

No package installation or build is required. Open `index.html` directly, or serve this directory:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

The HTML, CSS, and JavaScript are local and do not require a CDN. Node.js can optionally validate JavaScript syntax:

```sh
node --check scripts.js
```

## Review

- Check navigation and all five content sections on desktop and mobile.
- Open and close the mobile menu, select a section, and try the Escape key.
- Confirm no horizontal overflow at narrow screen widths.
- Select **Print / Save as PDF** to open the browser print dialog; choose Save as PDF for a copy. The document uses an A4 print layout.
- Verify personal details and achievement figures before sharing.

## GitHub Pages

In repository **Settings → Pages**, choose **Deploy from a branch**, then `main` and `/ (root)`. Save and wait for GitHub's deployment to finish. Use the URL shown by GitHub Pages; a pushed commit alone does not establish successful deployment.

## Content and maintenance

- `index.html`: resume copy, section structure, and page metadata.
- `styles.css`: bundled Bootstrap theme and Andy Chao custom styles at the end.
- `scripts.js`: mobile navigation, active section tracking, and print action.

The original theme's sample photo and favicon are retained as unused files. The page uses an AC monogram instead of a sample portrait. Content was integrated from Andy’s November 2026 English resume and his updated summary. Confirmed figures are nine project launches and five automated lines (China: two; Mexico: three); Quanta title: Senior Project Manager. Only email and city are published as contact information. The source document is not included in the public repository.

Base theme: Start Bootstrap Resume v7.0.6; Bootstrap v5.2.3. Original license notices are retained in `styles.css`.
