# Animated Select Dropdown

A fully custom-built animated dropdown menu crafted with pure HTML, CSS, and JavaScript — no libraries, no frameworks. Designed to replace the default browser `<select>` element with a smooth, visually engaging experience that catches the eye and demonstrates strong front-end fundamentals.

---

## What This Project Does

This project replaces the browser's default dropdown with a completely custom-built component. When a user clicks the dropdown, a list of destination options animates into view. Selecting an option triggers a visual transition on the selected value display, and a result card below updates to show the chosen destination along with a description. Clicking outside the dropdown closes it automatically.

---

## Features

**1. Custom Select Component**
The native `<select>` element is replaced entirely. The dropdown is built using `div` elements, giving full control over styling and animation that native selects do not allow.

**2. Animated Open / Close**
The options list animates smoothly when it opens and closes, using CSS transitions. The chevron arrow icon rotates 180° when the dropdown is open, providing a clear visual indicator of state.

**3. Dynamically Generated Options**
All dropdown options are generated through JavaScript — no hard-coded `<option>` tags in HTML. The options array in `script.js` drives the entire list, making it easy to update content without touching the HTML.

**4. Selected Value Display**
The currently selected option is shown inside the dropdown trigger area. Before any selection, a placeholder text "Select an option" is displayed.

**5. Result Card**
Below the dropdown sits a result card that updates on every selection. It shows the selected destination name and a short description associated with that destination, giving immediate visual feedback to the user.

**6. Click-Outside Detection**
A global click listener on the `document` ensures the dropdown closes when the user clicks anywhere outside it — a standard UX pattern for dropdowns.

**7. Font Awesome Icons**
The chevron arrow (`fa-chevron-down`) and the map pin icon (`fa-map-marker-alt`) are pulled from Font Awesome 6.4.0 via CDN, adding polish without any custom SVGs.

**8. Hover Effects on Options**
Each individual option in the list has its own hover state that highlights on mouse-over, improving click accuracy and UX.

**9. Instruction Text**
A small hint area at the bottom reminds the user to click the dropdown to see the animations in action — helpful for a UI that is meant to be demonstrated.

---

## Tech Stack

| Technology | Role |
|---|---|
| HTML5 | Structure and markup |
| CSS3 | Styling, transitions, and animations |
| JavaScript (Vanilla) | Logic, DOM manipulation, dynamic option generation |
| Font Awesome 6.4.0 | Icons (via CDN) |

---

## Project Structure

```
Animated_DropDown/
├── index.html      # Main HTML file with the dropdown structure
├── styles.css      # All CSS including transitions, layout, and result card styles
└── script.js       # Dropdown logic, option generation, click-outside detection
```

---

## How to Run

1. Clone the repository
   ```bash
   git clone https://github.com/tripathipawan/Animated_DropDown.git
   ```
2. Open `index.html` directly in any modern browser — no build step or server required.

---

## Repository

[https://github.com/tripathipawan/Animated_DropDown](https://github.com/tripathipawan/Animated_DropDown)
