# Random Number Generator

This JavaScript code generates a random number within a specified range. It uses an HTML form with input fields for the minimum and maximum values, and a button to trigger the number generation.

## Usage

To use the random number generator, follow these steps:

1. Open the HTML file containing the code in a web browser.
2. Enter the desired minimum and maximum values in the input fields provided.
3. Click the "Generate" button.
4. The generated random number will be displayed in the designated result area.

## Code Explanation

The code consists of two main parts: HTML markup and JavaScript logic.

### HTML Markup

The HTML markup defines an input form and a result area. It contains the following elements:

- `min-input`: An input field for entering the minimum value.
- `max-input`: An input field for entering the maximum value.
- `generate`: A button to trigger the random number generation.
- `result`: An area to display the generated random number.

### JavaScript Logic

The JavaScript code handles the generation of the random number. It performs the following steps:

1. Retrieves the `min-input` and `max-input` elements from the HTML.
2. Extracts the numerical values entered in the input fields.
3. Retrieves the `result` element.
4. Checks if the minimum value is greater than the maximum value.
5. If the minimum value is greater, displays an error message in the `result` area.
6. If the minimum value is not greater, generates a random number within the specified range using the `Math.random()` and `Math.floor()` functions.
7. Updates the `result` area with the generated random number.

## Compatibility

This code is written in JavaScript and should be compatible with modern web browsers that support the HTML5 standard.

## License

This code is provided under the [MIT License](https://opensource.org/licenses/MIT). Feel free to modify and use it according to your needs.

## Contributions

Contributions are welcome! If you find any issues or have suggestions for improvement, please submit an issue or a pull request on the GitHub repository.

## Authors

- [AomSirawit(https://github.com/AomSirawit)
