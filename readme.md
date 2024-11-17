# number-to-words-inr

A lightweight utility to convert numbers into Indian Rupee words, following the Indian numbering system (units, thousands, lakhs, crores). Ideal for use in invoices, checks, financial reports, and other applications requiring numeric amounts in words.

## Features

- Supports the Indian numbering system up to thousand crore.
- Handles edge cases like 0 and large numbers gracefully.
- Outputs results in a human-readable format.

## Installation

Install the package via npm:

```bash
npm install number-to-words-inr
```

## Usage

Import the function and use it in your application.

```javascript
const numberToINRWords = require("number-to-words-inr");

console.log(numberToINRWords(12345)); // "twelve thousand three hundred and forty-five"
console.log(numberToINRWords(0)); // "zero"
console.log(numberToINRWords(987654321)); // "ninety-eight crore seventy-six lakh fifty-four thousand three hundred and twenty-one"
```

## API

`numberToINRWords(num: number): string`

Converts a number to its equivalent in Indian Rupee words.

### Parameters

- `num` (number): The number to convert.

### Returns

- `string`: The number in words.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

## Acknowledgements

Inspired by the Indian numbering system and designed for ease of use in financial applications.

## Author

Harshit Sharma

Feel free to suggest improvements or ask questions on the GitHub repository.
