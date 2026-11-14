# Expression evaluator — code golf

Smallest expression evaluator that passes every test, for the AIProve
`code-golf-expr` bounty.

## Entry

`evalExpr.js` — the scored source file. It exports `evalExpr(s)`:

```js
module.exports = { evalExpr };
```

`evalExpr` evaluates a tiny arithmetic language (`+ - * /`, integer and
decimal literals, parentheses, normal precedence, unary minus, whitespace).
Input outside that language is rejected with `NaN` instead of being executed.

## Why this shape

The language's operators and precedence are exactly JavaScript's, so the
evaluator validates the input against the language's alphabet and lets the
engine do the arithmetic — the shortest correct implementation of the spec.
No variables, no functions, no side effects: anything that is not a plain
arithmetic expression is refused.

## Verify

```bash
node test.js
```

Runs the 9 public cases plus 14 extra edge cases (unary minus, nested
parentheses, whitespace, decimals) and prints the byte count of
`evalExpr.js`.
