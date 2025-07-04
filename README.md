# 📋 copy-to-clipboard-lite

A lightweight JavaScript utility for copying text to the clipboard with optional UI feedback. No dependencies, no jQuery — just simple, modern code.

---

## ✨ Features

- ✅ Zero dependencies
- ✅ Works in all modern browsers
- ✅ Optional feedback element (e.g., button text changes to “Copied!”)
- ✅ Minimal and readable

---

## 📦 Installation

### Using npm

```bash
npm install copy-to-clipboard-lite
```

## Using CDN

```html
<script type="module">
  import { copyToClipboard } from 'https://cdn.jsdelivr.net/npm/copy-to-clipboard-lite@1.0.0/dist/index.js';
</script>
```

## 🚀 Usage

### Basic Usage

```js
import { copyToClipboard } from 'copy-to-clipboard-lite';

copyToClipboard('Hello, world!');
```

### With Feedback Element

```html
<button id="copy-btn">Copy</button>
```

```js
const btn = document.getElementById('copy-btn');
btn.addEventListener('click', () => {
  copyToClipboard('This is the copied text!', btn, 'Copy');
});
```

## 📘 API

copyToClipboard(value, targetElement?, defaultText?)

Parameter	Type	Description
value	string	The string to be copied to the clipboard.
targetElement	Element?	(Optional) An element whose text will temporarily change.
defaultText	string?	(Optional) The original text to restore after feedback.

Returns: true if copy was successful, otherwise false.

## 🚀 Publish to npm

```
npm login
npm publish --access public
```

## 🧪 Example (Live Demo)

You can try it live here:

👉 CodeSandbox Demo (todo, add one later)

## 📄 License

MIT — Free to use, modify, and distribute.