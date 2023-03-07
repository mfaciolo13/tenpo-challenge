// CODE EXTRACTED FROM `react-avatar` lib

// https://github.com/ambassify/react-avatar/blob/9e9c0a0d4a5f14b93933087e00fa84c101f16a0b/src/utils.js#L79
export function getRandomColorByString(value, colors = defaultColors) {
  // if no value is passed, always return transparent color otherwise
  // a rerender would show a new color which would will
  // give strange effects when an interface is loading
  // and gets rerendered a few consequent times
  if (!value) return "transparent";

  // value based random color index
  // the reason we don't just use a random number is to make sure that
  // a certain value will always get the same color assigned given
  // a fixed set of colors
  const colorIndex = _stringAsciiPRNG(value, colors.length);

  return colors[colorIndex];
}

const defaultColors = ["#00BAA4", "#D4F9F5"];

// https://en.wikipedia.org/wiki/Linear_congruential_generator
function _stringAsciiPRNG(value, m) {
  // Xn+1 = (a * Xn + c) % m
  // 0 < a < m
  // 0 <= c < m
  // 0 <= X0 < m

  const charCodes = [...value].map((letter) => letter.charCodeAt(0));
  const len = charCodes.length;

  const a = (len % (m - 1)) + 1;
  const c = charCodes.reduce((current, next) => current + next) % m;

  let random = charCodes[0] % m;
  for (let i = 0; i < len; i++) random = (a * random + c) % m;

  return random;
}
