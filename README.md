# Calculator 3000 Vue3 Typescript App

#### App demo

https://calculator3000.onrender.com

### Run locally

#### Clone repo

Clone the app repo, main branch:

```
git clone https://github.com/quantium-rock/innocv-calculator && cd innocv-calculator/app
```

#### Install packages

```
yarn
```

You can use ' npm i ' instead.

\* Make sure to be in the ' app/ ' folder

#### Compiles and hot-reloads for development

```
yarn serve
```

#### Compiles and minifies for production /dist

Build for production:

```
yarn build
```

#### Deploy the app

After success build, deploy to gh-pages:

```
yarn deploy
```

Or in the repo root directory, after app build:

```
git subtree push --prefix app/dist origin gh-pages && gh-pages app/dist
```

In this case, make sure to have installed gh-pages cli or install it:

```
npm i -g gh-pages
```

## TODO

1. Refactor components in smaller ones.
2. Extract component's functions to servcies/index.ts.
3. Add long number exponential reduction (btn) option.
4. Add %, sin() and cos() operators.
5. Add equation solving function with greek letters.
6. Add more complex expressions calculations.
7. Add animations for imaginary numbers (like infinite or negative roots), NANs and zero divides.
8. Add derivative and differential operators.

* Pull requests are accepted.

## Project Instructions

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

### License

MIT License: Free rights of use.
