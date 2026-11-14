// test.js — local verification for evalExpr.js (not the scored source file).
// Runs the public cases plus extra edge cases, and prints the byte count.
const { evalExpr } = require("./evalExpr");
const fs = require("fs");

const cases = [
  // public cases (challenges/code-golf-expr/cases.json)
  ["1+2*3", 7], ["(1+2)*3", 9], ["10/4", 2.5],
  ["2*2*2*2", 16], ["7-3-2", 2], ["(8-2)/(1+2)", 2],
  ["3.5+1.5", 5], ["100", 100], ["2*(3+(4-1))", 12],
  // extra edge cases (precedence, unary minus, whitespace, nesting, decimals)
  ["-5+3", -2], ["2*-3", -6], ["-(2+3)", -5], [" 1 + 2 ", 3],
  ["((2))", 2], ["10/(2+3)", 2], ["5-10", -5], ["2.5*4", 10],
  ["1.5*1.5", 2.25], [".5+0.5", 1], ["0.1+0.2", 0.30000000000000004],
  ["1000/8", 125], ["3*(2+1)*(4-2)", 18],
];

let fail = 0;
for (const [input, expected] of cases) {
  const got = evalExpr(input);
  const ok = Object.is(got, expected);
  if (!ok) fail++;
  console.log(`${ok ? "PASS" : "FAIL"} evalExpr(${JSON.stringify(input)}) = ${got} (expected ${expected})`);
}
const bytes = fs.statSync("./evalExpr.js").size;
console.log(`\nsource bytes (evalExpr.js): ${bytes}`);
console.log(fail === 0 ? `ALL ${cases.length} CASES PASS` : `${fail} FAILURES`);
process.exit(fail === 0 ? 0 : 1);
