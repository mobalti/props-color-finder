# Props Color Finder

**Props Color Finder** is a Progressive Web Application (PWA) designed to help users find the closest color match from the [Open Props color palette](https://open-props.style/#colors). Additionally, it provides the ability to match [CSS's built-in named colors](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color) and convert colors to the [OKLCH color space](https://developer.chrome.com/docs/css-ui/access-colors-spaces#oklch).

## Perceptual Color Matching Mode (LAB)

By default, the app uses RGB for color matching. You can switch to the LAB color space for perceptual matching:

- Toggle the checkbox labeled "Enable LAB Color Matching".
- When enabled, LAB color space ensures closer alignment with human visual perception.

## How to Use

### 1. Choose a Core Palette

Use the dropdown menu to select:

- **Open Props**: Find matches within the Open Props color palette (default).
- **Named CSS**: Match against CSS's built-in named colors.
- **HDR (OKLCH)**: Convert colors to the OKLCH color space.

### 2. Pick a Color

Use the color picker to select a color. The app will display the closest match or the OKLCH conversion based on your selected palette.

### 3. Enable LAB Matching (Optional)

Toggle the "Enable LAB Color Matching" checkbox to switch to the LAB color space for perceptual matching.

- Example:
  - In **RGB**, red `#FF0000` maps to **red-8** (Open Props).
  - In **LAB**, the same red maps to **orange-9**, reflecting human visual perception of brightness and saturation.

## Installation

Props Color Finder is a PWA and works seamlessly in your browser or as an installed app for offline use.

1. Visit the [Props Color Finder](https://props-color-finder.netlify.app/) website.
2. Install the app:
   - On desktop: Click the install icon in your browser's address bar.
   - On mobile: Use the "Add to Home Screen" option in your browser.

## Accessibility

Props Color Finder prioritizes accessibility:

- All inputs are keyboard-navigable for seamless usability.
- Labels and ARIA attributes ensure compatibility with screen readers.

## License

Props Color Finder is distributed under the MIT License.
