# Calculator 300 vue3-ts app

## Calculator3000 demo

https://quanitum-rock.github.io/innocv-calculator


## Run the app

Clone the app repo, main branch:

```
git clone https://github.com/quantium-rock/innocv-calculator/tree/main/app
```

### Install packages

```
yarn
```

You can use ' npm i ' instead.

### Compiles and hot-reloads for development

Run locally:

```
yarn start
```

### Compiles and minifies for production /dist

Build for production:

```
yarn build
```

### Deploy the app

Deploy to gh-pages:

```
yarn deploy
```


## Instructions

Using the Vue framework, build a functional calculator with a nice user interface using only HTML, CSS or a style preprocessor and TypeScript (JavaScript can be used but the use of TypeScript is the one that will be most valued). It does not need to handle all types of errors, but there should be some basic error reporting.

Requirements:

1.  Should be able to perform an operation on two numbers.

2.  Basic error reporting.

3.  Code is modular, bug-free and not prune to code injections (beware of "eval" ;) ).

Nice to have's:

- Functionals

1.  Support for more complex operations (3 o more operands).

2.  Support for "last result memory".

- Technicals

1.  State management (Vuex for vue2, Pinia for vue3)

2.  Usage or CSS postprocessors instead of preprocesors. Usage of utility-first tools like TailwindCSS will be appreciated.

3.  Usage of class components, either if you use version 2 or 3 of the framework.

4.  Intensive usage of TS's typing parametrization subsystem (`interface MyInterface<TGender> { ... }` or `type NumberKey = '0' | '1' | ...`).

5.  There is not too much room for "big architectures" in a tiny project like this calculator, but usage of good practices, design patterns and "solid" coding will be highly appreciated.
