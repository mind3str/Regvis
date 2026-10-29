# regvis.net

Visual bibliography of visual approaches for financial regulation and compliance, served at <http://regvis.net> through GitHub Pages.

The current version (October 2026) accompanies the survey *A Survey on Visual Approaches for Financial Regulation and Compliance* and lists 82 publications from 1999 to 2026. Each publication is coded by supervisory scope, supervisory task, data, visualization, interaction, analytics, evaluation, and collaborator, and labeled with the community of its venue (visualization; finance, economics and accounting; other computing; preprint). The page shows a timeline with one glyph per publication (color: main scope; shape: venue community), a taxonomy matrix for filtering whose scope rows can be folded and whose marginal bars are stacked by venue community, and a card with a thumbnail of each publication's main figure; each card opens the codes and the BibTeX entry, and the current selection can be exported as BibTeX or CSV.

## Files

| Path | Content |
|---|---|
| `index.html`, `css/`, `js/` | The site (HTML, CSS, JavaScript) |
| `vendor/` | D3.js 7.9.0 (ISC license, see `d3.LICENSE.txt`), loaded locally |
| `data/papers.json`, `data/papers.js` | The 82 publications with bibliographic data, codes, and BibTeX |
| `data/taxonomy.json` | The coding dimensions and their categories |
| `thumbnails/` | One thumbnail per publication, cropped from a figure of that publication; `thumbnails_sources.csv` lists the figure used. The figures belong to their authors and publishers and are shown here for scholarly reference. |
| `2020/` | The first version of the site (2020, 87 entries), kept for reference |
| `CNAME` | Custom domain for GitHub Pages |

The data files are generated from the coded corpus of the survey and are not edited by hand.

## Run locally

```
python3 -m http.server 8000
```

Then open <http://localhost:8000>.
