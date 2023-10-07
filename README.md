<!-- Please update value in the {}  -->

<h1 align="center">Windbnb</h1>

<div align="center">
   Solution for a challenge from  <a href="http://legacy.devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://ch-windbnb-h-yoshikawa44.vercel.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://legacy.devchallenges.io/solutions/ftLx16ngH2CDg6hFPU76">
      Solution
    </a>
    <span> | </span>
    <a href="https://legacy.devchallenges.io/challenges/3JFYedSOZqAxYuOCNmYD">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
  - [Desktop](#desktop)
  - [Mobile](#mobile)
  - [Built With](#built-with)
- [Features](#features)
- [How To Use](#how-to-use)
- [learned/improved](#learnedimproved)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview
### Desktop
![overview - desktop](/screenshots/desktop.png)

---

![overview - desktop-drawer](/screenshots/desktop-drawer.png)

### Mobile
<img src="./screenshots/mobile.png" alt="overview - mobile" width="35%">

---

<img src="./screenshots/mobile-drawer.png" alt="overview - mobile-drawer" width="35%">

A page with a simple search function has been created.

Even though it was only one screen and a drawer menu, there were surprisingly many things to think about when implementing it, and I learned a lot.

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

Base
- [Node.js](https://nodejs.org/)：20.8.0
- [TypeScript](https://www.typescriptlang.org/)：4.5.5
- [React](https://reactjs.org/)：17.0.2
- [Next.js](https://nextjs.org/)：12.1.0

Other major libraries
- [emotion](https://emotion.sh/)
- [emotion-icons](https://emotion-icons.dev/)
- [csx](https://typestyle.github.io/#/colors)
- ~~[ky](https://github.com/sindresorhus/ky)~~
- ~~[React Query](https://react-query.tanstack.com/)~~
- [focus-visible](https://github.com/WICG/focus-visible)
- [wicg-inert](https://github.com/WICG/inert)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://legacy.devchallenges.io/challenges) challenge. The [challenge](https://legacy.devchallenges.io/challenges/3JFYedSOZqAxYuOCNmYD) was to build an application to complete the given user stories.

- [x] User story: I can see a list of properties
- [x] User story: I can see the property card with a name, rating, apartment type, and super host
- [x] User story: I can open the filter drawer
- [x] User story: I can filter properties by location and number of guests
- [x] User story: I can see the number of filtered items
- [x] User story: I can see pages following given designs
## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](https://www.npmjs.com/)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone git@github.com:h-yoshikawa44/windbnb.git
or
git clone https://github.com/h-yoshikawa44/windbnb.git

# Install dependencies
npm install

# Run the app
npm run dev
```

## learned/improved
- The default value for the type attribute of the button is `type="submit "`.
- Pseudo-elements mean that they cannot be used with void elements.
- Ability to control element inactivity with the inert attribute.(Need to use polyfill for now.)
- Basic usage of ky.
- How to do synchronous data retrieval with React Query.
- How to transpile with `next-transpile-modules` when using ESM libraries in Next.js environment.
- How to use an external URL in next/image.
- How to use React Query in the Next.js environment.
- Difference between auto-fill and auto-fit in Grid Layout.

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example: -->

- [Material UI](https://material-ui.com/)
- [React Query](https://react-query.tanstack.com/)
- [GitHub - WICG/inert - React doesn't play nice with inert property ](https://github.com/WICG/inert/issues/58)
- [GitHub - vercel/next.js - ky-universal throws error "Cannot use import statement outside a module"](https://github.com/vercel/next.js/discussions/21252)
- [【初心者でもわかる】疑似要素が表示されない時に確認する7つの事 ＆ 確認方法](https://qiita.com/7note/items/7cb88dca241a22b54e5c)
- [ReactでInputフォームのEnterキーで処理を行う](https://blog.freks.jp/react-submit-with-enter/)
- [form 内の button 要素を押すと submit される理由](https://zenn.dev/phi/articles/form-submit-button-type-default)
- [UIにおける見えるけど利用できない非活性な領域の実装とinert属性について](https://standard.shiftbrain.com/blog/unavailable-inert-regions-and-inert-attribute)
- [CSSで、button要素とinput要素のテキストを美しく揃えるスタイルシートのテクニック](https://coliss.com/articles/build-websites/operation/css/vertical-text-alignment-in-buttons-and-inputs.html)
- [CSS Gridを使うならマスターしておきたいauto-fillとauto-fitの違い](https://parashuto.com/rriver/development/cssgrid-autofill-vs-autofit)

## Contact

- Website：[h-yoshikawa44.com](https://h-yoshikawa44.com)
- GitHub：[@h-yoshikawa44](https://github.com/h-yoshikawa44)
- Twitter：[@yoshi44_lion](https://twitter.com/yoshi44_lion)
