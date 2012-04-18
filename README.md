This is a simple demonstration of the use of [`window.postMessage`](https://developer.mozilla.org/en/DOM/window.postMessage) to pass messages between two separate Safari extensions. There are a pair of extensions here, named Click [(download)](https://github.com/downloads/canisbos/ClickClack/Click.safariextz) and Clack [(download)](https://github.com/downloads/canisbos/ClickClack/Clack.safariextz). Each extension has a toolbar button. Clicking one extension's toolbar button will cause the other extension to flip its toolbar button image.

Note that message passing will fail if there is not a valid document in the current tab.