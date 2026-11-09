# Municipality of Taytay, Rizal — Website

An informational website for the Municipality of Taytay, Rizal (the Garments and Woodworks Capital of the Philippines). It has 8 pages, uses the colors of the official municipal seal, and contains real photos and researched data.

It is a **plain static website**: HTML files, images and two small JavaScript files. There is no build step and nothing to install. Open `index.html` in a browser and it works.

## Pages

| File | Page | What's on it |
|---|---|---|
| `index.html` | Home | Hero, photo strip, Taytay at a Glance fact sheet, history timeline, latest news, festivals and events, tourism highlights, photo album, contact |
| `about.html` | About Taytay | History timeline, vision and mission, the mayor, the municipal seal explained, photos |
| `government.html` | Local Government | Elected officials 2025–2028, municipal offices, how to request a service, transparency links |
| `barangays.html` | Barangays | The 5 barangays, with live search, population, Punong Barangay, hall address, contact and rescue numbers |
| `tourism.html` | Tourism | 6 places to visit, the HaMaKa Festival, a gallery and visit tips |
| `community.html` | Community | e-BOSS online services, citizen services, schools and hospitals, FAQ |
| `news.html` | News | News and announcements with All / News / Announcements filter, plus yearly celebrations |
| `contact.html` | Contact | Emergency hotlines, Municipal Hall address and hours, office directory |

## Folder structure

```
taytay-rizal-website/
├── index.html … contact.html   ← the 8 pages (all styles are inside each file)
├── assets/
│   ├── images/                 ← all 20 photos and the official seal
│   └── js/
│       ├── barangays.js        ← barangay data + search
│       └── news.js             ← news posts + filter tabs
├── docs/
│   ├── DESIGN-SYSTEM.md        ← colors, fonts, spacing, components
│   ├── DATA-AND-SOURCES.md     ← every fact used, where it came from, what to double-check
│   ├── IMAGES.md               ← every image, where it's used, alt text
│   └── page-text/              ← plain-text copy of every page's content
├── design-source/              ← original Claude Design files (*.dc.html + canvas.json), for reference only
├── CLAUDE.md                   ← instructions for Claude Code when you edit this repo
├── .nojekyll                   ← tells GitHub Pages to serve the files as-is
└── README.md
```

---

## Step by step: put it in your GitHub repo (GitHub Desktop)

Your repo `Upupapp/taytay-website` is already cloned on your computer, so you only need to copy the files in, commit and push.

### 1. Unzip
Unzip `taytay-rizal-website.zip`. You get a folder called `taytay-rizal-website`.

### 2. Open your repo folder
In **GitHub Desktop**, pick `taytay-website` as the current repository. Then go to **Repository → Show in Explorer** (Windows) or **Show in Finder** (Mac). This opens the cloned folder.

### 3. Copy the files in
Open the unzipped `taytay-rizal-website` folder. Select **everything inside it**, including the hidden `.nojekyll` and `.gitignore` files, and paste it into the repo folder.
- Windows: turn on hidden files with **View → Show → Hidden items** in File Explorer.
- Mac: press **Cmd + Shift + .** in Finder.
- `index.html` must end up at the **top level** of the repo, not inside a subfolder.
- If the repo already has a `README.md`, choose **Replace**.

### 4. Check it locally (optional)
Double-click `index.html` and click through all the pages in your browser.

### 5. Commit
Go back to GitHub Desktop. The **Changes** tab lists all the new files. Bottom-left:
- Summary: `Add Taytay municipal website`
- Click **Commit to main**

### 6. Push
Click **Push origin** at the top.

### 7. Turn on GitHub Pages (free hosting)
1. Open https://github.com/Upupapp/taytay-website in your browser.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Set **Branch** to `main` and the folder to `/ (root)`, then click **Save**.
5. Wait 1–2 minutes and refresh. The live link appears at the top:
   `https://upupapp.github.io/taytay-website/`

> GitHub Pages is free for public repositories. If the repo is private, you need a paid GitHub plan, or you can make the repo public.

### 8. Making changes later
Edit the files, using Claude Code in VS Code if you like. Then in GitHub Desktop: **Commit to main → Push origin**. The live site updates within a minute or two.

---

## Using Claude Code in VS Code

1. In GitHub Desktop, choose **Repository → Open in Visual Studio Code**.
2. Open the Claude Code panel. It reads `CLAUDE.md` automatically, so it already knows the structure, colors and rules.
3. Example requests:
   - "Check every page for broken links and images."
   - "Add a new news post to assets/js/news.js dated November 15, 2026, titled …"
   - "Update the San Juan Punong Barangay in assets/js/barangays.js to …"
   - "Replace the '#' placeholder links in the Transparency section of government.html with real URLs: …"
4. To preview while you edit, ask Claude Code to "start a local preview server". Or install the **Live Server** extension and click **Go Live**.

## Before publishing as an official site

Read `docs/DATA-AND-SOURCES.md`. It lists the items that should be confirmed with the Municipal Public Information Office: officials, barangay captains, office hours, the fiesta date, and image permissions.
