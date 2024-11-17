"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const numberToWordsINR = (num) => {
    if (num === 0)
        return "zero";
    const ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const scales = ["", "thousand", "lakh", "crore", "thousand crore"];
    const convertToWords = (n) => {
        if (n < 20)
            return ones[n];
        else if (n < 100)
            return tens[Math.floor(n / 10)] + (n % 10 ? ` ${ones[n % 10]}` : "");
        else if (n < 1000) {
            return (`${ones[Math.floor(n / 100)]} hundred` +
                (n % 100 ? ` and ${convertToWords(n % 100)}` : ""));
        }
        return "";
    };
    const splitByScale = (n) => {
        const parts = [];
        parts.push(n % 1000); // Units (less than a thousand)
        n = Math.floor(n / 1000);
        while (n > 0) {
            parts.push(n % 100); // Thousands, Lakhs, Crores, Thousand Crores
            n = Math.floor(n / 100);
        }
        return parts.reverse();
    };
    const parts = splitByScale(Math.floor(num));
    let words = "";
    for (let i = 0; i < parts.length; i++) {
        if (parts[i] > 0) {
            words += `${convertToWords(parts[i])} ${scales[parts.length - i - 1]} `;
        }
    }
    // const decimalPart = num % 1;
    // if (decimalPart > 0) {
    //   const decimalWords = convertToWords(Math.round(decimalPart * 100));
    //   words += `and ${decimalWords} paise`;
    // }
    return words.trim();
};
console.log(numberToWordsINR(123456789.12)); // twelve thousand three hundred and forty-five
exports.default = numberToWordsINR;
