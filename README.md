<p align="center">
  <a href="https://wave-studios.netlify.app/jsboard">
    <img src="https://wave-studios.netlify.app/logos/jsboard-small.png" height="96" class="rounded">
    <h2 align="center" class="size">JSBoard</h3>
  </a>
  <p align="center">Next-generation forums software</p>
  <br> </br>
</p>

[![forthebadge](https://forthebadge.com/images/badges/not-a-bug-a-feature.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/as-seen-on-tv.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-grav.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/certified-yourboyserge.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/compatibility-club-penguin.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/ctrl-c-ctrl-v.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/designed-in-ms-paint.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/works-on-my-machine.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/contains-tasty-spaghetti-code.svg)](https://forthebadge.com)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=for-the-badge)](https://github.com/RichardLitt/standard-readme)

JSBoard is a next-generation, community-first forum software written using Nextjs and Mongodb. Currently, JSBoard is in development and **NOT** stable for production. It's designed to be simple to use while also offering extensive configuration and management to fit perfectly within any community of any scale. For support please visit [**our discord**](https://discord.gg/jV5Jvt7z)

## Table of Contents

- [Contributing](#contributing)
- [Bugs](#bugs)
- [Feature Requests](#feature-requests)
- [Background](#background)
- [Install](#install)
- [Addon API](#addon-api)

## Contributing

See [the contributing file](Committing.md)! We love more people to help with this project, and if you have any questions feel free to ask on [our discord](https://discord.gg/jV5Jvt7z).

## Bugs

If you believe you have found a bug then do the following:

1. Create a **clean** install of JSBoard.
2. Attempt to reproduce the bug. Confirm its _actually_ a bug and not a user error.
3. If you can reproduce it, then file a bug report [here](https://github.com/wave-studio/JSBoard/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBug%5D+%3CInsert+your+title+here%3E). In some cases you may need to keep the repo and publish it to Github so we can see the issue for ourselves.

## Feature Requests

Create a feature request [here](https://github.com/wave-studio/JSBoard/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=%5BRequest%5D)

## Install

Installing is pretty simple, all you need to do is download the ZIP and open it inside your preferred terminal, make sure you have Node.js and Yarn, then run `yarn`, `yarn build`, and `yarn start` in that order. We'll have more information when we release our first MVP.

## Background

JSBoard wasn't always this clean and polished. Its first version looked a little something like this:

[![image](https://user-images.githubusercontent.com/69743171/130735959-dbd19c99-a094-43bc-ac6e-5d19be90212e.png)](https://jsboard.blocksnmore.repl.co/forums/)

We also had this as well:

![image](https://user-images.githubusercontent.com/69743171/137646351-fbc09cd0-d33d-4699-9744-852885748ad5.png)

Yea, those were some dark days...

Next up, we have the "jsboard-frontend" written in plain html with ejs (which is not a framework, by the way, it's sort of like a budget components implementation. I'm sad to say I (quick007) was impressed when I first saw this...). It also has express and tailwind, which I used their [components page](https://tailwindcomponents.com) and some "css action" to create this absolute masterpiece:

[![image](https://user-images.githubusercontent.com/69743171/130737889-efe5db5d-60b2-4039-b801-fa450b73d860.png)](https://jsboard-test.luseufert5.repl.co)

Today of course we have the look of today's JSBoard. Honestly, there's a lot of new design stuff I'd (quick007) love to throw at it someday, but for now, you're going to have to like the playful stacked boxes theme I've created.

## Addon-API

Learn how to create an addon [here](https://github.com/wave-studio/JSBoard/wiki/Creating-an-Addon)

PRs accepted (read the [contributing section](#contributing)!1!1)

Small note: If editing the Readme, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.
