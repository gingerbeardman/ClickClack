function flipIcon() {
	safari.extension.toolbarItems.forEach(function (ti) {
		if (ti.image.match('left.png')) {
			ti.image = safari.extension.baseURI + 'right.png';
		} else {
			ti.image = safari.extension.baseURI + 'left.png';
		}
	});
}
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
			if (e.message.request === 'flipIcon') {
				flipIcon();
			}
		}
	}
}

safari.application.addEventListener('command', handleCommand, false);
safari.application.addEventListener("message", handleMessage, false);
safari.application.activeBrowserWindow.activeTab.url = safari.application.activeBrowserWindow.activeTab.url;