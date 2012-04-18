var requestHandlers = {
    flipIcon: function () {
        safari.extension.toolbarItems.forEach(function (ti) {
            ti.image = safari.extension.baseURI + (ti.image.match('left.png') ? 'right' : 'left') + '.png';
        });
    }
};

function handleCommand(e) {
    if (e.command === 'flipOther') {
        safari.application.activeBrowserWindow.activeTab.page.dispatchMessage('sendRequest', {
            request: 'flipIcon',
            origin: safari.extension.baseURI,
            data: null
        });
    }
}
function handleMessage(e) {
    if (e.name === 'handleRequest') {
        if (e.message.origin !== safari.extension.baseURI) {
            requestHandlers[e.message.request]();
        }
    }
}

safari.application.addEventListener('command', handleCommand, false);
safari.application.addEventListener("message", handleMessage, false);
safari.application.activeBrowserWindow.activeTab.url = safari.application.activeBrowserWindow.activeTab.url;