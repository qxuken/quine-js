let code = (inner) => `${inner} console.log(code(${JSON.stringify(inner)}));`; console.log(code("let code = (inner) => `${inner} console.log(code(${JSON.stringify(inner)}));`;"));
