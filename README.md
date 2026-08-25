# Pixel Palette Escape

Create a highly interactive browser game called:

🎨 PAINT & ESCAPE

Tagline

“Your picture. Your colors. Your challenge.”

The game should be a simple but addictive Color-by-Number game using the user's own uploaded image.light theme 3D 

The core gameplay must be:

UPLOAD IMAGE → CONVERT TO WHITE + BLACK OUTLINE → ADD NUMBERS TO COLOR REGIONS → SHOW NUMBER-BASED COLOR PALETTE → SELECT A COLOR → CLICK THE CORRESPONDING NUMBERED REGION → AUTOMATICALLY FILL THAT REGION → COMPLETE THE IMAGE → SHOW SCORE

Do NOT make this a normal drawing application.

The user should NOT use a brush, manually paint, drag the mouse, or color pixels.

The user only needs to:

1. Select a color
2. Click the matching numbered region

🏠 HOME SCREEN

Create a beautiful modern game landing page.

Main title:

🎨 PAINT & ESCAPE

Subtitle:

“Turn your picture into a color-by-number challenge.”

Buttons:

📸 UPLOAD YOUR IMAGE

🎮 PLAY DEMO

❓ HOW TO PLAY

Use a creative dark game-style interface with colorful glowing accents.

📤 IMAGE UPLOAD

When the user clicks:

UPLOAD YOUR IMAGE

Allow them to upload:

JPG

JPEG

PNG

WEBP

After uploading:

Show the uploaded image as a preview.

Display:

✓ IMAGE READY

Then show:

START GAME

The uploaded image must be processed locally in the browser.

Do NOT upload or send the user's image to a server.

🖼️ IMAGE CONVERSION

After clicking START GAME, automatically convert the uploaded image into a color-by-number coloring page.

The original image should be transformed into:

White background

Clean black outlines

Simplified regions

Number inside every color region

Example:

          ┌──────────────┐
          │      1       │
          │   1     1    │
          │              │
          │      2       │
          │   3     3    │
          │      4       │
          └──────────────┘


The result should look like a professional coloring-book page.

The original colors must NOT be visible on the coloring canvas.

🔢 NUMBERED COLOR REGIONS

Automatically detect major regions from the uploaded image.

Each region must have a unique number.

For example:

1
2
3
4
5
6

The number should be displayed clearly inside the corresponding region.

Example:

1 = Yellow
2 = Blue
3 = Green
4 = Red
5 = Purple
6 = Orange


The number should remain visible until that region is correctly completed.

After the correct color is applied:

Fill the entire region

Remove the number

Keep the black outline

Add a small completion animation

🎨 COLOR PALETTE

Create a color palette based on the generated numbered regions.

Display it clearly below the image.

Example:

COLORS

① 🟡
② 🔵
③ 🟢
④ 🔴
⑤ 🟣
⑥ 🟠


Each number must correspond to exactly one color.

The player must select a color before clicking a region.

Selected color should have:

Glow

Border

Scale animation

Example:

① 🟡 SELECTED

🎮 MAIN GAMEPLAY

The main game screen should contain:

LEFT / CENTER

🎨 COLORING IMAGE

White background with black outlines and numbered regions.

RIGHT / BELOW

🎨 COLOR PALETTE

Numbered colors.

🖱️ HOW COLORING WORKS

The user selects a color.

Example:

① Yellow

Then clicks any region containing number 1.

If correct:

✓ CORRECT!

Automatically fill the entire region with yellow.

Add:

Smooth fill animation

Small glow

Particle effect

+100 score

Then the number disappears.

The player can continue coloring the remaining numbered regions.

❌ WRONG COLOR

If the player selects:

① Yellow

but clicks a region containing:

③

Do NOT fill the region.

Show:

❌ WRONG COLOR

Add a small shake animation.

Deduct:

-10 points

The region must remain unchanged.

Do not reveal the correct color automatically.

🧩 REGION CLICKING

The user should be able to click anywhere inside a numbered region.

They should NOT have to click directly on the number.

For example:

┌─────────────────┐
│                 │
│       3         │
│                 │
│                 │
└─────────────────┘


Clicking anywhere inside this region should detect region 3.

The entire region should be filled automatically.

Use unique region IDs for accurate click detection.

📊 GAME PROGRESS

Show progress at the top.

Example:

PROGRESS

████████░░░░ 67%


And:

12 / 18 REGIONS COMPLETED

Update immediately after every correct region.

🏆 SCORE

Give:

+100 points for every correct region.

Give:

-10 points for every wrong color.

Display:

SCORE
7,500


Also display:

CORRECT: 12

WRONG: 2

⏱️ SIMPLE TIMER

Add a simple countdown:

05:00

Display:

TIME
04:32


When the timer reaches zero:

Display:

⏰ TIME'S UP!

Then show:

Completed regions

Remaining regions

Score

Accuracy

Give the option:

PLAY AGAIN

The timer should not prevent the player from understanding the game.

💡 SIMPLE HINT

Add one:

💡 HINT

button.

When clicked:

Highlight one unfinished region

Briefly show the color associated with that number

Limit:

3 HINTS

Using a hint should reduce the final score slightly.

🏁 GAME COMPLETION

When every region has been correctly colored:

Trigger a satisfying completion animation.

Then show:

🎉 MASTERPIECE COMPLETE!

Display the fully colored image.

Show:

REGIONS
18 / 18

ACCURACY
100%

WRONG CLICKS
2

HINTS USED
1

FINAL SCORE
9,450


🏆 RESULT RANK

Based on final accuracy:

👑 PERFECT ARTIST

95–100%

🎨 COLOR MASTER

85–94%

⭐ CREATIVE ARTIST

70–84%

🖌️ BEGINNER

50–69%

🔥 KEEP PRACTICING

Below 50%

🖼️ ORIGINAL VS FINAL IMAGE

After completing the game, show:

ORIGINAL IMAGE

The image uploaded by the user.

YOUR MASTERPIECE

The completed color-by-number image.

Place them side-by-side.

Add a simple comparison slider if possible.

📥 DOWNLOAD

Add:

DOWNLOAD MY ART

Download only the completed colored artwork as a PNG.

The downloaded image must contain:

Final colors

Black outlines

No numbers

No game UI

No buttons

🔄 PLAY AGAIN

Buttons:

🎮 PLAY AGAIN

📸 UPLOAD NEW IMAGE

🏠 HOME

PLAY AGAIN should restart the same image with:

New timer

Score reset

Regions reset

Numbers visible again

UPLOAD NEW IMAGE should allow the user to select another picture.

🎨 VISUAL DESIGN

Create a premium digital coloring game interface.

Style:

Dark background around the game

White coloring canvas

Black image outlines

Bright colorful palette

Neon accent effects

Glassmorphism cards

Rounded buttons

Smooth transitions

Subtle particles

Clean typography

The coloring image must always be the main focus.

Do NOT overload the interface with unnecessary features.

📱 RESPONSIVE DESIGN

Desktop:

┌──────────────────────────┬─────────────────┐
│                          │                 │
│     COLORING IMAGE       │   COLOR        │
│                          │   PALETTE       │
│     WHITE + BLACK        │                 │
│     NUMBERED REGIONS     │   ① 🟡         │
│                          │   ② 🔵         │
│                          │   ③ 🟢         │
│                          │   ④ 🔴         │
└──────────────────────────┴─────────────────┘


Mobile:

Timer + Score

Coloring Image

Color Palette

Progress

Hint

Make all buttons and colors touch-friendly.

Support:

Mouse

Touch

Pointer Events

🛠️ TECHNOLOGY

Use only:

HTML5

CSS3

Vanilla JavaScript

Use:

HTML Canvas

FileReader API

Canvas ImageData

Pointer Events

LocalStorage

No backend is required.

The user's image should be processed locally whenever possible.

💾 SIMPLE LOCAL STORAGE

Save only game statistics:

Best score

Best accuracy

Number of completed games

Display:

🏆 BEST SCORE

Example:

BEST SCORE
9,850

BEST ACCURACY
100%

GAMES COMPLETED
8


🚨 MOST IMPORTANT GAME LOGIC

The final implementation MUST follow this exact interaction:

STEP 1

User uploads a picture.

STEP 2

Convert the picture into:

WHITE BACKGROUND + BLACK OUTLINES + NUMBERED REGIONS

STEP 3

Generate a limited color palette.

Example:

1 → Yellow

2 → Blue

3 → Green

4 → Red

STEP 4

User selects a color.

STEP 5

User clicks a numbered region.

STEP 6

If the selected color matches the region:

Automatically fill the complete region.

STEP 7

If the color is wrong:

Do not fill it. Show WRONG COLOR.

STEP 8

Continue until every region is colored.

STEP 9

Show:

FINAL ART + SCORE + ACCURACY + TIME

❌ DO NOT ADD

Do NOT add:

Brush tool

Eraser

Manual painting

Brush size

Free drawing

Pixel-by-pixel painting

Complicated editing tools

Backend

Login

User accounts

Unnecessary menus

This is NOT an image editor.

It is a:

🎨 COLOR-BY-NUMBER GAME

The experience should be:

Upload → Number → Select Color → Click → Auto Fill → Complete → Score

Make it simple, fun, smooth, visually attractive, and genuinely playable.light theme and 3D element

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/341c75a0-9756-4b9e-a309-b9c99ad26f4b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
