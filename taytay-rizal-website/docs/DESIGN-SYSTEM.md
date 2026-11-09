# Design System

The colors come from the official seal of the Municipality of Taytay: Philippine-flag navy and red, with the gold of the seal's ring, stars and sun.

## Colors

| Role | Hex | Used for |
|---|---|---|
| Navy (primary) | `#0B2A6F` | Headings, header and footer, dark sections, primary buttons, links |
| Deep navy | `#071B47` | Footer and darkest overlays |
| Navy tints | `#14398A`, `#22396E` | Gradients and hover states on navy |
| Gold (accent) | `#F5C02E` | Eyebrow labels, highlights, timeline markers, seal pointer lines |
| Pale gold | `#FFE7A3` | Soft gold backgrounds |
| Red (action) | `#C8102E` | The Contact button, emergency items, the "Rescue" label, link hover |
| Pale red | `#FFE4E8` | Background behind emergency blocks |
| Pink on navy | `#FFB3BF` | Red-side text on navy (the seal section) |
| Text | `#101828` | Body text |
| Text, secondary | `#2A3247` | Secondary body text |
| Text, muted | `#4B5468` | Captions, meta text, labels |
| Text on navy | `#DCE4F5`, `#C9D3EA`, `#A9B6D6` | Paragraphs and captions on dark backgrounds |
| Light section background | `#F4F6FB` | Alternating light sections |
| Tint | `#EEF2FA`, `#E4EAF7` | Pills, bar-chart tracks |
| Borders | `#E4E8F0`, `#D9DFEB`, `#CBD3E4`, `#C3CBDC` | Card and input borders |
| White | `#FFFFFF` | Page background, cards |

## Typography

Fonts load from Google Fonts in each page's `<head>`:

- **Bricolage Grotesque**, weights 500/700/800: headings. Big headings use 800 with tight letter-spacing (`-0.02em` to `-0.03em`) and `line-height: 1`.
- **Instrument Serif Italic**: the accent word inside headings, usually in gold or navy (e.g. "News & *Updates*", "The *Municipal Seal*").
- **Figtree**, weights 400–700: body text. The base size is 17px with line-height 1.6.

Fallback stacks are `'Bricolage Grotesque', 'Arial Narrow', sans-serif`, `'Instrument Serif', Georgia, serif` and `'Figtree', 'Segoe UI', Arial, sans-serif`.

Eyebrow labels sit above headings: 13–14px, weight 700, uppercase, letter-spacing `0.12–0.14em`, gold on navy or red/navy on white.

Hero headings use fluid sizes such as `clamp(52px, 13vw, 96px)`. Section headings use about 40–56px, written as `clamp(34px, 9vw, 52px)` where they must shrink on phones.

## Layout

- Content width: `max-width: 1280px; margin: 0 auto; padding: 0 32px`.
- Section padding: about 72–96px top and bottom.
- Card grids use `grid-template-columns: repeat(auto-fit, minmax(min(340px, 100%), 1fr))`, which is responsive without media queries.
- Rounded corners: 20–24px for cards, 999px for pills and buttons, 50% for avatars and circles.
- Long emails and URLs use `overflow-wrap: anywhere` so they never cause sideways scrolling on phones.

## Components

- **Header:** the seal plus "Municipality of Taytay / Rizal, Philippines", nav links, and a red **Contact** pill. The current page's link has a pale navy pill background.
- **Page hero:** a photo with a navy gradient scrim, breadcrumb, gold eyebrow and big heading.
- **Fact sheet** (Home, "Taytay at a Glance"): a label/value table card.
- **Zigzag timeline** (About): a center rail made of an 8px navy band with a 2px dashed gold "stitch", and gold markers. Cards alternate left and right. Under 760px it becomes a single column with the rail on the left (`.tl-*` classes in About's `<style>`).
- **Seal diagram** (About): the seal on a white disc with a dashed gold ring and faint gold sunburst rays behind it. Glass cards with icons connect to the seal by dashed gold pointer lines. Under 640px the cards stack below the seal (`.sd-*` classes).
- **Event cards:** a date block (month and day, or "EVERY FEB"), a category line, a title and a description, with a photo.
- **Emergency block** (Contact): red-accented hotline list.
- **CTA band:** a red or navy band with a heading and buttons.
- **Footer:** deep navy, with the seal, Explore links, contact details and copyright.

## Rules used to avoid an "AI-generated" look

- Real local photos instead of stock or generic illustrations, except the hero illustration.
- One clear accent system from the seal (navy, gold, red). No purple gradients, no glassmorphism everywhere, no emoji icons.
- Real, specific data (names, numbers, dates, addresses) instead of filler text.
- Varied section layouts instead of the same 3-card grid repeated.
- Copy that is concise and specific to Taytay.
