function handleCopyText() {
    const selectedText = window.getSelection()?.toString();
    if (selectedText) {
        window.selectedText = selectedText;
        showNotification(NOTIFICATIONS.SUCCESS_COPY, true);
    } else {
        showNotification(NOTIFICATIONS.ERROR_NO_SELECTION, false);
    }
}

function handleTranspileText() {
    if (window.selectedText) {
        navigator.clipboard.writeText(translateText(window.selectedText))
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