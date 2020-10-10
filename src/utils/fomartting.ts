const defaultPrecision = 3;

export function formatAsInteger(num: number, precision = defaultPrecision) {
  const floored = Math.floor(num);
  return floored < 10 ** (precision - 1) ? floored : floored.toPrecision(precision);
}

export function formatNumber(num: number, precision = defaultPrecision) {
  return num.toPrecision(precision);
}
