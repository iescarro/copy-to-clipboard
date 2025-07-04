# 📋 copy-to-clipboard

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
    import { copyToClipboard } from 'https://cdn.jsdelivr.net/gh/iescarro/copy-to-clipboard@v1.0.1/dist/index.js';
</script>
```

## 🚀 Usage

### Basic Usage

```html
<script type="module">
    import { copyToClipboard } from 'https://cdn.jsdelivr.net/gh/iescarro/copy-to-clipboard@v1.0.1/dist/index.js';

    document.getElementById('copyBtn').addEventListener('click', function () {
        copyToClipboard(this, '✔️', '❌');
    });
</script>

<a id="copyBtn" data-value="Hello, world!">📋</a>
```

## 📘 API

copyToClipboard(targetElement?, defaultCopiedText?, defaultFailedText?)

| Parameter          | Type     | Description                                                                 |
|--------------------|----------|-----------------------------------------------------------------------------|
| targetElement      | Element? | (Optional) The DOM element whose text will temporarily change during copy feedback. |
| defaultCopiedText  | string?  | (Optional) The original text to restore after successful copy. Defaults to `📋 Copied!`. |
| defaultFailedText  | string?  | (Optional) The text to display when copy fails. Defaults to `❌ Failed!`. |

Returns: true if copy was successful, otherwise false.

## 🧪 Example (Live Demo)

You can try it live here:

👉 CodeSandbox Demo (todo, add one later)

## 📄 License

MIT — Free to use, modify, and distribute.
