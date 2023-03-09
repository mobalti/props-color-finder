import Colors from 'open-props/src/colors';

const getColorsMap = (obj) =>
  Object.entries(obj)
    .filter(([key]) => obj.hasOwnProperty(key))
    .reduce((map, [key, value]) => map.set(value, key), new Map());

const localColorsMap = getColorsMap(Colors);

export { localColorsMap };
