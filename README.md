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
\* Make sure to be in the ./app/ folder.

You can use ' npm i ' instead.

#### Compiles and hot-reloads for development

```
yarn dev
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

In this case, make sure to have installed gh-pages cli, otherwise, install it with the following cmd:

```
npm i -g gh-pages
```

## TODO

1. Refactor components in smaller ones.
2. Extract component's functions to servcies/index.ts.
3. Add long number exponent reduction (btn) option.
4. Add %, sin() and cos() operators.
5. Add sum(), mean(), median(), mode(), range(), variance(), stdev(), covariance(), pearsonCorr() and r2() functions.
7. Add equation solving function with greek letters.
8. Add more complex expressions calculations.
10. Add more math constants.
11. Add animations for imaginary numbers (like infinite or negative roots), NANs and zero divides.
12. Add derivatives calculations with differential operator.
13. Upgrade store.operations console to 'latex' syntax.
14. Add letters keyboard option for future terminal implementation with openai api.
15. In terminal, add transfer crypto & NFT commands with web3-wallet adapters.
16. In terminal, add scraping web commands.
17. In terminal, add image, audio and video supporting.
18. In terminal, implement speech-to-text & text-to-speech multi-language models.
19. Build & deploy a Node(ts) (or Bun) server + cloud DB, for user's authentification and online app services.

Proposals and Pull Requests are most welcome.

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
