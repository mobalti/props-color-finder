import 'open-props/style';
import 'open-props/normalize';
import './style.css';
import { findClosestColor, getTextColor } from './js/utils';
import { localColorsMap } from './js/localColors';
let colorWell;

const container = document.querySelector('#surface-samples');

window.addEventListener('load', startup, false);

function startup() {
  colorWell = document.querySelector('#colorWell');
  colorWell.addEventListener('change', updateAll, false);
  colorWell.select();
}

function updateAll(event) {
  let targetColor = event.target.value;
  let closesColor = findClosestColor(targetColor, localColorsMap);
  const surfaceColor = document.createElement('div');
  surfaceColor.className = 'surface-1';
  surfaceColor.innerText = closesColor;
  surfaceColor.style.backgroundColor = `var(${closesColor})`;
  surfaceColor.style.color = getTextColor(closesColor);
  container.prepend(surfaceColor);
}
