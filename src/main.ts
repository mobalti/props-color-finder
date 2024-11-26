import './style.css';
import cssNamedColors from './palettes/cssNamedColors.json';
import opColors from './palettes/openPropsColors.json';
import { findClosestColor, convertHexToOklch } from './utils';

const formColorPalette = document.querySelector<HTMLFormElement>('#form-color-palette');
const formColorPicker = document.querySelector<HTMLFormElement>('#form-color-picker');
const resultSection = document.querySelector<HTMLElement>('#result');

const PALETTES = {
  NAMED_CSS: 'namedCSS',
  OPEN_PROPS: 'openProps',
  HDR: 'hdr',
};

type ColorMap = Record<string, string>;

let isHDRMode = false;
let mainColorList: ColorMap = opColors;
let useLabMode = false;

// Event: Palette Selection
formColorPalette?.addEventListener('change', handlePaletteChange);

// Event: Color Picking
formColorPicker?.addEventListener('change', handleColorPickerChange);

/** Handle palette selection */
function handlePaletteChange(e: Event) {
  const target = e.target as HTMLSelectElement;
  switch (target.value) {
    case PALETTES.NAMED_CSS:
      mainColorList = cssNamedColors;
      isHDRMode = false;
      break;
    case PALETTES.OPEN_PROPS:
      mainColorList = opColors;
      isHDRMode = false;
      break;
    case PALETTES.HDR:
      isHDRMode = true;
      break;
  }
  formColorPicker?.reset();
}

/** Handle color picker change */
function handleColorPickerChange(e: Event) {
  const target = e.target as HTMLInputElement;
  const pickedColor = target.value;

  if (isHDRMode) {
    const oklchColor = convertHexToOklch(pickedColor);
    displayResult(oklchColor, oklchColor);
  } else {
    const closestColorName = findClosestColor(pickedColor, mainColorList, useLabMode);
    const closestColorHex = mainColorList[closestColorName];
    displayResult(closestColorName, closestColorHex);
  }
}

/** Display the result in the DOM */
function displayResult(colorName: string, colorHex: string) {
  resultSection?.prepend(createPickedColorElement(colorName, colorHex));
}

/** Create a color element */
function createPickedColorElement(colorName: string, color: string): HTMLDivElement {
  const pickedColorDiv = document.createElement('div');
  pickedColorDiv.classList.add('picked-color');

  const colorSpan = document.createElement('span');
  colorSpan.classList.add('span-color');
  colorSpan.style.backgroundColor = color;

  const nameSpan = document.createElement('span');
  nameSpan.classList.add('color-name');
  nameSpan.textContent = colorName;

  pickedColorDiv.appendChild(colorSpan);
  pickedColorDiv.appendChild(nameSpan);

  return pickedColorDiv;
}

const distanceModeCheckbox = document.querySelector<HTMLInputElement>('#distance-mode');
distanceModeCheckbox?.addEventListener('change', (e) => {
  const target = e.target as HTMLInputElement;
  useLabMode = target.checked;
  formColorPicker?.reset();
});
