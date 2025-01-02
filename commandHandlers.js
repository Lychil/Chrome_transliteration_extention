function handleCopyText() {
}

function handleTranspileText() {
    let selectedText = '';
    const activeElement = document.activeElement;

    if (activeElement && (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA")) {
        const selectionStart = activeElement.selectionStart;
        const selectionEnd = activeElement.selectionEnd;

        if (selectionStart !== null && selectionEnd !== null) {
            selectedText = activeElement.value.substring(selectionStart, selectionEnd);
        }
    } else {
        selectedText = window.getSelection()?.toString();
    }

    if (selectedText) {
        navigator.clipboard.writeText(translateText(selectedText))
            .then(() => {
                showNotification(NOTIFICATIONS.SUCCESS_TRANSPILE, true);
            })
            .catch(() => {
                showNotification(NOTIFICATIONS.ERROR_TRANSPILE, false);
            });
    } else {
        showNotification(NOTIFICATIONS.ERROR_NO_TEXT, false);
    }
}