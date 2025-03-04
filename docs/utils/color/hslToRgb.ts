export function hslToRgb(h: number, s: number, l: number) {
  h /= 360
  s /= 100
  l /= 100
  const C = (1 - Math.abs(2 * l - 1)) * s
  const X = C * (1 - Math.abs(((h * 6) % 2) - 1))
  let r: number, g: number, b: number
  if (h * 6 < 1) [r, g, b] = [C, X, 0]
  else if (h * 6 < 2) [r, g, b] = [X, C, 0]
  else if (h * 6 < 3) [r, g, b] = [0, C, X]
  else if (h * 6 < 4) [r, g, b] = [0, X, C]
  else if (h * 6 < 5) [r, g, b] = [X, 0, C]
  else [r, g, b] = [C, 0, X]
  const m = l - C / 2
  return [Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255)]
}
