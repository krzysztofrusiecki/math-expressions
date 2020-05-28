exports.getCoefficients = (expressionArray) => {
  return expressionArray.map((expression) => {
    // item = Ax^a, A = -/+, a = -/+

    if (!expression.match(/^((-)?(\d)*(x)?(\^)?(\d)*(\ )?(\+)?(\ )?)*$/gm)) {
      return undefined;
    } else {
      let coefficient, exponent;
      // expression has x
      const hasX = expression.includes("x");
      // expression has x^<number>
      const isPower = expression.match(/x\^(-)?(\d)+$/m);
      // get coefficient
      if (hasX) {
        coefficient = expression.slice(0, expression.indexOf("x"));
      } else {
        coefficient = expression;
      }
      // get exponent
      if (isPower && hasX) {
        exponent = expression.slice(
          expression.indexOf("x") + 2,
          expression.length
        );
      } else if (hasX && !isPower) {
        exponent = 1;
      } else if (!hasX) {
        exponent = 0;
      }
      // if coefficient = '-' | ''
      if (isNaN(parseFloat(coefficient))) {
        coefficient = coefficient + "1";
      }

      return [parseFloat(coefficient), exponent.toString()];
    }
  });
};

exports.createHtmlExpression = (expression) => {
  // insert <sup> tags to expression for HTML text formatting
  if (
    expression.includes("^") ||
    !expression.match(/^((-)?(\d)*(x)?(\^)?(\d)*(\ )?(\+)?(\ )?)*$/gm)
  ) {
    return undefined;
  } else {
    expression = expression.split("+");
    let newExpression = "";
    newExpression = expression.map((item, iter) => {
      item = item.trim();
      const hasX = item.includes("x");
      const positionOfX = !hasX ? -1 : item.indexOf("x");
      const length = expression.length;

      if (positionOfX !== -1 && positionOfX + 1 !== item.length) {
        const exp = `${iter === 0 ? "" : " "}${item.slice(
          0,
          positionOfX + 1
        )}<sup>${item.slice(positionOfX + 1, item.length)}</sup>${
          iter === length - 1 ? "" : " +"
        }`;
        return exp;
      } else {
        const exp = `${iter === 0 ? "" : " "}${item}${
          iter === length - 1 ? "" : " +"
        }`;
        return exp;
      }
    });

    return newExpression.join("");
  }
};

exports.createSingleExpression = (coefficient, exponent) => {
  // creates expression in form: Axa
  if (typeof coefficient === "undefined" || typeof exponent === "undefined") {
    return undefined;
  } else {
    let expression = "";
    coefficient = coefficient === 1 ? "" : coefficient;
    coefficient = coefficient === -1 ? "-" : coefficient;
    switch (exponent) {
      case "0":
        expression = coefficient;
        break;
      case "1":
        expression = coefficient + "x";
        break;
      default:
        expression = coefficient + "x" + exponent;
        break;
    }

    return expression;
  }
};
