/**
 * ## - Warning: Usage requires proper context scope
 * ```ts
 *  const runMyNumRandomiser: () => number = numberRandomiser();
 *  const myRandomDates = Array(20);
 *  for (let i = 0; i < 20; i++) {
 *    myRandomDates[i] = getRandomDateWithin(minDate, maxDate, runMNumRandomiser());
 *  }
 * // Otherwise all the random dates will be the same.. -TODO: Investigate
 * ```
 * Seed random dates within a given range.
 * @param minimum The minimum of the range
 * @param maximum Maximum date range to randomise within.
 * @param The random number. Magic randomiser function in local outside this scope. Called to advance each time
 * @returns a date
 */
export function getRandomDateWithin(
  minimum: Date,
  maximum: Date,
  randomDecimalFraction: number
): Date {
  return new Date(
    minimum.getTime() +
      randomDecimalFraction * (maximum.getTime() - minimum.getTime())
  );
}
/**
 * Years to milliseconds
 *
 * // function curriedMultiplyNumbers();
 * @param years to convert into milliseconds
 * @returns to milliseconds
 */
export function getMillisecondsFromYears(years: number): number {
  const days: number = getDaysFrom(years);
  const hours: number = getHoursFrom(days);
  const minutes: number = getMinutesFrom(hours);
  const seconds: number = getSecondsFrom(minutes);
  const milliseconds: number = getMillisecondsFrom(seconds);

  return milliseconds;
}

// tslint:disable no-magic-numbers comment-format
// export function yearsToDays(years: number): number {
//     return years * 365.25; // 365.25?...
// }
// export function daysToHours(days: number): number {
//     return days * 24;
// }
// export function hoursToMinutes(hours: number): number {
//     return hours * 60;
// }
// export function minutesToSeconds(minutes: number): number {
//     return minutes * 60;
// }
// export function secondsToMilliseconds(seconds: number): number {
//     return seconds * 1000;
// }

/**
 * Gets days from
 * @param years The number of years (to convert from)
 * @returns days from
 */
export function getDaysFrom(years: number): number {
  return years * 365.25; // 365.25?...
}
/**
 * Gets hours from
 * @param days The number of days (to convert from)
 * @returns hours from
 */
export function getHoursFrom(days: number): number {
  return days * 24;
}
/**
 * Gets minutes from
 * @param hours The number of hours (to convert from)
 * @returns minutes from
 */
export function getMinutesFrom(hours: number): number {
  return hours * 60;
}
/**
 * Gets seconds from
 * @param minutes The number of minutes (to convert from)
 * @returns seconds from
 */
export function getSecondsFrom(minutes: number): number {
  return minutes * 60;
}
/**
 * Gets milliseconds from
 * @param seconds The number of seconds (to convert from)
 * @returns milliseconds from
 */
export function getMillisecondsFrom(seconds: number): number {
  return seconds * 1000;
}
// tslint:disable no-bitwise no-magic-numbers no-unsafe-any no-parameter-reassignment typedef prefer-const

/**
 * https://github.com/bryc/code/blob/master/jshash/PRNGs.md
 * Seedable random number generators.
 * The latest (as of May 2018) in the Xorshift-derivative series, Xoshiro family now offers 128-bit state generators
 * in 32-bit just like the original xorshift.
 * Comes in three variants: xoshiro128**, xoshiro128++ and xoshiro128+.
 * @param s seed
 *
 */
export const lcg = s => () =>
  ((2 ** 31 - 1) & (s = Math.imul(48271, s))) / 2 ** 31;

/**
 * Function alias.
 * @param seed the seed...
 */
export function rng(seed): () => number {
  return xoshiro128ss(seed, 9999, 9999, 9999);
}

/**
 * - Warning: this needs to be bound to a local this variable and called to advance the randomisation?
 * Numbers randomiser
 * @param [seed] z
 * @returns randomiser
 */
export function numberRandomiser(seed = 1337): () => number {
  // seed any 32-bit integer;
  const rand = jsf32(0xf1ea5eed, seed, seed, seed);
  // const rand = xoshiro128ss(0xf1ea5eed, seed, seed, seed);

  return rand;
}
/**
 * - Warning: This needs to be run in local context? use run() workaround ()();
 * Numbers randomiser
 * @param [seed] z
 * @returns randomiser
 */
export function jsf32(a: number, b: number, c: number, d: number) {
  return () => {
    a |= 0;
    b |= 0;
    c |= 0;
    d |= 0;
    let t = (a - ((b << 27) | (b >>> 5))) | 0;
    a = b ^ ((c << 17) | (c >>> 15));
    b = (c + d) | 0;
    c = (d + t) | 0;
    d = (a + t) | 0;

    return (d >>> 0) / 4294967296;
  };
}
/**
 * https://github.com/bryc/code/blob/master/jshash/PRNGs.md
 * Seedable random number generators.
 * The latest (as of May 2018) in the Xorshift-derivative series, Xoshiro family now offers 128-bit state generators
 * in 32-bit just like the original xorshift.
 * Comes in three variants: xoshiro128**, xoshiro128++ and xoshiro128+.
 *
 * Not sure why b c d. Empty obj box for operations?. Changing the a value seems to be main seed.
 *
 */
export function xoshiro128ss(
  a = 0xf1ea5eed,
  b: number,
  c: number,
  d: number
): () => number {
  return () => {
    let t = b << 9,
      r = a * 5;
    r = ((r << 7) | (r >>> 25)) * 9;
    c = c ^ a;
    d = d ^ b;
    b = b ^ c;
    a = a ^ d;
    c = c ^ t;
    // tslint:disable-next-line: no-unsafe-any
    d = (d << 11) | (d >>> 21);

    return (r >>> 0) / 4294967296;
  };
}

/**
 * _/https://github.com/bryc/code/blob/master/jshash/PRNGs.md
 */
// tslint:enable
