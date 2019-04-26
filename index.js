var counter  = 0

document.addEventListener('keydown', function (e) {
    e.stopPropagation();
    var data = {
        code: e.code,
        key: e.key,
        keyCode: e.keyCode,
        type: e.type,
        which: e.which,
    }
    var text = '<pre>' + (counter++) + '  ' + JSON.stringify(data) + '</pre>';
    document.body.insertAdjacentHTML('afterbegin', text);
    console.log(e);
});
document.addEventListener('click', function (e) {
    //body.innerHTML = JSON.stringify(e)
    console.log(e);
});
