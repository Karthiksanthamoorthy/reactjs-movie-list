short Key
ctrl+`-->
ctrl+, -->
ctrl+c -->
win+. -->

Intro to React

1.JSX (Javascript XML)->JS (Webpack+Babel)
2.Inside return()is JSX

Why ClassName?

1.Class is a reserved keyword in JS
2.for->htmlFor in JSX

{}->Template Syntax

1.Supports expression

### Handy shortcut

ctrl+`--> Show / hide terminal
ctrl+, --> setting | format on save
ctrl+c --> stop react server in terminal
win+. --> emojis

npm start---> to start Terminal

### Purpose of index.js

1.Bootstrap (Start) the react

### Raect.StrictMode --Error Checking

1.Displays Error in console

### Function to be considered as Componenet

1.function should start with capital letter
2.It should return at least one JSX element

### Props->arguments

1.props->Properties of components

### <></>->react fragment

1.Avoiding extra element
2.Styling is easier

### Hooks

1.React listen to changes made by hooks
2.Hooks - Function
3.It start with 'use'
4.'useState'

1. const [state, setState] =useState(InitialValue)
2. state --> State of mind | State of the art Technology | current
3. In App State--> _current data_
4. 'setState' updates the value of 'State'
5. 'setState' react listen and update 'state' & view
6. `import { useState } from "react";`
7. Flow: USer clicks -> `onClick` trigger ->`setLike` -> React updates view

### imports & exports

1. Types
   1. named - imports & exports - preferred
      1. Multiple exports
   2. default - imports & exports
      1. Only one default export per file
2. Always put export at end of the file - good practice

### Virtual DOM

1. Copy of the Real Dom
2. Large `{key: value}`
3. Updating it does not cost performance
4. To access VDOM you could use hooks (setState)
5. Once the update is done on the virtual DOM, then the Real dom is updated
6. Comparison - Reconciliation - VDOM & Real Dom
7. Key helps to quickly compare the changes
8. `document.*` in React - Looses performance

When we have Routing

1. Organized
2. Ease of access
3. sharing URL
4. Secure route

# Hash vs / Browser Router

1. older Browsers 1. New Browsers
2. Eg: IE 2. Additional Feature
3. Work both in new and old browsers 3. Only in new Browsers
