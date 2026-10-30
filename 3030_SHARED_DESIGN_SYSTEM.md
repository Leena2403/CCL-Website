# 3030 Creative Labs × Computational Thinking

Shared visual reference for the 3030 Creative Labs main site and the CCL Computational Thinking learning site.

## Reference sites

- Main site: <https://creative-labs-3030.j-thakkar498929.chatgpt.site/>
- Computational Thinking: <https://ccl-website-seven.vercel.app/>

The published main-site HTML and CSS were inspected on 29 October 2026. Its live browser page could not be opened in the inspection browser, so its published stylesheets and responsive rules were used as the visual reference instead of guessing. Recheck the rendered comparison when browser access is available.

## Relationship between the sites

The 3030 site uses an editorial, object-led presentation: Manrope typography, restrained paper and ink surfaces, clear section dividers, and real CCL products, people and workshop imagery. Its header and footer are simple, bounded layouts rather than floating interface panels.

The CT site keeps its own learning navigation and educational content. Its chapter wheel, chapter shelf, searchable modules, hands-on games, book downloads and interactive activities remain the focus. Shared tokens and restrained components connect it to the main site, while links back to 3030 Creative Labs and the schools page make the relationship clear without routing learners through a commercial workflow.

The previous CT styling used Inter and Playfair Display, a dark slate palette, a floating pill navigation, orange pill buttons, decorative rings and highly elevated cards. The refreshed treatment uses the shared Manrope and paper/ink palette, a simple bordered header and footer, yellow primary actions, and lighter card shadows.

## Brand tokens

| Token | Value | Use |
|---|---|---|
| Purple | `#9169AD` | Secondary accents |
| Cyan | `#5BC0DA` | Illustrations and accents |
| Blue | `#436EB6` | Links, focus indicators and interaction |
| Green | `#4EBA6D` | Illustrations and accents |
| Lime | `#C1D036` | Illustrations and accents |
| Orange | `#F57F25` | Primary CTA fill, selected accents and illustrations |
| Pink | `#ED4691` | Illustrations and accents |
| Red | `#EF3B50` | Illustrations and accents |
| Paper | `#FAFBFC` | Primary light background |
| White | `#FFFFFF` | Light surfaces |
| Ink | `#231F20` | Body text, dark surfaces and CTA text |
| Ink soft | `#4A4546` | Secondary text on light surfaces |

Use the bright colors as accents and fills, not as small text on white. Do not assign a different saturated background to every learning section. The light theme uses paper backgrounds, white surfaces and ink text. The existing dark theme remains available and uses ink backgrounds with high-contrast paper text.

Primary buttons use orange `#F57F25` with ink `#231F20` text. Keep the shape crisp and the target at least 48–50px high; use a darker orange on hover, a small lift at most, and a visible keyboard focus outline.

## Typography

- Use **Manrope** for headings, body copy, navigation and controls. Keep the “Observe, Think, Persevere” hero phrase in italic Playfair Display, as it was before the refresh. Do not use Teko as the default English heading font.
- Main-site headings use weight 700 and tight but readable tracking (about `-0.045em`). Use a responsive h1 around `40–66px` with line height near `1.08`; section headings are typically `30–44px`.
- Use 22px/700 as a starting h3 size. Keep body copy in the 15–18px range with line height around `1.6`.
- Navigation and buttons should remain readable at 14px or larger where space permits. Compact labels may be smaller only when they are not essential instructions.
- Use Manrope throughout the static site, with Playfair Display reserved for the existing hero phrase.
- Preserve correct glyph rendering for mathematical notation, Indian scripts and special symbols.

## Layout and components

- Use a centered content width of about `1280px`; the published main site also uses a `1440px` outer bound for shared page layout.
- Use a 1px ink-tinted divider for header/footer boundaries. Desktop page gutters are approximately `48px`; mobile gutters are approximately `20px`.
- Keep navigation horizontal on wide screens. On small screens, provide a keyboard-operable menu with a 44px touch target, clear expanded state, Escape-to-close behavior and the same learning links.
- Use square or lightly rounded corners (about `4px`) for buttons and content cards; avoid pill-shaped navigation and repeated large-radius cards.
- Use thin borders and subtle shadows. Reserve stronger elevation for content that is actively interactive.
- Keep footer links grouped and easy to scan. Include routes back to **3030 Creative Labs** and **Schools & workshops**.
- Use blue focus indicators with sufficient offset and contrast. Hover states must not be the only indication of interaction.
- Respect `prefers-reduced-motion`. Keep animations short and nonessential to discovering learning content.

## Responsive and performance checks

Inspect at `320px`, `360px`, `390px`, `768px` and `1280px` or wider. On phones, stack interactive puzzle layouts, keep game cells and controls usable, make chapter downloads easy to reach, and allow wide tables to scroll inside the content area. Check readable text, touch targets, chapter discovery, diagram sizing, keyboard focus and the absence of page-level horizontal overflow.

Prefer stable layouts, responsive images, lazy loading for below-the-fold media, and simple transitions. Do not autoplay embedded video or add a heavy animation dependency. Keep the CT site at its existing Vercel address; do not configure domains, redirects or hosting changes as part of a styling update.

## Navigation destinations

The main-site base URL is defined once in `app.js` as `CCL_MAIN_SITE_URL`. Main-site links use that value; the schools link resolves to its `/schools` route. If the organisation later confirms a branded domain, update that constant only.

## Current alignment and remaining checks

The CT refresh aligns the shared type, colors, buttons, header, footer, links, focus states and responsive navigation while preserving the existing learning sections and activity behavior. Phone layouts have been checked from 320px upward, including the interactive Building Puzzle and resize behavior. The published main-site responsive CSS confirms a compact mobile header/menu and reduced gutters. A side-by-side rendered screenshot of the main site was not available during this implementation because the inspection browser could not load that page; confirm final visual details against a live main-site screenshot when access is restored.
