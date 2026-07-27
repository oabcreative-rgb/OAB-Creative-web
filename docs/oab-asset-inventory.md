# OAB Creative — Asset Inventory & Review

**Source folder:** `OAB works and testimonial` (additional working directory, not part of the repo)
**Files reviewed:** 127 (116 images, 11 videos)
**Status:** First-pass review. Nothing has been moved, renamed, or published. Every entry in
`src/data/asset-review.json` is set to `publicationStatus: "needs-review"`.

This document is the narrative companion to `src/data/asset-review.json`, which has one
structured entry per file (path, category, project group, role, before/after flags,
testimonial flags, privacy flags, duplicate notes, confidence, suggested placement,
publication status). Read this doc for the story; read the JSON for the per-file detail.

---

## 1. Summary

| Metric | Count |
|---|---|
| Total files | 127 |
| Images | 116 |
| Videos | 11 |
| Testimonial assets (written + video) | 15 |
| Website Design assets | 41 |
| Brand Identity assets | 39 |
| Social Media Design assets | 23 |
| Graphic Design assets | 1 |
| Product Commercials assets | 1 |
| Unclassified / internal / low-value | 7 |
| Flagged as "before" images | 11 |
| Flagged as "after" images | 36 |
| Contain an identifiable client photo/face | 39 |
| Contain sensitive info (must not publish as-is) | 5 |
| Files with a duplicate/near-duplicate note | 75 |
| Files needing manual review before use | 59 |
| High-confidence classification | 84 |
| Medium-confidence classification | 30 |
| Low-confidence classification | 8 |
| Distinct project/client groups identified | 38 |
| Exact byte-for-byte duplicates found | 0 |

No exact duplicates exist (verified by MD5 hash across all 127 files). The "duplicate/near-duplicate"
count refers to multiple exports, crops, or mockup styles of the *same* design — common and expected,
not a problem to fix, just something to pick a "best version" from before publishing.

---

## 2. The single biggest find: a ready-made Before/After showcase series

Seventeen files named `amule emmanuel (1080 x 1080 px)_*` are **not** personal/founder content —
filename aside, they're a clean, numbered, self-branded **"Before/After Website Redesign"** series
Amule already built for his own social media. Each post is stamped `Designed by: Amule Emmanuel`
and numbered #01 through #12. Twelve additional files elsewhere in the folder (desktop screenshots,
phone mockups, and a couple of `Orange Modern Elderly Care Desktop Prototype_*` exports whose
Canva-template filename has nothing to do with the actual client) are matching desktop/mobile crops
of the same twelve projects.

| # | Client | Assets available |
|---|---|---|
| 01 | Dr. Saberinia (Endocrinologist, Washington DC area) | Before/after square + mobile crop |
| 02 | Elite Labs & Logistics | Before/after square + mobile crop + dedicated desktop screenshot + phone mockup |
| 03 | ACC & Engineering | Before/after square + dedicated desktop screenshot + phone mockup |
| 04 | Senior Benefit Advisors | Before/after square + mobile crop + dedicated desktop screenshot |
| 05 | SaboCart Transportation & Logistics LLC | Before/after square + mobile crop + desktop export |
| 06 | Unique Home Care Options | After-only square post |
| 07 | Perez Accounting and Tax | Before/after square + mobile crop + 2 unconfirmed desktop exports |
| 08 | Aloha Coastal Notary Inc. | Before/after square + mobile crop |
| 09 | S&S Earthworx LLC | Before/after square + mobile crop + unconfirmed desktop export |
| 10 | Diamond Home Care Agency | Before/after square + mobile crop + unconfirmed desktop export |
| 11 | Notary Signing Solutions | Before/after square + mobile crop + unconfirmed desktop export |
| 12 | Athena Wellness Consultants | Before/after square + mobile crop + desktop screenshot (×2, one is the live site) |

This is exactly the material Phase 5–7 asked for: a strong Website Design portfolio, and enough
distinct desktop + mobile pairs to build the Website Design portfolio banner (Elite Labs & Logistics
and ACC & Engineering are the cleanest dominant-desktop + mobile pairs; Dr. Saberinia and Athena
Wellness Consultants are good secondary previews).

A handful of `Orange Modern Elderly Care Desktop Prototype_*` files (dated 2024-05-21, 05-27, 05-30,
05-31) were **not individually re-opened** in this pass — their filenames and timestamps line up
tightly with clients #07/#09/#10/#11, so they're provisionally grouped there at **medium confidence**.
Worth a five-minute visual double-check before use, flagged in the JSON as `needsManualReview: true`.

---

## 3. Project groups

Full detail is in the JSON (`projectGroup` field). Narrative summary by category:

### Brand Identity clients (logo work, no website involved)
Vicente Wedding Notary · Zion Mobile Notary · Smtooth Dentist · Caraga Affordable Properties
(agent: Clarence Aboloc) · Right Choice Christian Network · Senior Help · Positive Home Care
Services Inc. · Susan's Home Care Inc. (Susan Stewart) · Home Safe Property (Davao) · Frank Alvarez
Realty · DJRE/MAX Koh Samui · Prime Luxury Homes and Properties · Ijeoma Realtor · Coach Lumi'nation ·
Thunder Team.

Fifteen distinct small-business logo clients, each with 1–4 presentation variants (flat logo, paper
mockup, 3D mockup, glass mockup, apparel mockup). Strong pool for a "Brand Identity" portfolio
grid — real variety in mockup styles.

### Existing site client — more material found
**Affordable Lab & Testing Solutions** (already has a case study on the live site) has substantially
more usable marketing material than what's currently shown: a two-page blood-work brochure, a
7-slide Instagram carousel, several more social posts, a building b-roll video, and a customer
review video. All reinforce and extend the existing case study rather than replacing it.

### New potential clients/case studies discovered
- **Angel's Touch Lab Solutions** (South Orange, NJ) — social media design + a strong named Google
  review (Dave Jean-Baptiste, 5 stars, real photo).
- **Innovative DNA & Drug Screening, LLC** (Atlanta area) — social media design + logo mockups.
- **Coach Eli** — a business-coaching client for people starting drug-testing businesses (Tampa, FL)
  — one event flyer.
- Twelve website-redesign clients from the before/after series above.

### Not for public use
Two Meta Ads restriction-notice screenshots (no value), two Facebook Ads Manager dashboard
screenshots exposing a real client's full name and private campaign data, and one sales-outreach
WhatsApp DM unrelated to any finished work. See §4.

### Founder/brand content
One video of Amule speaking directly to camera, OAB Creative branded — this is founder/About-page
material, not a client testimonial, and was filed separately so it doesn't get miscategorized as one.

---

## 4. Privacy and testimonial safeguards — what was flagged

**Must not publish, full stop:**
- `scrnli_3_22_2024_2-58-52 PM.png` and `scrnli_3_22_2024_3-06-04 PM.png` — Facebook Ads Manager
  screenshots showing a real client's **full name** ("Joan Akagbosu Grant"), a partial ad account ID,
  and campaign budget figures. Serious privacy exposure — exclude from any use, including internal
  sharing outside the immediate team.
- `Screenshot_2024-03-22-14-31-51-542_com.facebook.orca.jpg` and the `...14-38-38...` twin — Meta
  ad-account restriction notices. No testimonial value, exposes an internal ad account ID.
- `IMG-20240329-WA0002.jpg` — a sales-outreach DM to a prospect ("Isaiah Wells"), not a testimonial,
  not finished work.

**Genuine testimonials found, none currently safe to auto-publish:**
- **Strongest / most attributable:** `2_20240731_170634_0001.jpg` (named Google review, Dave
  Jean-Baptiste, Angel's Touch Lab Solutions, his own profile photo, already public via Google) and
  `image(3).jpg` (client's business name visible in-frame, "Ijeoma Realtor").
- **Two video testimonials with a clear name:** `lv_0_20240426103921.mp4` /
  `lv_0_20240426103921~3.mp4` — Triana Vicente, on camera, two exports of the same clip (pick the
  better one).
- **Three video testimonials with no confirmed identity or project link:**
  `lv_0_20240328140225.mp4`, `lv_0_20240402133300.mp4` (both real-estate context),
  `FB_VID_5412491727880355431.mp4`. Real, identifiable people — need your confirmation of who they
  are and that publishing consent exists before they go anywhere near the site.
- **Six written testimonial DM screenshots** (`image.jpg`, `image(1).jpg`, `image(2).jpg`,
  `image(4).jpg`, `image(5).jpg`, `image(6).jpg`, `image(7).jpg`) — genuine positive client
  reactions, but most don't show a full name or company in the crop, and all show a small avatar
  photo of the client. Recommend: crop out the avatar (or get explicit permission to keep it), and
  pair each quote with the name/company only if you can confirm it — the review system's data
  structure requires a real name for a testimonial to be published (see `src/data/testimonials.ts`),
  and none of these should be published with an invented one.

**One review with mixed signals:** `lv_0_20250725164345.mp4` — an ALTS review-style video with a
5-star rating and quote overlaid, but the reviewer isn't named on-screen and it's unclear if the
person shown is the actual reviewer or illustrative b-roll. Needs the source review confirmed before
use.

`src/data/testimonials.ts` was **not modified**. It remains empty, exactly as designed — the
component already renders nothing until real, verified entries are added.

---

## 5. Duplicate / near-duplicate report

Zero exact (byte-identical) duplicates. Seventy-five files are flagged with a "near-duplicate" note
in the JSON — almost all of these are intentional variants, not accidental repeats:

- **Multiple mockup styles of the same logo** (flat / paper / glass / 3D / apparel) — keep all,
  they're useful variety for a Brand Identity gallery, not redundant.
- **Desktop + mobile crops of the same before/after post** — keep both, they serve different
  portfolio placements (banner dominant preview vs. mobile preview slot).
- **A few true "pick one" pairs** worth resolving before integration:
  - `Blue Orange Family Dentist Logo` ×2 (white vs. blue background) — pick one as primary.
  - `Modern Real Estate Logo` (Caraga) ×2 — pick one as primary.
  - `received_730437325836413.jpeg` vs `received_800074258709191.jpeg` (Vicente Wedding Notary,
    dark vs. light background) — pick one as primary.
  - `lv_0_20240426103921.mp4` vs `lv_0_20240426103921~3.mp4` — same Triana Vicente testimonial,
    two exports — compare quality and keep one.
  - `Innovative DNA & Drug Facebook Cover` ×2 — different banners, keep both, but confirm neither
    is a discard.

---

## 6. Strongest assets by category (recommendation, not yet approved for use)

**Website Design (12 available, showing the 8 strongest):** Elite Labs & Logistics, ACC &
Engineering, Athena Wellness Consultants, Dr. Saberinia, Diamond Home Care Agency*, Aloha Coastal
Notary, Senior Benefit Advisors, S&S Earthworx. (*Diamond Home Care Agency's imagery includes real
people — confirm photo rights first.)

**Brand Identity (12 available, showing the 8 strongest):** Thunder Team (best mockup variety — 3D,
apparel, paper), Senior Help, Susan's Home Care, DJRE/MAX Koh Samui, Ijeoma Realtor, Vicente Wedding
Notary, Caraga Affordable Properties, Smtooth Dentist.

**Social Media Design (10 available, showing the 8 strongest):** ALTS carousel outro + intro slides,
ALTS Notary Services post, Angel's Touch "What We Offer" graphic, ALTS "Stay Away From Drugs"
illustration, RIGHTSOUND SCHOOL flyer, IDDS hero banner, Angel's Touch hero banner.

**Motion / Product Commercials:** none suitable found outside the two ALTS videos already flagged
above (customer-testimonial style and exterior b-roll) — this folder is light on finished motion
work; Aurora/LUMORA/Nordiq (already on the site) remain the strongest motion assets available.

**Written testimonials (3–6 requested):** only 2 are attributable with real confidence today
(Dave Jean-Baptiste / Angel's Touch, and the Ijeoma Realtor screenshot). The other five need a name
and company confirmed from you before they can count toward the 3–6 target.

**Video testimonials (2–4 requested):** Triana Vicente (Vicente Wedding Notary) is the strongest —
named, on-camera, clear project link. The other four video testimonials need identity/consent
confirmed before they can be counted.

---

## 7. Proposed folder structure (not yet created)

```
public/portfolio/branding/
public/portfolio/websites/
public/portfolio/motion-design/
public/portfolio/product-commercials/
public/portfolio/social-media-design/
public/testimonials/screenshots/
public/testimonials/video/
public/testimonials/profile-images/
public/case-studies/[project-slug]/
```

No files have been moved into this structure yet — it's proposed for the integration phase, once
classifications are approved.

---

## 8. What's needed from you before integration can start

1. **Client names for the 6 unattributed written-testimonial screenshots** (`image.jpg`,
   `image(2).jpg`, `image(4).jpg`, `image(5).jpg`, `image(6).jpg`, `image(7).jpg`) — who each
   conversation was with, and whether you have permission to publish.
2. **Identity + consent for 3 unlinked video testimonials** (`lv_0_20240328140225.mp4`,
   `lv_0_20240402133300.mp4`, `FB_VID_5412491727880355431.mp4`).
3. **Consent confirmation for the 12 website-redesign clients** and the Angel's Touch / IDDS / Coach
   Eli social clients — before featuring any of them as named case studies (their work is real, but
   public display of a client's name/brand is a separate permission from having done the work).
4. **Photo rights** for the stock-looking people photography used in a few of the redesigns (Diamond
   Home Care Agency, Athena Wellness Consultants, Notary Signing Solutions before/after posts, the
   "Everything" hair-brand banners) — confirm whether these are licensed stock or need to be swapped
   before public reuse.
5. **A quick visual double-check** on the ~8 files marked `needsManualReview` at medium confidence
   due to filename/timestamp inference rather than direct re-view (mostly the
   `Orange Modern Elderly Care Desktop Prototype_*` dated exports).
6. **Two ambiguous filename↔content pairs** in the ALTS/IDDS/Coach Eli social batch
   (`Purple and Pink Modern Pressure Washing...`, `White and Blue Modern Pharmacy Lab...`,
   `Encourage Positive Behaviours...`, `Pink & Gray Modern HIV Testing Flyer...`) — flagged in the
   JSON, worth a five-minute side-by-side check before publishing.
7. **Which hair/beauty brand** the "Everything_*" banner series belongs to (name not visible in the
   assets themselves) — needed before it can be used as a named portfolio piece, or it can be used
   generically without a name if that's acceptable.

---

## 9. Approval-phase update (this pass)

A second, narrower pass was completed on top of this inventory, per your instruction to proceed with
a limited, safe approval phase rather than resolving every open question yourself. Summary:

- **19 portfolio assets + 1 testimonial shortlisted** as clearly OAB-made, clearly tied to a visible
  brand, free of private/sensitive information, and high enough quality for the site — capped at 6
  per category (Website Design, Brand Identity, Social Media Design) with only 1 in Motion/Product
  Commercials, since the folder is genuinely thin there. Full detail, thumbnails, and an
  approve/reject/needs-review control for each: **`docs/asset-review/index.html`** — open it directly
  in a browser (double-click, or drag into a browser window). It is a static local file, not part of
  the app, not deployed, not linked anywhere, and not in the sitemap (verified against a clean
  `npm run build` — it does not appear in `dist/`).
- Every shortlisted item still defaults to `needs-review` in the review page. Nothing was
  auto-approved — the dropdown is there for you to set, and the page doesn't save automatically since
  it's a static file (your decisions need to be told back to Claude, or noted here, to take effect).
- No files were moved, renamed, or deleted. No case studies, testimonials, or client names were added
  to the live site. `src/data/testimonials.ts` remains untouched and empty.

### Website redesign projects — grouped, with placement recommendations

Per-client recommendations for the 12 identified redesign projects (see §2 for the full asset list
per client). "Case-study strength" reflects how complete the available material is — not a decision
to build one, which you said explicitly to hold off on.

| Client | Best cover | Best hero | Before | After | Gallery | Case-study strength |
|---|---|---|---|---|---|---|
| Elite Labs & Logistics | `Website redesign laptop view.jpg` | same | square before/after post | `phone mockup web  redesign 2.png` | — | **Portfolio card + banner feature.** Cleanest desktop+mobile pair in the folder; no people-rights concerns beyond the stock model. |
| ACC & Engineering | `CONSTRUCTION WEBSITES REDESIGN 3.jpg` | same | square before/after post | `phone mozk up 4.png` | — | **Portfolio card + banner feature.** Zero privacy concerns (no people at all) — safest of the twelve. |
| Dr. Saberinia | square before/after post | `website redesign1 for phone.jpg` | included in square post | mobile crop | — | Portfolio card only — single before/after pair, thinner gallery than Elite Labs/ACC. |
| Senior Benefit Advisors | `NGO_20240514_121433_0000.jpg` | same | square before/after post | mobile crop | — | Portfolio card only. |
| SaboCart Transportation & Logistics LLC | square before/after post | same | included | mobile crop | — | Portfolio card only — no people, clean. |
| Unique Home Care Options | square AFTER-only post | same | not available | included | — | Portfolio card only — no before image exists for this one. |
| Perez Accounting and Tax | square before/after post | same | included | mobile crop | 2 unconfirmed desktop exports (medium confidence) | Portfolio card only. |
| Aloha Coastal Notary Inc. | square before/after post | same | included | mobile crop | 1 unconfirmed desktop export | Portfolio card only. |
| S&S Earthworx LLC | square before/after post | same | included | mobile crop | 1 unconfirmed desktop export | Portfolio card only — no people, clean. |
| Diamond Home Care Agency | square before/after post | same | included | mobile crop + 1 unconfirmed desktop export | — | **Hold** — before/after imagery shows real people; confirm photo rights before using anywhere. |
| Notary Signing Solutions | square before/after post | same | included | mobile crop + 1 unconfirmed desktop export | — | Portfolio card possible once the "before" people-photo is confirmed as stock. |
| Athena Wellness Consultants | `screenshot_1718752539266.png` (live site capture) | same | square before/after post | mobile crop + desktop export | — | **Hold** — before/after imagery shows an elderly couple stock(?) photo; confirm rights first. |

**Recommendation:** Elite Labs & Logistics and ACC & Engineering are the two strongest candidates for
the Website Design portfolio banner's dominant desktop preview, specifically because they have zero
photo-rights ambiguity — every other asset in the banner composition should probably be pulled from
this pair plus Dr. Saberinia or SaboCart for the smaller preview slots.

## 10. Files created this pass

- `docs/oab-asset-inventory.md` (this file)
- `src/data/asset-review.json` (127 structured entries, `publicationStatus: "needs-review"` on every
  one)
- `docs/asset-review/index.html` — private local-only visual review page (20 cards: 19 shortlisted
  assets + 1 shortlisted testimonial). Not part of the app, not deployed, not linked from the site,
  not in the sitemap.
- `docs/asset-review/thumbs/*.jpg` — 20 small (500px) derived thumbnail copies used by the review
  page. Originals in the source folder are untouched.

Nothing else was created, moved, renamed, or deleted. The source folder
`OAB works and testimonial` is untouched (still 127 files, verified after every pass).
