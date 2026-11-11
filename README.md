# Vai portfolio website — edit guide

## Files to upload to GitHub
Upload the **contents of this folder**, not the ZIP itself. Keep this structure:

```
index.html
achievements.html
styles.css
js/chart.js
assets/bank-team.jpg
assets/bank-dinner.jpg
assets/team-lunch.jpg
assets/cultural-event.jpg
assets/arangetram-orange.jpg
assets/arangetram-blue.jpg
assets/rangila-team.jpg
README.md
```

## Editing WITHOUT coding experience
1. Open GitHub and go to your repository.
2. Click `index.html` for your home page or `achievements.html` for your second page.
3. Click the pencil icon (Edit this file).
4. Find the sentence you want to change and edit **only the words between the HTML tags** (for example, between `<p>` and `</p>`).
5. Click **Commit changes**. GitHub Pages automatically republishes your changes.

For bigger edits, install **Visual Studio Code** and select File > Open Folder to open this website folder. Then edit the files and upload the changed files to GitHub.

## How to replace a photo
1. Add a new JPG/PNG to the `assets` folder (example: `my-new-photo.jpg`).
2. In `achievements.html` find an image tag such as `<img src="assets/bank-team.jpg" ...>`.
3. Replace `bank-team.jpg` with `my-new-photo.jpg`, and update its `alt` description.
4. Upload the new photo and edited HTML to GitHub. File names must match exactly, including capitalization.

## Colors
Open `styles.css`. At the very beginning, `--bg` controls the background, `--ink` the main text color, `--accent` the orange accent. Change the hex codes to customize the look.

## D3 chart
Open `js/chart.js` and edit the `categories` array at the beginning. Each `theme` is a bar label. Its `examples` array determines the count and the hover/click details. Save and reupload.

## Previewing
Double-click `index.html` to preview in a browser. The D3 chart on the second page requires an internet connection to download its library. For best testing use VS Code's Live Server extension or a local web server.

## Publish via GitHub Pages
Create a public repository (for example `vai-portfolio`), upload all files, and open Settings > Pages > Build and deployment > Deploy from a branch > `main` > `/(root)` > Save. Your URL will be `https://YOUR-USERNAME.github.io/vai-portfolio/`.

## Privacy
The email address and phone number in the website are publicly visible to anyone once the site is published. Remove or adjust these if you prefer not to share your phone publicly.

## Notes
The arangetram and cultural descriptions come from the information you provided. The chart is a personal categorical visualization, not a statistical evaluation. The website is distinct in layout, content, and chart from the provided classmate example.


## Updated portrait
The homepage photo is `assets/vai-portrait.jpg`, already referenced by `index.html`. To replace it later, upload a new image into `assets/` and edit the `src` attribute in `index.html`, or replace the image with the same exact filename.
