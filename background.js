chrome.commands.onCommand.addListener((command) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]?.id) {
            handleCommandOnTab(tabs[0].id, command);
        }
    });
});

function handleCommandOnTab(tabId, command) {
    chrome.scripting.executeScript({
        target: { tabId },
        func: processCommand,
        args: [command]
    });
}

function processCommand(command) {
    if (command === 'transp_q') {
        handleTranspileText(showNotification);
    }
}