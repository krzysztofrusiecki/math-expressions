const {
  getCoefficients,
  createHtmlExpression,
  createSingleExpression,
} = require("./functions.js");

// selectors
const result = document.querySelector(".result");
const firstInput = document.querySelector("input");
const secondInput = document.querySelector("input + input");
const addButton = document.querySelector("button");

// event listeners
addButton.addEventListener("click", (event) =>
  addExpressions(event, firstInput.value, secondInput.value)
);

// functions
function addExpressions(event, inputOne, inputTwo) {
  event.preventDefault();

  // values are exponent: coefficient pairs
  const values = {};
  const finalExpression = [];

  try {
    if (
      !inputOne.match(/^((-)?(\d)*(x)?(\^)?(\d)*(\ )?(\+)?(\ )?)*$/gm) ||
      !inputTwo.match(/^((-)?(\d)*(x)?(\^)?(\d)*(\ )?(\+)?(\ )?)*$/gm) ||
      inputOne === "" ||
      inputTwo === ""
    ) {
      throw new Error("Not valid expression");
    } else {
      // get rid of spaces and split string by '+'
      const firstExpression = inputOne.replace(/ /gi, "").split("+");
      const secondExpression = inputTwo.replace(/ /gi, "").split("+");

      // get [coefficient, exponent] pairs
      const firstFactors = getCoefficients(firstExpression);
      const secondFactors = getCoefficients(secondExpression);

      // add factors to object strucure like: 'exponent': coefficient; if exponent exists, add values
      if (
        firstFactors.includes[undefined] ||
        secondFactors.includes[undefined]
      ) {
        throw new Error("Not valid expression");
      }
      firstFactors.forEach((item) => {
        if (Object.keys(values).includes(item[1])) {
          values[item[1]] = values[item[1]] + item[0];
        } else {
          values[item[1]] = item[0];
        }
      });

      secondFactors.forEach((item) => {
        if (Object.keys(values).includes(item[1])) {
          values[item[1]] = values[item[1]] + item[0];
        } else {
          values[item[1]] = item[0];
        }
      });

      // sort data keys in order to render expressions with descending powers
      let keys = Object.keys(values).sort((a, b) => b - a);

      // create expression string
      for (let i = 0; i < keys.length; i++) {
        if (values[keys[i]] === 0) continue;
        if (i + 1 !== keys.length) {
          finalExpression.push(
            `${createSingleExpression(values[keys[i]], keys[i])} + `
          );
        } else {
          finalExpression.push(
            `${createSingleExpression(values[keys[i]], keys[i])}`
          );
        }
      }
    }
  } catch (error) {
    alert(`${error}, try Ax^a, ex. -2x^-3`);
    console.log(error);
  }

  result.innerHTML = createHtmlExpression(finalExpression.join(""));
  return finalExpression.join("");
}
