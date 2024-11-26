import { describe, it, expect } from 'vitest';
import cssNamedColors from '../src/palettes/cssNamedColors.json';
import openPropsColor from '../src/palettes/openPropsColors.json';

import { findClosestColor, formatOklchColor } from '../src/utils';

describe('Utils - Color Matching', () => {
  it('should have 141 colors in the Named CSS palette', () => {
    expect(Object.keys(cssNamedColors).length).toBe(141);
  });

  it('should have 247 colors in the Open Props palette', () => {
    expect(Object.keys(openPropsColor).length).toBe(247);
  });
  describe('findClosestColor', () => {
    it('should find the correct closest color in Open Props using LAB', () => {
      const pickedColor = '#ff0000'; // Red
      const expectedClosestColor = '--orange-9';
      const result = findClosestColor(pickedColor, openPropsColor, true); // LAB mode
      expect(result).toBe(expectedClosestColor);
    });

    it('should find the correct closest color in Open Props using RGB', () => {
      const pickedColor = '#ff0000'; // Red
      const expectedClosestColor = '--red-8';
      const result = findClosestColor(pickedColor, openPropsColor, false); // RGB mode
      expect(result).toBe(expectedClosestColor);
    });

    it('should find the correct closest color in Named CSS using LAB', () => {
      const pickedColor = '#0069c2'; // Blue
      const expectedClosestColor = 'dodgerblue';
      const result = findClosestColor(pickedColor, cssNamedColors, true); // LAB mode
      expect(result).toBe(expectedClosestColor);
    });

    it('should find the correct closest color in Named CSS using RGB', () => {
      const pickedColor = '#0069c2'; // Blue
      const expectedClosestColor = 'darkcyan';
      const result = findClosestColor(pickedColor, cssNamedColors, false); // RGB mode
      expect(result).toBe(expectedClosestColor);
    });
  });

  describe('formatOklchColor', () => {
    it('should format a valid oklch color array into a CSS string', () => {
      const oklchArray = [0.75, 0.2, 210];
      const formattedColor = formatOklchColor(oklchArray);
      expect(formattedColor).toBe('oklch(75% 0.20 210)');
    });

    it('should handle NaN hue gracefully and return "oklch(L% C 0)"', () => {
      const oklchArray = [0.5, 0.1, NaN];
      const formattedColor = formatOklchColor(oklchArray);
      expect(formattedColor).toBe('oklch(50% 0.10 0)');
    });
  });
});
