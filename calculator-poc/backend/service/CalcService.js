const sum = (req, res) => {
  const { firstNum, secondNum } = req.params;

  const result = Number(firstNum) + Number(secondNum);

  return res.status(200)
            .json({firstNum: `${firstNum}` ,
                operation: `+`,
                secondNum: `${secondNum}`,
                result: `${result}`
            })
}

const sub = (req, res) => {
  const { firstNum, secondNum } = req.params;

  const result = Number(firstNum) - Number(secondNum);

  return res.status(200)
            .json({firstNum: `${firstNum}` ,
                operation: `-`,
                secondNum: `${secondNum}`,
                result: `${result}`
            })
}

const mul = (req, res) => {
  const { firstNum, secondNum } = req.params;

  const result = Number(firstNum) * Number(secondNum);

  return res.status(200)
            .json({firstNum: `${firstNum}` ,
                operation: `*`,
                secondNum: `${secondNum}`,
                result: `${result}`
            })
}

const div = (req, res) => {
  const { firstNum, secondNum } = req.params;

  const result = Number(firstNum) / Number(secondNum);

  return res.status(200)
            .json({firstNum: `${firstNum}` ,
                operation: `/`,
                secondNum: `${secondNum}`,
                result: `${result}`
            })
}

module.exports = {
  sum,
  sub,
  mul,
  div
};
// server.get('/calculator/sum/:firstNum/:secondNum', (req, res) => {
//   const { firstNum } = req.params;
//   const { secondNum } = req.params;
//   const operation = "sum";
//   res.json(calc(operation, firstNum, secondNum));
// })

// server.get('/calculator/sub/:firstNum/:secondNum', (req, res) => {
//   const { firstNum } = req.params;
//   const { secondNum } = req.params;
//   const operation = "sub";
//   res.json(calc(operation, firstNum, secondNum));
// })

// server.get('/calculator/mul/:firstNum/:secondNum', (req, res) => {
//   const { firstNum } = req.params;
//   const { secondNum } = req.params;
//   const operation = "mul";
//   res.json(calc(operation, firstNum, secondNum));
// })

// server.get('/calculator/div/:firstNum/:secondNum', (req, res) => {
//   const { firstNum } = req.params;
//   const { secondNum } = req.params;
//   const operation = "div";
//   res.json(calc(operation, firstNum, secondNum));
// })

// function calc(operation, firstNum, secondNum) { 
//   var result;
//   var operationSimbol;
//   switch(operation) {
    
//     case 'sum':
//       result = Number(firstNum) + Number(secondNum);
//       operationSimbol = "+";
//     break;

//     case 'sub':
//       result = Number(firstNum) - Number(secondNum); 
//       operationSimbol = "-";
//     break; 

//     case 'mul':
//       result = Number(firstNum) * Number(secondNum);
//       operationSimbol = "*"; 
//     break;

//     case 'div':
//       result = Number(firstNum) / Number(secondNum); 
//       operationSimbol = "/";
//     break;

//     default:
//       return {message: "Invalid operation!"};

//   }

//   return response = {firstNum: `${firstNum}` ,
//                   operation: `${operationSimbol}`,
//                   secondNum: `${secondNum}`,
//                   result: `${result}`}
// }
