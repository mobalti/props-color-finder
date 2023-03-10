function getDistance(aColor, bColor) {
  const aCol = hexToRgb(aColor);
  const bCol = hexToRgb(bColor);

  const redDiff = aCol.red - bCol.red;
  const greenDiff = aCol.green - bCol.green;
  const blueDiff = aCol.blue - bCol.blue;

  // https://en.wikipedia.org/wiki/Color_difference
  return Math.sqrt(
    redDiff * redDiff + greenDiff * greenDiff + blueDiff * blueDiff
  );
}

function hexToRgb(hex) {
  const red = parseInt(hex.slice(1, 3), 16);
  const green = parseInt(hex.slice(3, 5), 16);
  const blue = parseInt(hex.slice(5, 7), 16);

  return { red, green, blue };
}

function getTextColor(color) {
  return parseInt(color.replace(/\D*/, '')) > 5 ? 'dark' : '';
}

function findClosestColor(targetColor, srcMapColors) {
  let closestColor = null;
  let closestDistance = Number.MAX_VALUE;
  for (let color of srcMapColors.keys()) {
    let distance = getDistance(color, targetColor);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestColor = color;
    }
  }

  return srcMapColors.get(closestColor);
}

export { findClosestColor, getTextColor };
