const {
  getCoefficients,
  createHtmlExpression,
  createSingleExpression,
} = require("./functions.js");

test("Gets coefficient and exponent", () => {
  const testedExpression = "2x^-3 + -2x + 5 + -x^2 + a"
    .replace(/ /gi, "")
    .split("+");
  const expected = [[2, "-3"], [-2, "1"], [5, "0"], [-1, "2"], undefined];
  const factors = getCoefficients(testedExpression);
  expect(factors).toEqual(expected);
});

test("Creates HTML for expression", () => {
  const testedExpression1 = "2x-3 + -2x + 5 + -x2";
  const testedExpression2 = "2x^-3 + -2x + 5 + -x^2";
  const expected = ["2x<sup>-3</sup> + -2x + 5 + -x<sup>2</sup>", undefined];
  const expression1 = createHtmlExpression(testedExpression1);
  const expression2 = createHtmlExpression(testedExpression2);
  expect([expression1, expression2]).toEqual(expected);
});

test("Creates prepared expression", () => {
  const testedExpression1 = [-1, "2"];
  const testedExpression2 = [undefined, undefined];
  const expected = ["-x2", undefined];
  const expression1 = createSingleExpression(...testedExpression1);
  const expression2 = createSingleExpression(...testedExpression2);
  expect([expression1, expression2]).toEqual(expected);
});
