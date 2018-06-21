<div align="center">
<h1>mobile-safari-fullscreen</h1>

<p>Fix for mobile Safari fullscreen issue</p>
</div>

<hr />

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## The problem

There is long standing bug in Mobile Safari https://bugs.webkit.org/show_bug.cgi?id=153852.

## This solution

This React component implements solution described in https://www.eventbrite.com/engineering/mobile-safari-why/ e.g. it always shows top and bottom bars in the Mobile Safari.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
- [Inspiration](#inspiration)
- [Other Solutions](#other-solutions)
- [Contributors](#contributors)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `dependencies`:

```
npm install --save mobile-safari-fullscreen
```

## Usage

```js
import FullScreen from 'mobile-safari-fullscreen'
import styles from 'mobile-safari-fullscreen/index.module.css'

;<FullScreen classNames={styles} isOpen={isOpen}>
  <YourModalHere isOpen={isOpen} />
</FullScreen>
```

## Inspiration

https://www.eventbrite.com/engineering/mobile-safari-why/

## Other Solutions

I'm not aware of any, if you are please [make a pull request][prs] and add it
here!

## Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/179534?s=460&v=4" width="100px;"/><br /><sub><b>stereobooster</b></sub>](https://github.com/stereobooster)<br />[💻](https://github.com/stereobooster/mobile-safari-fullscreen/commits?author=stereobooster "Code") [📖](https://github.com/stereobooster/mobile-safari-fullscreen/commits?author=stereobooster "Documentation") [🚇](#infra-stereobooster "Infrastructure (Hosting, Build-Tools, etc)") [⚠️](https://github.com/stereobooster/mobile-safari-fullscreen/commits?author=stereobooster "Tests") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/stereobooster/mobile-safari-fullscreen.svg?style=flat-square
[build]: https://travis-ci.org/stereobooster/mobile-safari-fullscreen
[coverage-badge]: https://img.shields.io/codecov/c/github/stereobooster/mobile-safari-fullscreen.svg?style=flat-square
[coverage]: https://codecov.io/github/stereobooster/mobile-safari-fullscreen
[version-badge]: https://img.shields.io/npm/v/mobile-safari-fullscreen.svg?style=flat-square
[package]: https://www.npmjs.com/package/mobile-safari-fullscreen
[downloads-badge]: https://img.shields.io/npm/dm/mobile-safari-fullscreen.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/mobile-safari-fullscreen
[license-badge]: https://img.shields.io/npm/l/mobile-safari-fullscreen.svg?style=flat-square
[license]: https://github.com/stereobooster/mobile-safari-fullscreen/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/stereobooster/mobile-safari-fullscreen/blob/master/other/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/stereobooster/mobile-safari-fullscreen.svg?style=social
[github-watch]: https://github.com/stereobooster/mobile-safari-fullscreen/watchers
[github-star-badge]: https://img.shields.io/github/stars/stereobooster/mobile-safari-fullscreen.svg?style=social
[github-star]: https://github.com/stereobooster/mobile-safari-fullscreen/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20mobile-safari-fullscreen%20by%20%40stereobooster%20https%3A%2F%2Fgithub.com%2Fstereobooster%2Fmobile-safari-fullscreen%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/stereobooster/mobile-safari-fullscreen.svg?style=social
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/stereobooster/all-contributors
