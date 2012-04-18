function handleInternalMessage(e) {
    if (e.name === 'sendRequest') {
        window.postMessage(e.message, '*');
    }
}
function handleExternalMessage(e) {
    if (e.origin === location.protocol + '//' + location.host) {
        safari.self.tab.dispatchMessage('handleRequest', e.data);
    }
}

safari.self.addEventListener('message', handleInternalMessage, false);
window.addEventListener('message', handleExternalMessage, false);