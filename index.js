var counter = 0

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
    appendData(getMouseData(e));
});

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
