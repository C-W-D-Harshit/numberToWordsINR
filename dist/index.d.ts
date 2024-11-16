/**
 * Converts a given number to its equivalent in Indian Rupee words.
 *
 * @param num - The number to be converted to words.
 * @returns The number in words as a string.
 *
 * @example
 * ```typescript
 * numberToINRWords(12345); // returns "twelve thousand three hundred and forty-five"
 * ```
 *
 * The function handles numbers up to "thousand crore".
 * It uses arrays to map numbers to their word equivalents for ones, tens, and scales.
 * The number is split into parts based on the Indian numbering system (units, thousands, lakhs, crores).
 * Each part is then converted to words and combined to form the final result.
 */
export declare const numberToINRWords: (num: number) => string;
