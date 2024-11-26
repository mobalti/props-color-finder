import chroma from 'chroma-js';

export type ColorMap = Record<string, string>;

export function formatOklchColor([L, C, H]: number[]): string {
  const formattedL = `${(L * 100).toFixed(0)}%`;
  const formattedC = C.toFixed(2);
  const formattedH = isNaN(H) ? '0' : H.toFixed(0);

  return `oklch(${formattedL} ${formattedC} ${formattedH})`;
}

export function findClosestColor(pickedColor: string, colors: ColorMap, useLab: boolean): string {
  const pickedColorRgb = chroma(pickedColor);

  let closestColor = '';
  let minDistance = Infinity;

  for (const [name, hex] of Object.entries(colors)) {
    const targetColor = chroma(hex);
    const distance = useLab
      ? chroma.distance(pickedColorRgb, targetColor, 'lab')
      : chroma.distance(pickedColorRgb, targetColor, 'rgb');

    if (distance < minDistance) {
      minDistance = distance;
      closestColor = name;
    }
  }

  return closestColor;
}

export function convertHexToOklch(hexColor: string): string {
  const oklchArray = chroma(hexColor).oklch();
  return formatOklchColor(oklchArray);
}
