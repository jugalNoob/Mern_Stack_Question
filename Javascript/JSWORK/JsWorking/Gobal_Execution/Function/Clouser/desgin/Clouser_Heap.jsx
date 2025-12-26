HEAP
┌───────────────────────────────┐
│ Outer Function Object          │
├───────────────────────────────┤
│ [[Code]]      → outer() code   │
│ [[Scope]]     → Global Lex Env│
│ [[Prototype]] → Function.prototype
└───────────────────────────────┘
        │
        ▼
    Outer Lexical Environment
    ┌─────────────────────────────┐
    │ x = 10                      │
    │ (variables of Outer)        │
    └─────────────────────────────┘
        │
        ▼
┌─────────────────────────────┐
│ inner Function Object        │
├─────────────────────────────┤
│ [[Code]]      → console.log(x++) │
│ [[Scope]]     → Outer Lex Env    │  ← closure!
│ [[Prototype]] → Function.prototype
└─────────────────────────────┘
