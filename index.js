var counter = 0

window.addEventListener('load', function () {
    sessionStorage.setItem('sessionStorageTest', 1);
    localStorage.setItem('localStorageTest', 2);
    document.body.insertAdjacentHTML('afterbegin', 'NAVIGATOR <code class="json">' + JSON.stringify({
        appCodeName: navigator.appCodeName,
        appName: navigator.appName,
        appVersion: navigator.appVersion,
        bluetooth: navigator.bluetooth,
        connection: navigator.connection,
        cookieEnabled: navigator.cookieEnabled,
        deviceMemory: navigator.deviceMemory,
        hardwareConcurrency: navigator.hardwareConcurrency,
        language: navigator.language,
        languages: navigator.languages,
        maxTouchPoints: navigator.maxTouchPoints,
        platform: navigator.platform,
        product: navigator.product,
        userAgent: navigator.userAgent,
        vendor: navigator.vendor,
        sessionStorage,
        localStorage,
    }) + '</code>');

    highlightCode();
})

document.addEventListener('keydown', function (e) {
    e.stopPropagation();
    appendData(getKeyData(e));
});
document.addEventListener('click', function (e) {
    e.stopPropagation();
    appendData(getKeyData(e));
});

document.addEventListener('mousemove', function (e) {
    e.stopPropagation();
    //appendData(getMouseData(e));
});

function highlightCode() {
    document.querySelectorAll('code').forEach((block) => {
        hljs.highlightBlock(block);
    });
}

function getKeyData(e) {
    return {
        code: e.code,
        key: e.key,
        keyCode: e.keyCode,
        type: e.type,
        which: e.which,
    }
}

function getMouseData(e) {
    return {
        type: 'MOUSE',
        x: e.x,
        y: e.y,
        screenX: e.screenX,
        screenY: e.screenY,
    }
}

function appendData(obj) {
    var text = '<pre>' + (counter++) + '  ' + JSON.stringify(obj) + '</pre>';
    document.body.insertAdjacentHTML('afterbegin', text);
}
