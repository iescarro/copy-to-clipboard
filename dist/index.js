export function copyToClipboard(value, targetElement, defaultCopiedText = '📋 Copied!', defaultFailedText = '❌ Failed!') {
    const textarea = document.createElement('textarea');
    textarea.style.position = 'fixed'; // avoid scroll jump
    textarea.style.opacity = '0';
    textarea.value = value;
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    let success = false;
    try {
        success = document.execCommand('copy');
    } catch (err) {
        console.error('Copy failed:', err);
    }

    document.body.removeChild(textarea);

    if (targetElement) {
        const originalText = targetElement.innerText;
        targetElement.innerText = success ? defaultText : defaultFailedText;
        setTimeout(() => {
            targetElement.innerText = originalText || defaultText;
        }, 800);
    }

    return success;
}