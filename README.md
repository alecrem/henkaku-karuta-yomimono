# henkaku-karuta-yomimono

## p5.js sketch usage

Open or serve `index.html`.

The main branch is deployed to: [https://alecrem.github.io/henkaku-karuta-yomimono/](https://alecrem.github.io/henkaku-karuta-yomimono/)

## The shuffle

Cards are shuffled before you start flipping through them, so that:

- Cards will appear in a hopefully unpredictable order
- Each card will appear exactly once

The standard way to offer a shuffle (and the one that is published on GitHub Pages for this repository) is producing a new shuffle each time the page is loaded.

For use cases where you want a number of clients to share a shuffle so they can take turns to read the cards, use the static shuffle method.

### Static shuffle

You may want to fork this repository to add some changes to `sketch.js`, and then publish your own version to GitHub Pages or elsewhere.

1. Produce a static shuffle by running `node shuffler.js` on your terminal
2. Copy the resulting line of code (`yomimonoOrder = [...`) and paste it at the end of `sketch.js`

That is it. Now you only need to make `index.html` and `sketch.js` to your users.
