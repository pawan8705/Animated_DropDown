# Animated Select Dropdown

A fully custom-built animated dropdown menu built from scratch using HTML, CSS, and JavaScript — no UI library, no framework, no external dependency beyond Font Awesome icons. This project replaces the browser's default `<select>` element with a polished, interactive component that demonstrates clean front-end fundamentals in practice.

---

## What This Project Does

When a user clicks the dropdown trigger, a styled list of travel destination options animates smoothly into view with no native browser select in sight. Selecting any option transitions the displayed value inside the trigger, closes the list, and updates a result card below with that destination's name and description. Clicking anywhere outside the component closes it automatically.

---

## Features

**1. Fully Custom Select Component**
The native `<select>` element is replaced entirely with `div`-based markup, giving complete control over styling, transitions, and behavior that browser-native selects simply do not allow.

**2. Smooth Open / Close Animation**
The options container opens and closes with CSS transitions configured in `styles.css`. The animation makes the dropdown feel fluid rather than an abrupt on/off toggle.

**3. Chevron Arrow Rotation**
The Font Awesome `fa-chevron-down` icon in the trigger rotates 180° when the dropdown opens and snaps back on close — a small but clear visual signal of the current state.

**4. Dynamically Generated Options**
No option items are hard-coded in HTML. The `script.js` file holds a JavaScript array of destination objects, and all option elements are generated at runtime by looping through that array using `document.createElement`. Adding or removing a destination only requires editing the array — the HTML never changes.

**5. Placeholder Text Before Selection**
Before the user picks anything, the trigger displays "Select an option" as placeholder text. After a selection is made, this updates to the chosen destination name.

**6. Result Card with Destination Description**
A result card sits below the dropdown. On each selection, it updates to show the destination name (with a `fa-map-marker-alt` pin icon) and a short description string pulled from the same data array used to generate the options list.

**7. Click-Outside Detection**
A `click` event listener attached to the `document` checks on every click whether the target is inside or outside the dropdown. If outside, the options container closes — a standard UX pattern that prevents the dropdown from staying open when the user moves on.

**8. Per-Option Hover States**
Every item in the options list has a distinct CSS hover state, giving clear visual feedback about which option the cursor is currently over before clicking.

**9. Font Awesome Icons (v6.4.0 via CDN)**
Two icons are used: `fa-chevron-down` in the trigger and `fa-map-marker-alt` in the result card. Both are loaded from the Font Awesome 6.4.0 CDN — no image files or custom SVGs needed.

**10. Instruction Hint Text**
A small instructional note at the bottom of the page prompts the user to click the dropdown, which is useful since the animation is the primary point of the component.

---

## Tech Stack

| Technology | Role |
|---|---|
| HTML5 | Component structure — trigger, options container, result card, instruction text |
| CSS3 | Open/close transitions, hover states, layout, and all visual styling |
| JavaScript (Vanilla) | Destination data array, dynamic option generation, click handling, open/close logic, click-outside detection |
| Font Awesome 6.4.0 | Chevron and map pin icons via CDN |

---

## Project Structure

```
Animated_DropDown/
├── index.html      # Dropdown layout — trigger div, options container, result card, instruction
├── styles.css      # All styles including transitions, hover states, selected value, result card
└── script.js       # Destination data array, option generation loop, all event listeners
```

---

## How to Run

1. Clone the repository
   ```bash
   git clone https://github.com/tripathipawan/Animated_DropDown.git
   ```
2. Open `index.html` directly in any modern browser — no build step, no server, and nothing to install.

---

## Repository

[https://github.com/tripathipawan/Animated_DropDown](https://github.com/tripathipawan/Animated_DropDown)
